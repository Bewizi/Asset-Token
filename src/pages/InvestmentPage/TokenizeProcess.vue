<template>
  <section class="max-w-7xl mx-auto px-5 mb-32 lg:px-0">
    <div
      class="flex flex-wrap md:flex-nowrap items-center justify-between mb-16 text-center md:text-start px-5"
    >
      <h1
        class="text-OxfordBlue text-4xl mb-2 lg:text-6xl md:mb-0 font-semibold max-w-2xl leading-tight dark:text-white"
      >
        Tokenization Process
      </h1>
      <div>
        <p class="md:max-w-xs mb-5">
          Dive into the seamless tokenization process and revolutionize the way you invest in real
          estate.
        </p>

        <Button class="px-10 py-1">Sign Up Now</Button>
      </div>
    </div>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- setion one -->
      <section class="bg-gradient-to-b from-[#8DB0F9] to-[#FFFFFF] py-12 px-10 rounded-md">
        <div class="flex flex-col items-center">
          <div class="text-RichBlack-primary mb-2">
            <h1 class="text-xl font-semibold mb-2">Token Selection & Purchase</h1>
            <p class="leading-normal">
              When you've selected a property you're interested in, you can proceed to purchase
              tokens representing a portion of that property. The platform guides you through the
              process, which typically involves selecting the number of tokens you want to purchase
              and confirming the transaction.
            </p>
          </div>
          <figure>
            <img
              :src="GrabbingaCoin"
              alt=" A cartoon hand reaching down to grab a golden coin."
              width="150"
            />
          </figure>
        </div>
      </section>

      <!-- section two -->
      <section
        class="lg:w-10/12 bg-gradient-to-b from-[#03D3FB1A] to-[#904AE769] py-12 px-10 rounded-md"
      >
        <div class="flex flex-col">
          <div class="text-RichBlack-primary mb-2">
            <h1 class="text-xl font-semibold mb-2">Payment and Verification</h1>
            <p class="leading-normal">
              Provide the necessary payment information to complete the purchase. Our platforms
              accept traditional currency (like USD or EUR), and we also use cryptocurrencies (like
              Bitcoin or Ethereum) for transactions. Verify your payment and every relevant
              identification documents as required. Once the purchase is confirmed, you will receive
              digital tokens in your account that represent your ownership in the tokenized
              property. The number of tokens you own will correspond to your share of ownership in
              the property
            </p>
          </div>
          <figure>
            <img
              :src="BitcoinPayment"
              alt="A bitcoin symbol,and a credit card labeled"
              width="300"
            />
          </figure>
        </div>
      </section>

      <!-- section three -->
      <section
        class="lg:w-9/12 bg-gradient-to-b from-[#1C8D7A87] to-[#03BBFF26] py-20 px-10 rounded-md"
      >
        <div class="flex flex-col">
          <div class="text-RichBlack-primary mb-2">
            <h1 class="text-2xl font-semibold mb-2">Monitor and Manage</h1>
            <p class="leading-normal">
              Keep track of your investment through the platform's dashboard. You might receive
              updates on property performance, rental income, and other relevant information. Our
              platform also offer secondary markets where you can potentially sell your tokens to
              other investors if you decide to exit your investment
            </p>
          </div>
          <figure>
            <img
              :src="DigitalHouseKey"
              alt=" A smartphone with a bitcoin symbol on the screen, a brown wallet, and keys with a house keychain, representing digital ownership of a property"
              width="300"
            />
          </figure>
        </div>
      </section>

      <!-- section four -->
      <section class="bg-gradient-to-b from-[#488619A3] to-[#B0FB7847] pt-20 px-10 rounded-md">
        <div class="flex flex-col">
          <div class="text-RichBlack-primary mb-2">
            <h1 class="text-2xl font-semibold mb-2">Trade Tokens</h1>
            <p class="leading-normal">
              To trade tokens on our platform, list your property-backed tokens for sale, specifying
              the desired price and quantity. Interested buyers can then browse the listings and
              purchase these tokens, the tokens are transferred to the buyer's account and the funds
              are transferred to the seller's account.
            </p>
          </div>
          <figure>
            <img
              :src="SecureOnlinePayment"
              alt="A smartphone with a credit card, a checkmark shield."
              width="350"
            />
          </figure>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
import Button from '@/components/Button.vue'
import GrabbingaCoin from '@/assets/images/investment image/Grabbing a Coin.png'
import BitcoinPayment from '@/assets/images/investment image/Bitcoin Payment.png'
import DigitalHouseKey from '@/assets/images/investment image/Digital House Key.png'
import SecureOnlinePayment from '@/assets/images/investment image/Secure Online Payment.png'
</script>
