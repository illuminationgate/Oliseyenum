// server/api/contact.post.ts
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    // Get the form data from the request body
    const body = await readBody(event);
    const { name, email, message } = body;

    // Use the resend.emails.send method to send the email
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Replace with an email address from your VERIFIED domain
      from: 'Contact Form <noreply@olise.igatehub.com>', 
      
      // This is the destination email address
      to: ['oliseyenumomodi@gmail.com'], 
      
      // Subject of the email
      subject: `New Message from ${name} via Portfolio`,
      
      // The content of the email
      html: `
        <p>You have received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // If there was an error sending the email, throw it
    if (error) {
      console.error('Resend Error:', error);
      throw new Error('Failed to send email.');
    }

    // Return a success response
    return { success: true, data };

  } catch (error) {
    console.error('Handler Error:', error);
    // Return an error response
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
