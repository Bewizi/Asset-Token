<script setup>
defineProps({
  id: String,
  header: String,
  description: String
})
</script>

<template>
  <span class="text-2xl font-extrabold mb-2">{{ id }}</span>
  <h1 class="text-lg font-semibold mb-2">{{ header }}</h1>
  <p class="font-extralight leading-normal">{{ description }}</p>
</template>
