<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import HeroSection from '@/pages/HomePage/HeroSection.vue'
import OverView from '@/pages/HomePage/OverView.vue'
import ReimagineInvesting from '@/pages/HomePage/ReimagineInvesting.vue'
import EstateInvestment from '@/pages/HomePage/EstateInvestment.vue'
import FutureStart from '@/pages/HomePage/FutureStart.vue'
import Testimonial from '@/pages/HomePage/Testimonial.vue'
import BlogPost from '@/pages/HomePage/BlogPost.vue'
import InvestmentCommunity from '@/pages/HomePage/InvestmentCommunity.vue'
import Newsletter from '@/pages/HomePage/Newsletter.vue'
</script>

<template>
  <NavBar />
  <main class="dark:bg-slate-700 dark:text-white pb-20 min-h-screen">
    <HeroSection />
    <OverView />
    <ReimagineInvesting />
    <EstateInvestment />
    <FutureStart />
    <Testimonial />
    <BlogPost />
    <InvestmentCommunity />
    <Newsletter />
  </main>
  <Footer />
</template>
