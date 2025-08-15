<script setup>
import { ref } from 'vue';

// Reactive variables to hold form data
const name = ref('');
const email = ref('');
const message = ref('');

// Reactive variables for form submission status
const formMessage = ref('');
const formError = ref(false);
const isLoading = ref(false);

// Function to handle the form submission
async function handleSubmit() {
  // Reset previous messages and set loading state
  formMessage.value = '';
  formError.value = false;
  isLoading.value = true;

  try {
    // Send the form data to our serverless function
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    // Check if the request was successful
    if (!response.ok) {
      // If not, throw an error to be caught by the catch block
      throw new Error('Sorry, there was an error sending your message.');
    }

    // If successful, show a success message
    formMessage.value = 'Message sent successfully! Thank you.';
    
    // Clear the form fields
    name.value = '';
    email.value = '';
    message.value = '';

  } catch (error) {
    // If an error occurs, show an error message
    formMessage.value = error.message || 'Failed to send message. Please try again.';
    formError.value = true;
  } finally {
    // Reset loading state regardless of outcome
    isLoading.value = false;
  }
}
</script>

<template>
  <section id="contact" class="contact-area innerpage-single-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <p>contact</p>
              <h2>Get in Touch with Me!</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="contact-content-part wow fadeInUp delay-0-2s">
              <!-- START CONTACT SINGLE DESIGN AREA -->
              <div class="single-contact wow fadeInUp" data-wow-delay=".2s">
                <div class="contact-icon">
                  <i class="ri-map-pin-line"></i>
                </div>
                <h2>My Location:</h2>
                <p>Abuja, Nigeria</p>
              </div>
              <!-- / END CONTACT SINGLE DESIGN AREA -->
              <!-- START CONTACT SINGLE DESIGN AREA -->
              <div class="single-contact wow fadeInUp" data-wow-delay=".4s">
                <div class="contact-icon">
                  <i class="ri-phone-line"></i>
                </div>
                <h2>contact number:</h2>
                <p>+2348112143148</p>
              </div>
              <!-- / END CONTACT SINGLE DESIGN AREA -->
              <!-- START CONTACT SINGLE DESIGN AREA -->
              <div class="single-contact wow fadeInUp" data-wow-delay=".6s">
                <div class="contact-icon">
                  <i class="ri-mail-line"></i>
                </div>
                <h2>Email me:</h2>
                <p>oliseyenumomodi@gmail.com</p>
              </div>
              <!-- / END CONTACT SINGLE DESIGN AREA -->
            </div>
          </div>
          <!-- START CONTACT FORM DESIGN AREA -->
          <div class="col-lg-8">
            <div class="contact-form contact-form-area wow fadeInUp delay-0-4s">
              <!-- Bind the form submission to our handleSubmit function -->
              <form
                id="contactForm"
                class="contactForm"
                @submit.prevent="handleSubmit"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Full Name</label>
                      <!-- Use v-model to bind input to the 'name' variable -->
                      <input
                        v-model="name"
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                        placeholder="Olise Omodi"
                        required
                      />
                      <label for="name" class="for-icon"
                        ><i class="far fa-user"></i
                      ></label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <!-- Use v-model to bind input to the 'email' variable -->
                      <input
                        v-model="email"
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                        placeholder="hello@websitename.com"
                        required
                      />
                      <label for="email" class="for-icon"
                        ><i class="far fa-envelope"></i
                      ></label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="message">Your Message</label>
                      <!-- Use v-model to bind textarea to the 'message' variable -->
                      <textarea
                        v-model="message"
                        name="message"
                        id="message"
                        class="form-control"
                        rows="4"
                        placeholder="Write Your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-0">
                      <button type="submit" :disabled="isLoading" class="theme-btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition-colors">
                        <!-- Show a loading message when submitting -->
                        <span v-if="isLoading">Sending...</span>
                        <span v-else>Send Me Message <i class="ri-mail-line"></i></span>
                      </button>
                      <!-- This div will display success or error messages after submission -->
                      <div v-if="formMessage" :class="['mt-3 p-3 rounded-md', formError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700']">
                        {{ formMessage }}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- / END CONTACT FORM DESIGN AREA -->
        </div>
      </div>
    </div>
  </section>
</template>
