// server/api/contact.post.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email, message } = body;

    // You can also use `resend.emails.send` to send emails
    const data = await resend.contacts.create({
      email: 'oliseyenumomodi@gmail.com', // The email address you want to send to
      firstName: name,
      unsubscribed: false,
      audienceId: 'YOUR_AUDIENCE_ID', // Replace with your Audience ID from Resend
    });

    return { data };
  } catch (error) {
    return { error };
  }
});