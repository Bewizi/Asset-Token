<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div
    class="fixed inset-0 bg-[#234895] bg-opacity-65 flex items-center justify-center z-50 px-5 md:px-0"
  >
    <div class="bg-white p-8 rounded-lg max-w-md w-full text-center">
      <div class="flex gap-5">
        <h2 class="text-xl font-semibold mb-4 max">Select the category you'll be operating on</h2>
        <i @click="closeModal" class="pi pi-times cursor-pointer hover:text-red-500"></i>
      </div>
      <button class="bg-[#8DB0F9] hover:bg-BlueRibbon text-white px-4 py-2 rounded-lg mb-4 w-full">
        Investor
      </button>
      <button class="bg-[#8DB0F9] hover:bg-BlueRibbon text-white px-4 py-2 rounded-lg mb-4 w-full">
        Property Owner
      </button>
      <button class="bg-[#8DB0F9] hover:bg-BlueRibbon text-white px-4 py-2 rounded-lg w-full">
        Legal Entity
      </button>
    </div>
  </div>
</template>
