<script setup>
import Navbar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import HerSection from '../pages/InvestmentPage/HeroSection.vue'
import BenefitsofTokenization from '../pages/InvestmentPage/BenefitsofTokenization.vue'
import TokenizeProcess from '@/pages/InvestmentPage/TokenizeProcess.vue'
import PropertyOwners from '@/pages/InvestmentPage/PropertyOwners.vue'
import InvestmentCommunity from '@/pages/HomePage/InvestmentCommunity.vue'
import Newsletter from '@/pages/HomePage/Newsletter.vue'
</script>

<template>
  <Navbar />
  <main class="dark:bg-slate-700 dark:text-white pb-20 min-h-screen">
    <HerSection />
    <BenefitsofTokenization />
    <TokenizeProcess />
    <PropertyOwners />
    <InvestmentCommunity />
    <Newsletter />
  </main>
  <Footer />
</template>
