<script setup>
import portfolio_img_1 from "~/assets/images/projects/single-project.jpg";
import portfolio_img_2 from "~/assets/images/projects/single-project1.jpg";
import portfolio_img_3 from "~/assets/images/projects/single-project2.jpg";
import portfolio_img_4 from "~/assets/images/projects/single-project3.jpg";
import portfolio_img_5 from "~/assets/images/projects/single-project4.jpg";
import portfolio_img_6 from "~/assets/images/projects/work6.jpg";
import portfolio_img_7 from "~/assets/images/projects/work5.jpg";
import portfolio_img_8 from "~/assets/images/projects/work4.jpg";
import ImagePopup from '~/components/common/ImagePopup.vue';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';
import { ref } from 'vue';

const portfolio_data = [
  {
    id: 1,
    img: portfolio_img_1,
    category: "Web App",
    title: "Verity: A WhatsApp Marketing Platform",
    description: "A SaaS platform for WhatsApp marketing with bulk sending and chat bots.",
    technologies: "PHP (Laravel), MySQL, and more."
  },
  {
    id: 2,
    img: portfolio_img_2,
    category: "Website",
    title: "Branding Company Website",
    description: "A static and responsive website for a branding company, showcasing their portfolio.",
    technologies: "HTML, CSS, JavaScript."
  },
  {
    id: 3,
    img: portfolio_img_3,
    category: "Web App",
    title: "WhatsApp Business Chat",
    description: "An auto-reply system for WhatsApp Business accounts to manage inquiries.",
    technologies: "PHP."
  },
  {
    id: 4,
    img: portfolio_img_4,
    category: "Website",
    title: "Heavenzarom",
    description: "A Canadian cleaning service with a booking management system.",
    technologies: "HTML, CSS, JS (Frontend), PHP (Backend)."
  },
  {
    id: 5,
    img: portfolio_img_5,
    category: "Website",
    title: "Courier Company",
    description: "A website with a robust system for real-time shipment tracking.",
    technologies: "PHP."
  },
  {
    id: 6,
    img: portfolio_img_6,
    category: "Website",
    title: "Church website",
    description: "A static website with a dynamic blog powered by Supabase.",
    technologies: "HTML, CSS, JS, Supabase."
  },
  {
    id: 7,
    img: portfolio_img_7, 
    category: "Web App",
    title: "Personal Portfolio Website",
    description: "My personal portfolio, built with modern frameworks to showcase skills.",
    technologies: "React, Next.js."
  },
  {
    id: 8,
    img: portfolio_img_8, 
    category: "Website",
    title: "Illumination Gate Global Service",
    description: "A tech website for a technology solutions provider, built on Laravel.",
    technologies: "Laravel."
  },
];

const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
]; 

const activeCategory = ref("All");
const items = ref(portfolio_data); 

const filterItems = (cateItem) => {
  activeCategory.value = cateItem; 

  if (cateItem === "All") {
    items.value = portfolio_data;
  } else {
    const findItems = portfolio_data.filter(
      (findItem) => findItem.category === cateItem
    );
    items.value = findItems;
  }
};
 
const props = defineProps({
  cls: String, 
});

const image_popup = ref(null);

function handleImagePopup(index) {
  image_popup.value.showImg(index);
}
</script>
 
<template>
  <div>
  <section id="portfolio" :class="`portfolio-area ${props.cls}`">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <h2>Works & Projects</h2>
              <p>
                Check out some of my projects in web design, web development, and data analysis.
              </p>
            </div>
          </div>
        </div>
        <ul
          class="project-filter filter-btns-one justify-content-center pb-15 wow fadeInUp delay-0-2s"
        >
          <li v-for="(item, i) in categories" :key="i">
            <a
              @click="filterItems(item)"
              :class="`${item === activeCategory ? 'current' : ''}`"
            >
              <span>{{ item }}</span>
            </a>
            {{ " " }}
          </li>
        </ul>
        <div class="row project-masonry-active d-flex align-items-stretch">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="col-lg-4 col-md-6 item branding game mb-4"
          >
            <div class="project-item style-two wow fadeInUp delay-0-3s d-flex flex-column h-100">
              <div class="project-image">
                <img :src="item.img" :alt="item.title" class="w-100 h-auto"/>
                <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="details-btn"
                  ><i class="ri-arrow-right-up-line"></i
                ></a>
              </div>
              <div class="project-content flex-grow-1 d-flex flex-column p-4">
                <span class="sub-title">{{ item.category }}</span>
                <h3>
                  <NuxtLink :to="`/single-project/${item.id}`">{{ item.title }}</NuxtLink>
                </h3>
                <p class="flex-grow-1">{{ item.description }}</p>
                <p class="mt-2 text-sm text-gray-500">Technologies: {{ item.technologies }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- image popup start -->
    <ImagePopup ref="image_popup" :images="portfolio_data.map((item) => item.img)" />
  <!-- image popup end -->

</div>

</template>
