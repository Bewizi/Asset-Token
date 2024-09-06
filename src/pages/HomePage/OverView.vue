<script setup>
import ModernBuilding from '@/assets/images/general/Modern Bank Building.png'
import AerialView from '@/assets/images/general/Aerial View of Land for Sale.png'

import { ref, onMounted } from 'vue'
import axios from 'axios'

const overViewData = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/overViewNumberAndText')
    overViewData.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<template>
  <section class="max-w-7xl mx-auto mb-32">
    <!--  -->
    <div class="flex flex-wrap items-center lg:flex-nowrap relative">
      <img
        :src="ModernBuilding"
        alt="Blue glass skyscraper with green lawn."
        class="mb-10 mx-auto w-full px-5 lg:mb-0 lg:w-96 lg:px-0"
      />
      <div>
        <h1
          class="text-OxfordBlue text-4xl md:text-6xl text-center lg:absolute lg:left-72 lg:top-28 leading-tight dark:text-white"
        >
          We Help You Achieve Your <br />
          Real Estate <br />
          Dreams
        </h1>
        <div
          class="bg-BlueRibbon px-5 py-10 mx-2 md:mx-12 rounded text-white mt-6 mb-10 lg:mb-0 lg:mt-96"
        >
          <p class="text-center mb-10">
            AssetToken combines the power of blockchain technology and the real estate market,
            offering you a seamless and transparent investment experience. we believe that everyone
            should have the opportunity to participate in real estate investments, regardless of
            their financial background or location. That's why we have created a platform that
            allows fractional ownership of premium properties, unlocking access to a wide range of
            investment opportunities.
          </p>
          <!-- number -->
          <section class="flex items-center justify-between px-5">
            <!--  -->
            <div v-for="item in overViewData" :key="item.id">
              <i class="font-semibold text-2xl">{{ item.number }}</i>
              <p class="w-16 text-sm text-normal">{{ item.text }}</p>
            </div>
          </section>
        </div>
      </div>
      <img
        :src="AerialView"
        alt="Plot of land with house icon, surrounded by greenery."
        class="mx-auto w-full px-5 lg:w-96 lg:px-0"
      />
    </div>
  </section>
</template>
