<script setup>
import Button from '@/components/Button.vue'
import ModernTownhouse from '@/assets/images/general/Modern Townhouse Complex.png'
// import keyFeatures from '@/json/data.json'

import { ref, onMounted } from 'vue'
import axios from 'axios'

const keyFeatures = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/features')
    keyFeatures.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<template>
  <section class="max-w-7xl mx-auto mb-32">
    <div
      class="flex flex-wrap md:flex-nowrap items-center justify-between mb-16 text-center md:text-start px-5"
    >
      <h1
        class="text-OxfordBlue text-4xl mb-2 lg:text-6xl md:mb-0 font-semibold max-w-2xl leading-tight dark:text-white"
      >
        Start Your Token Estate Journey Today!
      </h1>
      <div>
        <p class="md:max-w-xs mb-5">
          Explore our series of catalogue of real estate investment opportunities and go in search
          of your real estate dream with us
        </p>

        <Button class="px-10 py-1">View All <i class="pi pi-arrow-right ml-2"></i></Button>
      </div>
    </div>

    <figure class="relative">
      <img :src="ModernTownhouse" alt=" A row of modern two-story townhouses." class="lg:w-10/12" />

      <aside
        class="hidden lg:block border border-gray-300 absolute top-10 right-0 w-5/12 bg-white py-8 px-10"
      >
        <h1 class="text-OxfordBlue text-2xl mb-2 font-semibold">
          Residential Luxurious Duplex House
        </h1>
        <p class="text-RichBlack-secondary leading-tight mb-10">
          A perfect blend of modern luxury and cozy comfort. This two-unit property presents an
          exceptional opportunity for investors or extended families seeking a harmonious living
          arrangement
        </p>
        <!-- location -->
        <span class="text-Glaucous mb-5 inline-block">
          <i class="pi pi-map-marker text-Sunglow mr-1"></i>
          Plot 32 Lekki epe expressway Lagos Nigeria
        </span>

        <!-- contruction and living area -->
        <section>
          <div class="mb-5">
            <span class="text-Glaucous"
              >Construction Area <i class="text-OxfordBlue">( 112m<sup>2</sup> )</i></span
            >
          </div>
          <!--  -->
          <div class="mb-10">
            <span class="text-Glaucous"
              >Living Area <i class="text-OxfordBlue">1600 square feet</i>
              <i class="text-OxfordBlue">( 148m<sup>2</sup> )</i></span
            >
          </div>
        </section>

        <!-- apartment features -->
        <ul class="list-disc marker:text-Sunglow mb-5">
          <h3 class="text-OxfordBlue font-semibold mb-2">Key Features</h3>
          <li
            v-for="feature in keyFeatures"
            :key="feature.id"
            class="leading-loose dark:text-RichBlack-primary"
          >
            {{ feature.text }}
          </li>
        </ul>

        <!--  -->
        <Button class="bg-transparent hover:bg-transparent text-gray-800 py-0 px-0"
          >Learn More
          <i
            class="pi pi-arrow-up-right text-white rounded-full p-3 ml-2 bg-gradient-to-b from-[#3A76F5] to-Sunglow/80"
          ></i
        ></Button>
      </aside>
    </figure>
  </section>
</template>
