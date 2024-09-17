<script setup>
import Button from '../../components/Button.vue'
import BusinessTrio from '../../assets/images/community/Business Trio on Steps.png'
import ProfessionalPartnership from '../../assets/images/community/Professional Partnership.png'
import TrioinSuits from '../../assets/images/community/Trio in Suits.png'
</script>

<template>
  <section class="max-w-7xl mx-auto mb-32">
    <div class="flex flex-wrap md:flex-nowrap min-h-[50vh]">
      <section class="bg-BlueRibbon md:p-24 rounded-tl-md">
        <div class="pt-14 text-white text-center pb-14 md:text-start lg:pb-0">
          <h1 class="lg:max-w-7xl text-4xl md:text-6xl font-bold leading-normal mb-5">
            Join The Housing Revolution Today!
          </h1>
          <p class="lg:max-w-md leading-normal mb-10">
            Join our investor community and stay engaged with discussions, updates, and insights
            about the real estate market and tokenization trends.
          </p>
          <Button
            class="bg-transparent hover:bg-transparent py-0 px-0 border border-white md:text-2xl lg:text-base"
          >
            <RouterLink to="">Join Community</RouterLink>
          </Button>
        </div>
      </section>
      <section class="bg-AliceBlue p-24 rounded-br-md hidden lg:block">
        <div class="max-w-2xl">
          <div class="grid grid-cols-2 gap-4">
            <img
              :src="TrioinSuits"
              alt="Three individuals standing side by side"
              class="bg-white p-2 rounded-lg shadow-lg"
            />
            <img
              :src="ProfessionalPartnership"
              alt="Two professionals standing confidently in front of a staircase"
              class="bg-white p-2 rounded-lg shadow-lg -mt-5"
            />
            <img
              :src="BusinessTrio"
              alt="Three individuals in business attire standing confidently on outdoor steps of a building"
              class="bg-white p-2 w-48 h-48 rounded-lg shadow-lg col-span-2 justify-self-center"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
