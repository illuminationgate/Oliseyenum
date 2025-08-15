<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import HomeAboutArea from "~/components/home/AboutArea.vue";
import HomePortfolioArea from "~/components/home/PortfolioArea.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";

useHead({
  title: "Oliseyenum Omodi - Personal Portfolio",
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
    <HomeAboutArea />
    <HomePortfolioArea />
    <HomeCtaArea /> 
    <Footer />
  </div>
</template>
