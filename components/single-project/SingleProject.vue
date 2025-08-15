<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { portfolio_data } from '~/data/portfolio_data.js';

const route = useRoute();
const projectId = computed(() => Number(route.params.id));
const project = computed(() => {
  return portfolio_data.find(p => p.id === projectId.value) || {};
});

</script>

<template>
  <section class="single-project-area innerpage-single-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <p>Project Details</p>
              <h2>{{ project.title }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="project-image wow fadeInUp delay-0-3s">
              <img :src="project.img" :alt="project.title" />
            </div>
          </div>
        </div>
        <div class="row pt-80">
          <div class="col-lg-6">
            <div class="project-description wow fadeInUp delay-0-2s">
              <h2>Description</h2>
              <p>
                {{ project.description }}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-details wow fadeInUp delay-0-4s">
              <h2>Project Details</h2>
              <ul>
                <li><i class="ri-check-line"></i> <strong>Client:</strong> {{ project.client }}</li>
                <li><i class="ri-check-line"></i> <strong>Category:</strong> {{ project.category }}</li>
                <li><i class="ri-check-line"></i> <strong>Technologies:</strong> {{ project.technologies }}</li>
                <li><i class="ri-check-line"></i> <strong>Date:</strong> {{ project.date }}</li>
                <li><i class="ri-check-line"></i> <strong>URL:</strong> <a :href="`https://${project.url}`" target="_blank">{{ project.url }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
