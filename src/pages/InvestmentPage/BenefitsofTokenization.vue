<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import FuturisticCityscape from '../../assets/images/investment image/Futuristic Cityscape.png'

const benefit = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/benefitsOfTokenization')
    benefit.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<template>
  <section class="max-w-7xl mx-auto px-5 lg:px-0 mb-32">
    <div class="flex items-center justify-center mb-10">
      <h1
        class="text-2xl text-center leading-normal md:text-4xl text-OxfordBlue font-bold max-w-xl md:leading-normal mb-2 dark:text-white"
      >
        Why Choose Tokenized Real Estate Investment
      </h1>
    </div>

    <figure class="relative flex flex-col-reverse lg:block">
      <img
        :src="FuturisticCityscape"
        alt="An isometric illustration of a vibrant, futuristic city with skyscrapers "
        class="lg:w-10/12"
      />
      <aside
        class="lg:block border border-gray-300 lg:absolute lg:top-28 lg:right-0 lg:w-5/12 bg-white py-8 px-10 mb-5 lg:mb-0"
      >
        <!-- apartment features -->
        <ul class="list-disc marker:text-Sunglow mb-5">
          <li
            v-for="items in benefit"
            :key="items.id"
            class="leading-tight dark:text-RichBlack-primary mb-8"
          >
            <h3 class="text-OxfordBlue text-lg font-semibold mb-2">{{ items.header }}</h3>
            <p class="text-RichBlack-secondary">
              {{ items.description }}
            </p>
          </li>
        </ul>
      </aside>
    </figure>
  </section>
</template>
