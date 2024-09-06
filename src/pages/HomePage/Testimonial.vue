<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import axios from 'axios'
import { mdiFormatQuoteClose } from '@mdi/js'
import TestimonialsData from '../../json/data.json'

const path = ref(mdiFormatQuoteClose)
const testimonials = ref([])
const currentIndex = ref(0)
let sliderInterval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const startSlider = () => {
  sliderInterval = setInterval(nextSlide, 3000)
}

const stopSlider = () => {
  if (sliderInterval) {
    clearInterval(sliderInterval)
    sliderInterval = null
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/testimonials')
    testimonials.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    // Fallback to local data if API call fails
    testimonials.value = TestimonialsData.testimonials
  }
  startSlider()
})

onBeforeUnmount(() => {
  stopSlider()
})
</script>

<template>
  <section class="bg-AliceBlue mb-32 py-28">
    <section>
      <h1
        class="text-center text-OxfordBlue text-4xl md:text-5xl font-bold mb-10 max-w-2xl mx-auto leading-snug"
      >
        Join Tayo and Many Others Who Have Found Success
      </h1>
    </section>

    <!-- silder image -->
    <section class="relative w-full overflow-hidden">
      <div
        class="flex gap-10 md:gap-20 transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-BlueRibbon min-w-[95%] hover:bg-RichBlack-primary text-white p-10 rounded-md"
          @mouseover="stopSlider"
          @mouseleave="startSlider"
        >
          <h1
            class="max-w-2xl mx-auto flex items-center gap-2 text-2xl md:text-4xl font-bold mb-5 w-full"
          >
            <svg-icon type="mdi" :path="path" class="w-12 h-12 text-Sunglow"></svg-icon>
            {{ testimonial.header }}
          </h1>

          <p class="max-w-xl mx-auto leading-normal mb-8">{{ testimonial.text }}</p>
          <figure class="max-w-xl mx-auto flex items-center gap-5">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="w-16 bg-white rounded-full pt-5"
            />
            <figcaption>
              <p>{{ testimonial.name }}</p>
              <span class="text-sm">{{ testimonial.occupation }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </section>
</template>
