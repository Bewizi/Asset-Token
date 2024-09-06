<script setup>
import Navbar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import HerSection from '../pages/InvestmentPage/HeroSection.vue'
import BenefitsofTokenization from '../pages/InvestmentPage/BenefitsofTokenization.vue'
</script>

<template>
  <Navbar />
  <main class="dark:bg-slate-700 dark:text-white pb-20 min-h-screen">
    <HerSection />
    <BenefitsofTokenization />
  </main>
  <Footer />
</template>
