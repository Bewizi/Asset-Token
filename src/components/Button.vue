<script setup>
defineProps({
  title: String,
  defaultClass: {
    type: String,
    default:
      'bg-BlueRibbon text-white py-2 px-5 rounded-md font-medium hover:bg-BlueRibbon/85 transition-all duration-500'
  }
})
</script>

<template>
  <button :class="[defaultClass]">
    {{ title }}
    <slot />
  </button>
</template>
