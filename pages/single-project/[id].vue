<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import SingleProject from "~/components/single-project/SingleProject.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";

useHead({
  title: "Oliseyenum Omodi - Project Details",
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
    <SingleProject />
    <HomeCtaArea />
    <Footer />
  </div>
</template>
