<script setup>
import Logo from '../assets/images/assset-token-logo.png'
</script>

<template>
  <footer class="bg-RichBlack-primary text-white py-28 px-5 md:px-0">
    <div class="max-w-7xl mx-auto flex justify-between flex-wrap md:px-5 lg:px-0">
      <div class="w-full lg:w-1/4 px-4 mb-10 lg:mb-0">
        <div class="flex items-center mb-4">
          <img :src="Logo" alt="AssetToken Logo" class="w-10 h-10 mr-2" />
          <h2 class="font-bold text-xl font-GoldWest">ASSETTOKEN</h2>
        </div>
        <p class="text-sm">
          At AssetToken our primary aim is to help land owners and property managers to connect to
          the right audience of investors while also allowing interested investors to share their
          purchasing power and invest in their so desired properties without the fear of being
          unable to afford these properties. Through the use of blockchain technology.
        </p>
        <div class="flex space-x-2 mt-4 text-2xl mb-10">
          <i class="pi pi-discord w-6 h-6"></i>
          <i class="pi pi-instagram w-6 h-6"></i>
          <i class="pi pi-linkedin w-6 h-6"></i>
        </div>
        <p class="text-sm mt-4">© 2023 AssetToken.com. All Right Reserved</p>
      </div>

      <div class="mb-10 md:mb-0">
        <h3 class="text-xl font-bold mb-4">Features</h3>
        <ul>
          <li><a href="" class="text-sm">About</a></li>
          <li><a href="" class="text-sm">Investment</a></li>
          <li><a href="" class="text-sm">Dashboard</a></li>
          <li><a href="" class="text-sm">Resources</a></li>
          <li><a href="" class="text-sm">How it Works</a></li>
          <li><a href="" class="text-sm">Why AssetToken</a></li>
          <li><a href="" class="text-sm">Property Listing</a></li>
          <li><a href="" class="text-sm">Property Mgt Service</a></li>
        </ul>
      </div>

      <div class="">
        <h3 class="text-xl font-bold mb-4">Other Informations</h3>
        <ul>
          <li><a href="" class="text-sm">Privacy Policy</a></li>
          <li><a href="" class="text-sm">FAQs</a></li>
          <li><a href="" class="text-sm">Term Of Service</a></li>
          <li><a href="" class="text-sm">Disclaimer</a></li>
        </ul>
      </div>

      <div class="">
        <h3 class="text-xl font-bold mb-4">Contact Us</h3>
        <div class="space-y-2 mb-10 md:mb-32">
          <a href="tel:+2349057171458" class="text-sm block">+2349057171458</a>
          <a href="tel:+2349093899228" class="text-sm block">+2349093899228</a>
        </div>
        <p class="bg-white text-black py-2 px-4 rounded mt-4">Hello How Can We Help You Today?</p>
        <div class="flex items-center mt-5 p-2 rounded bg-white">
          <input
            type="text"
            placeholder="Write a message"
            class="focus:outline-none outline-none w-full bg-none"
          />
          <button class="px-2 py-1 bg-black/10 rounded">
            <i class="pi pi-send text-RichBlack-primary"></i>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
