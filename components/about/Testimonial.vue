<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

// Import images so Vite/Webpack processes them
import author1 from "@/assets/images/testimonials/author1.jpg";
import author2 from "@/assets/images/testimonials/author2.jpg";

// Testimonial data for dynamic rendering
const testimonials = [
  {
    author: "Emmanuel Joshua",
    title: "CEO, Verity",
    image: author1,
    text: "“Oliseyenum is a talented professional with a great eye for design and a deep understanding of technology. His work on my project was exceptional, and he is a pleasure to work with.”",
  },
  {
    author: "Jane Smith",
    title: "Project Manager",
    image: author2,
    text: "“His expertise in web development and data analysis provided us with invaluable insights. The quality of their work is outstanding, and he consistently delivers.”",
  },
  {
    author: "Client Moses Aroghor",
    title: "Founder, Startup Inc.",
    image: author1,
    text: "“Oliseyenum's ability to blend web design with mathematical principles for data visualization was exactly what our project needed. The final product was both beautiful and highly functional.”",
  },
  {
    author: "Client Chet-Chet",
    title: "Manager, Icourier Services",
    image: author2,
    text: "“I was impressed by the seamless communication and the speed at which he delivered a high-quality, fully responsive website. His professionalism is top-notch.”",
  },
];
</script> 

<template>
  <section class="testimonials-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <p>Testimonials</p>
              <h2>What My Clients Say</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <Swiper
              :slidesPerView="1"
              :spaceBetween="30"
              :loop="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                768: {
                  slidesPerView: 2,
                },
              }"
              :modules="[Navigation, EffectFade, Autoplay]"
              :navigation="{
                nextEl: '.testimonial-next',
                prevEl: '.testimonial-prev',
              }"
              class="testimonials-wrap"
            >
              <!-- Loop through the testimonials array to generate each testimonial item -->
              <SwiperSlide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="testimonial-item wow fadeInUp delay-0-3s"
              >
                <div class="author">
                  <img :src="testimonial.image" :alt="testimonial.author" />
                </div>
                <div class="text">
                  {{ testimonial.text }}
                </div>
                <div class="testi-des">
                  <h5>{{ testimonial.author }}</h5>
                  <span>{{ testimonial.title }}</span>
                </div>
              </SwiperSlide>
              <!-- / END SINGLE TESTIMONIALS DESIGN AREA -->
            </Swiper>
            <div
              class="slider-arrows wow fadeInUp delay-0-6s text-center pt-40"
            >
              <button class="testimonial-prev arrow">
                <i class="ri-arrow-left-s-line"></i>
              </button>
              <button class="testimonial-next arrow">
                <i class="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
