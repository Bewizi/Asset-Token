<script setup>
import NavBar from '../components/NavBar.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <NavBar />
  <main class="dark:bg-slate-700 dark:text-white pb-20 min-h-screen">
    <section class="text-center flex flex-col justify-center items-center h-96">
      <i class="pi pi-exclamation-triangle text-yellow-500 text-7xl mb-5"></i>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink
        to="/"
        class="text-white bg-BlueRibbon hover:bg-BlueRibbon/80 rounded-md px-3 py-2 mt-4"
        >Go Back</RouterLink
      >
    </section>
  </main>
</template>
