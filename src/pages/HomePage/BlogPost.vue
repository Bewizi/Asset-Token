<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const blogData = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/blog')
    blogData.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<template>
  <section class="max-w-7xl mx-auto mb-32">
    <section class="flex flex-col items-center gap-5 md:flex-row px-5 lg:px-0">
      <div v-for="(blogs, index) in blogData" :key="index">
        <figure class="mb-2">
          <img :src="blogs.image" :alt="blogs.text" />
        </figure>
        <p class="text-OxfordBlue font-semibold leading-normal dark:text-white text-sm lg:text-lg">
          {{ blogs.title }}
        </p>
      </div>
    </section>
  </section>
</template>
