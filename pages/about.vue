<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import About from "~/components/about/About.vue";
import AboutResume from "~/components/about/Resume.vue";
import AboutTestimonial from "~/components/about/Testimonial.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";

useHead({
  title: "About Oliseyenum Omodi",
});

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});
</script>

<template>
  <div>
    <CommonScrollTop />
    <Header />
    <About />
    <AboutResume />
    <AboutTestimonial />
    <HomeCtaArea />
    <Footer />
  </div>
</template>
