<script setup>
import { onMounted } from 'vue';

// Define the skills array for the ticker
const skills = [
  "HTML", "CSS", "JavaScript", "PHP", "Laravel", "React", "Next.js", "Nuxt.js",
  "Node.js", "PostgreSQL", "SQL", "Data Science", "Data Analysis", "Supabase", "Git/GitHub"
];

onMounted(() => {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for reduced motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation(scrollers);
  }

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
});
</script>

<template>
  <section id="about" class="about-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <!-- Services + Skills Section -->
          <div class="about-content-part-bottom wow fadeInUp delay-0-2s custom-container section-spacing">
            <div class="row">
              <div class="col-xl-12 col-lg-12">
                <div class="section-title text-center">
                  <p>Services</p>
                  <h2>Quality Services</h2>
                </div>
              </div>
            </div>
            <div class="row d-flex align-items-stretch">
              <!-- START SINGLE SERVICE -->
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-item wow fadeInUp delay-0-2s bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 h-100">
                  <i class="ri-global-fill text-indigo-600 text-4xl mb-4"></i>
                  <h4 class="text-xl font-bold text-gray-900">Web Design & Development</h4>
                  <p class="mt-2 text-gray-600">
                    Crafting visually stunning and highly functional websites and web applications tailored to your needs. My expertise includes both front-end and back-end development.
                  </p>
                </div>
              </div>
              <!-- / END SINGLE SERVICE -->

              <!-- START SINGLE SERVICE -->
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-item wow fadeInUp delay-0-4s bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 h-100">
                  <i class="ri-quill-pen-line text-indigo-600 text-4xl mb-4"></i>
                  <h4 class="text-xl font-bold text-gray-900">Data Science & Analysis</h4>
                  <p class="mt-2 text-gray-600">
                    Providing data-driven insights and solutions to help you make informed business decisions with a strong foundation in mathematical and analytical principles.
                  </p>
                </div>
              </div>
              <!-- / END SINGLE SERVICE -->

              <!-- START SINGLE SERVICE -->
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-item wow fadeInUp delay-0-6s bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 h-100">
                  <i class="ri-pantone-fill text-indigo-600 text-4xl mb-4"></i>
                  <h4 class="text-xl font-bold text-gray-900">Mathematics Tutoring</h4>
                  <p class="mt-2 text-gray-600">
                    Helping students and professionals master complex mathematical concepts with a clear and engaging teaching style.
                  </p>
                </div>
              </div>
              <!-- / END SINGLE SERVICE -->
            </div>

            <!-- My Key Skills & Tools Section -->
            <div class="about-content-part-bottom wow fadeInUp delay-0-2s">
              <h2 class="section-heading">My Key Skills & Tools</h2>
              <div class="company-list">
                <div class="scroller" data-direction="left" data-speed="slow">
                  <div class="scroller__inner d-flex align-items-center gap-4">
                    <span v-for="skill in skills" :key="`1-${skill}`" class="px-4 py-2 text-xl font-bold rounded-full border-2 border-indigo-600 bg-gray-800 text-white shadow-md">{{ skill }}</span>
                    <span v-for="skill in skills" :key="`2-${skill}`" class="px-4 py-2 text-xl font-bold rounded-full border-2 border-indigo-600 bg-gray-800 text-white shadow-md">{{ skill }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Company I Worked With Section -->
          <div class="about-content-part-bottom wow fadeInUp delay-0-2s custom-container">
            <h2 class="section-heading">Company I Worked With</h2>
            <div class="company-list">
              <div class="scroller" data-direction="left" data-speed="slow">
                <div class="scroller__inner">
                  <img src="~/assets/images/client-logos/partner1.png" alt="Partner 1" />
                  <img src="~/assets/images/client-logos/partner2.png" alt="Partner 2" />
                  <img src="~/assets/images/client-logos/partner3.png" alt="Partner 3" />
                  <img src="~/assets/images/client-logos/partner4.png" alt="Partner 4" />
                  <img src="~/assets/images/client-logos/partner5.png" alt="Partner 5" />
                  <img src="~/assets/images/client-logos/partner1.png" alt="Partner 1" />
                </div>
              </div>
            </div>
          </div>

        </div> <!-- col-lg-12 -->
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
</template>

<style scoped>
.custom-container {
  max-width: 1320px; /* increased width */
  margin: 0 auto;
  padding: 0 15px;
}

.section-spacing {
  margin-bottom: 60px; /* space between services/skills and company section */
}

.section-heading {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding-top: 15px;
  padding-left: 5px;
  color: white;
}
</style>
