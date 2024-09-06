<script setup>
import VirtualReality from '@/assets/images/general/Immersed in Virtual Reality.png'
import InvestmentStep from '@/components/InvestmentStep.vue'
</script>

<template>
  <section class="bg-RichBlack-primary mb-32">
    <section class="max-w-7xl mx-auto text-white">
      <div class="flex flex-wrap lg:flex-nowrap items-center gap-10">
        <div class="text-center pt-10 lg:text-start lg:pt-0">
          <h6 class="mb-8">What Are Our Differentiators</h6>
          <p class="text-5xl leading-normal lg:w-[40rem]">
            Take a Big Step Into The Future Of Investment
          </p>
        </div>

        <figure>
          <img
            :src="VirtualReality"
            alt="Person wearing VR headset, interacting with virtual elements."
          />
        </figure>
      </div>
      <hr class="border-white w-full" />

      <!-- list of investing message -->
      <section class="flex flex-wrap md:flex-nowrap">
        <div>
          <!-- message 1 -->
          <div class="p-8">
            <InvestmentStep
              id="01"
              header="Diversification and Portfolio Management"
              description="Diversify your real estate portfolio across different regions and markets, all while
                enjoying the familiarity of our user-friendly platform. From commercial hubs to
                serene residential spaces, explore properties that align with your investment goals."
            />
          </div>

          <!-- message 2 -->
          <div class="p-8 md:hidden">
            <InvestmentStep
              id="02"
              header="Fractional Ownership"
              description="Embrace a world where you can invest in high-value properties without breaking the bank. Our tokenization model divides properties into easily manageable fractions, allowing you to diversify your portfolio and maximize returns like never before."
            />
          </div>

          <!-- message 3 -->
          <div class="p-8 md:hidden">
            <InvestmentStep
              id="03"
              header="Accessibility and Liquidity"
              description="Unlike traditional real estate investments, our tokenized approach introduces liquidity to the market. Investors can buy and sell tokens  on our secure platform representing their ownership in real estate assets on our platform, providing an opportunity to quickly access funds when needed."
            />
          </div>

          <!-- message 2 -->
          <div class="p-8">
            <InvestmentStep
              id="04"
              header="Transparency and Security"
              description="Your peace of mind is our top priority. We prioritize transparency and security in all our operations. Through blockchain technology and smart contracts, we ensure that every transaction and ownership transfer is recorded on an immutable ledger, creating a transparent and tamper-proof system. Additionally, we implement robust security measures to protect our investors' personal and financial information against fraud."
            />
          </div>
        </div>
        <div class="border min-h-fit border-white hidden lg:block"></div>
        <!-- section 2 -->
        <div>
          <!-- message 2 -->
          <div class="p-8 hidden md:block">
            <InvestmentStep
              id="02"
              header="Fractional Ownership"
              description="Embrace a world where you can invest in high-value properties without breaking the bank. Our tokenization model divides properties into easily manageable fractions, allowing you to diversify your portfolio and maximize returns like never before."
            />
          </div>

          <!-- message 5 -->
          <div class="p-8">
            <InvestmentStep
              id="05"
              header="Education and Support"
              description="We believe in empowering our investors with knowledge and support. Our platform provides educational resources, market insights, and investment guides to help investors make informed decisions. Furthermore, our dedicated customer support team is available to address any questions or concerns you may have throughout your investment journey."
            />
          </div>
        </div>
        <div class="border min-h-fit border-white hidden lg:block"></div>

        <!-- section 3 -->
        <div>
          <!-- message 3 -->
          <div class="p-8 hidden md:block">
            <InvestmentStep
              id="03"
              header="Accessibility and Liquidity"
              description="Unlike traditional real estate investments, our tokenized approach introduces liquidity to the market. Investors can buy and sell tokens  on our secure platform representing their ownership in real estate assets on our platform, providing an opportunity to quickly access funds when needed."
            />
          </div>

          <!-- message 6 -->
          <div class="p-8">
            <InvestmentStep
              id="06"
              header="Professional Management"
              description="We have a team of experienced real estate professionals and investment specialists who meticulously research and select the best investment opportunities for our platform. Our team actively manages the properties and continuously monitors market trends to optimize returns for our investors. You can rely on our expertise and industry knowledge to make informed investment decisions."
            />
          </div>
        </div>
      </section>
    </section>
  </section>
</template>
