<script setup>
import { Vue3Marquee } from 'vue3-marquee'

const listOfpartner = ['Hedera', 'Polkadot', 'Ethereum', 'Ethereum', 'Avalanche']
</script>

<template>
  <section class="max-w-7xl mx-auto mb-32">
    <div class="flex flex-col items-center md:flex-row md:justify-evenly">
      <h3
        class="text-OxfordBlue text-xl md:text-base font-bold md:font-normal mb-2 md:mb-0 dark:text-white"
      >
        Our Partner
      </h3>
      <div class="overflow-hidden w-full">
        <ul
          class="text-Glaucous space-x-2 flex md:space-x-20 md:text-lg md:font-semibold md:gap-0 dark:text-white"
        >
          <Vue3Marquee>
            <li
              v-for="(partners, index) in listOfpartner"
              :key="index"
              class="overflow-x-hidden mr-8 lg:mr-20 lg:text-2xl"
            >
              {{ partners }}
            </li>
          </Vue3Marquee>
        </ul>
      </div>
    </div>
  </section>
</template>
