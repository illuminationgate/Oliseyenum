<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import Contact from "~/components/contact/Contact.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";

useHead({
  title: "Contact Oliseyenum Omodi",
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
    <Contact />    
    <HomeCtaArea />
    <Footer />
  </div>
</template>
