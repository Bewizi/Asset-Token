<script setup>
import Family from '@/assets/images/general/happy-family.png'

import SelectedCase from '@/components/SelectedCase.vue'
</script>

<template>
  <section class="max-w-7xl mx-auto mb-32">
    <section class="border border-Glaucous pt-10">
      <h1
        class="text-center text-OxfordBlue text-4xl md:text-5xl font-bold mb-10 max-w-2xl mx-auto leading-snug dark:text-white"
      >
        Get Started Now and Own a Piece of Tomorrow
      </h1>
      <img :src="Family" alt="A joyful family carrying boxes into their new home" />

      <!--  -->
      <SelectedCase case="Mine" />
    </section>
  </section>
</template>
