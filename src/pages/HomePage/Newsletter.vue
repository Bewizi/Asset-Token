<script setup>
import MailBox from '../../assets/images/general/mail-box.png'
import Button from '../../components/Button.vue'
</script>

<template>
  <section class="max-w-7xl mx-auto mb-32">
    <section class="flex items-center justify-between gap-10">
      <figure class="hidden lg:block">
        <img :src="MailBox" alt="Mail Box" />
      </figure>
      <div class="max-w-2xl mx-auto px-5 md:px-0">
        <h1
          class="text-2xl md:text-4xl font-semibold text-OxfordBlue leading-normal mb-2 dark:text-white"
        >
          Never Miss a Beat in the World of Tokenized Real Estate
        </h1>
        <p class="text-RichBlack-primary/80 mb-10 dark:text-white">
          Be the first to know about new investment opportunities before they're released to the
          public.
        </p>

        <!-- input -->
        <div
          class="border border-RichBlack-primary/50 p-2 rounded max-w-xl flex justify-between mb-2 dark:border-white"
        >
          <input
            type="text"
            placeholder="Enter Email address"
            class="bg-transparent outline-none focus:outline-none border-none"
          />
          <span>
            <Button title="Subscribe" />
          </span>
        </div>
        <p class="text-OxfordBlue dark:text-white">
          For information on how we process your data, see our
          <RouterLink to="" class="text-BlueRibbon"> Privacy Policy</RouterLink>
        </p>
      </div>
    </section>
  </section>
</template>
