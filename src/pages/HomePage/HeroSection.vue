<script setup>
import DigitalHouse from '@/assets/images/general/digital_house_investment.png'
import DuplexHouse from '@/assets/images/general/duplex_house.png'
import HouseImage from '@/assets/images/general/house_image.png'
import Button from '@/components/Button.vue'
import 'animate.css'
</script>

<template>
  <section class="max-w-7xl mx-auto pt-32 pb-32">
    <div class="flex flex-col items-center justify-center animate__animated animate__fadeInLeftBig">
      <div class="text-center mb-8">
        <h1
          class="font-semibold text-OxfordBlue text-2xl md:text-7xl max-w-4xl leading-normal mb-5 dark:text-white"
        >
          Tokenize
          <span
            ><img
              :src="DigitalHouse"
              alt="A hand placing a gold coin into a digital house-shaped object"
              class="inline bg-ColumbiaBlue rounded-full w-16 md:w-32"
          /></span>
          Your Future
          <span class="mx-2 lg:mx-5"
            ><img
              :src="DuplexHouse"
              alt="Modern three-story duplex house with a blue roof and white walls"
              class="inline bg-ColumbiaBlue rounded-full w-16 md:w-32" /></span
          >Invest Smarter
        </h1>
        <p class="text-RichBlack max-w-md mx-auto">
          Take advantage of fractional ownership and join the growing community of digital real
          estate investors.
        </p>
      </div>

      <Button title="Start Investing" />
    </div>
    <figure class="animate__animated animate__fadeInUpBig">
      <img
        :src="HouseImage"
        alt="A white two-story house with a black roof and porch"
        class="w-full"
      />
    </figure>
  </section>
</template>
