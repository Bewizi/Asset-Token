<script setup>
import { RouterLink } from 'vue-router'
import Logo from '@/assets/images/assset-token-logo.png'
import Button from '@/components/Button.vue'
import { useDark, useToggle } from '@vueuse/core'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isSticky = ref(true)

const barClicked = ref(true)
const showAnchorLinks = ref(false)

const barsOpenLinks = () => {
  barClicked.value = false
  showAnchorLinks.value = true
}
const timesCloseLinks = () => {
  barClicked.value = true
  showAnchorLinks.value = false
}
onMounted(() => {
  if (window.innerWidth >= 1024) {
    isSticky.value = false
    showAnchorLinks.value = true
  }

  const sentinel = document.querySelector('#sentinel')
  const observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = !entry.isIntersecting
    },
    { root: null, threshold: 0 }
  )

  if (sentinel) {
    observer.observe(sentinel)
  }

  onBeforeUnmount(() => {
    if (sentinel) {
      observer.unobserve(sentinel)
    }
  })

  //   const header = document.querySelector('.header')
  //   const navHeight = header.getBoundingClientRect().height

  //   const stickyNav = (entries) => {
  //     const [entry] = entries
  //     if (!entry.isInteresecting) {
  //       isSticky.value = true
  //     } else {
  //       isSticky.value = false
  //     }
  //   }

  //   const headerObserver = new IntersectionObserver(stickyNav, {
  //     root: null,
  //     threshold: 0,
  //     rootMargin: `${navHeight}px`
  //   })

  //   if (header) {
  //     headerObserver.observe(header)
  //   }

  //   onBeforeUnmount(() => {
  //     if (header) {
  //       headerObserver.unobserve(header)
  //     }
  //   })
})
</script>

<template>
  <section class="dark:bg-slate-700 dark:text-white px-2">
    <section class="max-w-7xl mx-auto">
      <div id="sentinel" class="h-1"></div>
      <header :class="{ sticky: isSticky }" class="flex items-center justify-between py-8 px-5">
        <!-- Logo -->
        <RouterLink :to="{ name: 'home' }">
          <figure class="flex items-center gap-2">
            <img :src="Logo" alt="Logo" class="w-16" />
            <h1 class="font-GoldWest text-OxfordBlue text-2xl dark:text-white">AssetToken</h1>
          </figure>
        </RouterLink>

        <nav
          class="hidden font-Euclid text-RichBlack lg:flex lg:items-center lg:space-x-32 lg:flex-row"
        >
          <!-- Links -->
          <div class="flex flex-col lg:space-x-10 lg:flex-row">
            <RouterLink to="/">About</RouterLink>
            <RouterLink to="/investment">Investment</RouterLink>
            <RouterLink to="/property">Property</RouterLink>
            <RouterLink to="/portfolio">Portfolio</RouterLink>
            <RouterLink to="/resources">Resources</RouterLink>
          </div>

          <!-- login and signup -->
          <div class="flex items-center gap-10">
            <div class="lg:space-x-8">
              <RouterLink to="/login" class="text-BlueRibbon font-medium">Log in</RouterLink>
              <RouterLink to="/signup">
                <Button title="Sign Up For Free" />
              </RouterLink>
            </div>

            <!-- change from dark mode to light -->
            <div @click="toggleDark()" class="cursor-pointer">
              <i :class="[isDark ? 'pi pi-sun' : 'pi pi-moon']"></i>
            </div>
          </div>
        </nav>

        <Transition name="slide-fade" class="lg:hidden">
          <nav
            v-if="showAnchorLinks"
            class="flex-col font-Euclid text-RichBlack fixed top-0 left-0 pl-5 pt-5 z-[999] h-full w-3/4 md:w-3/6 md:pl-8 md:pt-8 bg-[#001219] dark:text-RichBlack-primary lg:flex lg:items-center lg:space-x-32 lg:flex-row"
          >
            <RouterLink :to="{ name: 'home' }">
              <figure class="flex items-center gap-2 mb-8 md:mb-12">
                <img :src="Logo" alt="Logo" class="w-8 md:w-16" />
                <h1 class="font-GoldWest text-white text-2xl md:text-4xl">AssetToken</h1>
              </figure>
            </RouterLink>

            <!-- Links -->
            <div
              class="flex flex-col space-y-5 mb-5 text-xl text-white md:text-2xl md:space-y-10 md:mb-10"
            >
              <RouterLink to="/">About</RouterLink>
              <RouterLink to="/investment">Investment</RouterLink>
              <RouterLink to="/property">Property</RouterLink>
              <RouterLink to="/portfolio">Portfolio</RouterLink>
              <RouterLink to="/resources">Resources</RouterLink>
            </div>

            <!-- login and signup -->
            <div class="">
              <div class="flex flex-col mb-5 gap-5 text-lg md:mb-12 md:text-2xl">
                <RouterLink to="/login" class="text-BlueRibbon font-medium">Log in</RouterLink>
                <RouterLink to="/signup">
                  <Button title="Sign Up For Free" />
                </RouterLink>
              </div>

              <!-- change from dark mode to light -->
              <div @click="toggleDark()" class="cursor-pointer text-lg text-white md:text-4xl">
                <i :class="[isDark ? 'pi pi-sun' : 'pi pi-moon']"></i>
              </div>
            </div>
          </nav>
        </Transition>
        <div class="lg:hidden text-4xl">
          <i
            v-if="!barClicked"
            @click="timesCloseLinks"
            class="pi pi-times cursor-pointer visible"
          ></i>
          <i
            v-else="barClicked"
            @click="barsOpenLinks"
            class="pi pi-bars cursor-pointer visible"
          ></i>
        </div>
      </header>
    </section>
  </section>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #010813cc;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
