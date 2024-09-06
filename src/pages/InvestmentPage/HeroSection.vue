<script setup>
import Button from '../../components/Button.vue'
import Partners from '../../components/Partners.vue'
import womanwearingvrheadset from '../../assets/images/investment image/woman-wearing-vr-headset-with-city-top 3.png'
</script>

<template>
  <section class="max-w-7xl mx-auto px-2 md:px-0 mb-8">
    <div class="text-center flex flex-col items-center justify-center mb-10">
      <h1
        class="text-4xl leading-tight md:text-6xl text-OxfordBlue font-bold max-w-3xl md:leading-normal mb-2 dark:text-white"
      >
        Welcome to the Future of Real Estate Investing
      </h1>
      <p class="text-RichBlack-secondary max-w-md mb-5 dark:text-white text-sm md:text-base">
        Seamlessly invest in fractional ownership of prime properties, diversify your portfolio, and
        enjoy enhanced liquidity. Explore the future of real estate investment today
      </p>
      <Button>Contact a legal Entity</Button>
    </div>
    <figure>
      <img
        :src="womanwearingvrheadset"
        alt="woman-wearing-vr-headset-with-city-top"
        class="rounded-3xl"
      />
    </figure>
  </section>
  <Partners />
</template>
