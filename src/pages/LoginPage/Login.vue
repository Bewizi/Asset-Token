<script setup>
import Logo from '../../assets/images/assset-token-logo.png'
import Button from '../../components/Button.vue'
</script>

<template>
  <section class="max-w-xs mx-auto mt-20">
    <figure class="flex items-center justify-center mb-20">
      <img :src="Logo" alt="Asset Token Logo" />
    </figure>

    <!-- login with email and password -->
    <form action="" class="mb-5">
      <!-- email input -->
      <label for="email" class="text-Glaucous">Email</label>
      <div class="border border-Glaucous py-3 rounded-md mb-5">
        <i class="pi pi-envelope ml-3 mr-5 text-Glaucous"></i>
        <input
          type="text"
          placeholder="Enter your email address"
          class="placeholder:text-Glaucous"
        />
      </div>

      <!-- password input -->
      <label for="password" class="text-Glaucous">Password</label>
      <div class="border border-Glaucous py-3 rounded-md mb-8">
        <i class="pi pi-lock ml-3 mr-5 text-Glaucous"></i>
        <input type="text" placeholder="Enter your password" class="placeholder:text-Glaucous" />
        <i class="pi pi-eye-slash relative left-10 text-Glaucous cursor-pointer"></i>
      </div>
      <Button class="w-full bg-[#8DB0F9] hover:bg-BlueRibbon">Login</Button>
    </form>

    <!-- redirect to home page and forget password -->
    <div class="flex justify-between">
      <router-link to="/" class="text-OxfordBlue text-sm">Go Back Home</router-link>
      <div>
        <router-link to="/" class="text-OxfordBlue text-sm inline-block mb-2"
          >Forgot Password?</router-link
        >
        <div>
          <input type="checkbox" />
          <span class="text-sm"> Remember me </span>
        </div>
      </div>
    </div>
  </section>
</template>
