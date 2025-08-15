<script setup>
import { onMounted } from 'vue';

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
        <!-- START ABOUT IMAGE DESIGN AREA -->
        <div class="col-lg-4">
          <div class="about-image-part wow fadeInUp delay-0-3s">
            <img src="~/assets/images/about/profile.png" alt="About Me" />
            <h2>Oliseyenum Omodi</h2>
            <p>I am a Web Designer, Mathematician, and Data Scientist based in Abuja, Nigeria.</p>
            <div class="about-social text-center">
              <ul>
                <li>
                  <a href="https://www.facebook.com/oliseyenumomodi" target="_blank">
                    <i class="ri-facebook-circle-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/oliseomodi" target="_blank">
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/oliseomodi" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- / END ABOUT IMAGE DESIGN AREA -->
        <!-- START ABOUT TEXT DESIGN AREA -->
        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <p>Hello There!</p>
            <h2>
              {{"I'm"}} Oliseyenum Omodi, a Web Designer, Mathematician, and Data Scientist.
            </h2>
            <p>
              I am a web designer who is passionate about building functional and beautiful websites and web applications. I am familiar with major development tools and technologies for both front-end and back-end development. I love solving complex problems and creating elegant solutions that make a real impact.
            </p>
            <div class="adress-field">
              <ul>
                <li><i class="ri-circle-fill"></i>Available for Freelancing</li>
              </ul>
            </div>
         <div class="hero-btns">
  <!-- Use a regular <a> tag with the 'download' attribute -->
  <a href="/Profile.pdf" download class="theme-btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition-colors">
    Download CV <i class="ri-download-line"></i>
  </a>
</div>
          </div>
          <div class="about-content-part-bottom wow fadeInUp delay-0-2s">
            <h2>Company I Worked With</h2>
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
        </div>
        <!-- / END ABOUT TEXT DESIGN AREA -->
      </div>
    </div>
  </section>
</template>
