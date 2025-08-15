<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import HomePortfolioArea from "~/components/home/PortfolioArea.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";

useHead({
  title: "Oliseyenum Omodi - My Projects",
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
    <HomePortfolioArea cls="innerpage-single-area" />  
    <HomeCtaArea />
    <Footer />
  </div>
</template>
