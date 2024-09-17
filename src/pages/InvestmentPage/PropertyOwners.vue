<template>
  <section class="max-w-7xl mx-auto mb-32 px-5 lg:px-0">
    <h1
      class="max-w-2xl mx-auto text-4xl text-center leading-normal text-OxfordBlue font-bold mb-8 dark:text-white lg:mb-28"
    >
      Your Partner for Hassle-Free Real Estate Investment
    </h1>

    <section class="flex flex-col gap-5 lg:flex-row lg:gap-10">
      <!-- section one -->
      <section class="flex flex-col">
        <figure class="mb-10">
          <img :src="RealEstateAgent" alt="real estate agent handing house key" width="350" />
        </figure>
        <div>
          <span class="text-Sunglow font-semibold text-xl inline-block mb-2">01</span>
          <h4 class="font-bold text-2xl text-OxfordBlue mb-2 dark:text-white">
            Land/Property Owner
          </h4>
          <p class="leading-normal text-RichBlack-secondary dark:text-white">
            Property owners can leverage our website to showcase their real estate assets to a wide
            audience of potential investors. They can create comprehensive property listings that
            highlight the unique features and investment potential of their properties. Through our
            platform, property owners can connect with interested investors, negotiate terms, and
            facilitate seamless transactions
          </p>
        </div>
      </section>

      <!-- section two -->
      <section class="flex flex-col-reverse">
        <figure>
          <img :src="RealEstateInvestment" alt="house investments elements assortment" />
        </figure>
        <div class="mb-10">
          <span class="text-Sunglow font-semibold text-xl inline-block mb-2">02</span>
          <h4 class="font-bold text-2xl text-OxfordBlue mb-2 dark:text-white">Investors</h4>
          <p class="leading-normal text-RichBlack-secondary dark:text-white">
            Investors using our platform gain access to a dynamic marketplace of real estate
            opportunities. You can browse through a diverse range of properties, from residential to
            commercial, and make informed investment decisions based on detailed property
            information, financial projections, and market trends. With secure payment gateways and
            transparent communication, investors can confidently participate in real estate projects
            that align with their financial goals and risk tolerance.
          </p>
        </div>
      </section>

      <!-- section three -->
      <section class="flex flex-col">
        <figure class="mb-10">
          <img
            :src="ScalesofJustice"
            alt="A wooden scale balanced with two empty pans, a gavel, and a stack of books, symbolizing justice and the legal system."
            width="350"
          />
        </figure>
        <div>
          <span class="text-Sunglow font-semibold text-xl inline-block mb-2">03</span>
          <h4 class="font-bold text-2xl text-OxfordBlue mb-2 dark:text-white">Legal Entities</h4>
          <p class="leading-normal text-RichBlack-secondary dark:text-white">
            These entities collaborates with investors and property owners, managing documentation,
            contracts, and compliance through a centralized digital platform. Our website
            streamlines the complex legal aspects of real estate investments, ensuring that all
            parties involved are protected and informed throughout the process.
          </p>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
import RealEstateAgent from '@/assets/images/investment image/Real Estate Agent.png'
import RealEstateInvestment from '@/assets/images/investment image/Real Estate Investment.png'
import ScalesofJustice from '@/assets/images/investment image/Scales of Justice.png'
</script>
