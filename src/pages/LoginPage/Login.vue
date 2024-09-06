<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import Logo from '../../assets/images/assset-token-logo.png'
import Button from '../../components/Button.vue'

const toast = useToast()

const formInput = ref({
  email: '',
  password: ''
})

// displays error messages
const errors = ref({
  email: '',
  password: ''
})

// Email regex pattern
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// Password regex pattern (min 8 chars, one uppercase, one number, one special char)
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

// validate Eamil
const validateEmail = () => {
  if (!emailPattern.test(formInput.value.email)) {
    errors.value.email = 'Invalid email address'
  } else {
    errors.value.email = ''
  }
}

const validatePassword = () => {
  if (!passwordPattern.test(formInput.value.password)) {
    errors.value.password =
      'Password must be at least 8 characters, include an uppercase Letter, a number,and a special character'
  } else {
    errors.value.password = ''
  }
}

const handleSubmit = () => {
  formInput.value

  //validate both email and password for submission
  validateEmail()
  validatePassword()

  // Check if there are no errors
  if (!errors.value.email && !errors.value.password) {
    // proceed to login
    toast.success('Login successful')

    // Clear the form input fields after successful login
    formInput.value.email = ''
    formInput.value.password = ''

    return `Form Submitted: ${formInput.value}`
  } else {
    toast.error('Form has errors')
    return `Form has errors:${errors.value}`
  }
}

const passwordShow = ref(false)

const showPassword = () => {
  passwordShow.value = !passwordShow.value
}
</script>

<template>
  <section class="max-w-xs mx-auto mt-20">
    <figure class="flex items-center justify-center mb-20">
      <img :src="Logo" alt="Asset Token Logo" />
    </figure>

    <!-- login with email and password -->
    <form action="" class="mb-5" @submit.prevent="handleSubmit" autocomplete="off">
      <!-- email input -->
      <div class="mb-5">
        <label for="email" class="text-Glaucous">Email</label>
        <div class="border border-Glaucous py-3 rounded-md mb-2 flex items-center">
          <i class="pi pi-envelope ml-3 mr-5 text-Glaucous"></i>
          <input
            v-model="formInput.email"
            type="text"
            placeholder="Enter your email address"
            class="placeholder:text-Glaucous border-none focus:outline-none w-full text-lg"
          />
        </div>
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <!-- password input -->
      <div class="mb-8">
        <label for="password" class="text-Glaucous">Password</label>
        <div class="border border-Glaucous py-3 rounded-md mb-2 flex items-center">
          <i class="pi pi-lock ml-3 mr-5 text-Glaucous"></i>
          <input
            v-model="formInput.password"
            :type="passwordShow ? 'text' : 'password'"
            placeholder="Enter your password"
            class="placeholder:text-Glaucous border-none focus:outline-none w-full text-lg"
          />
          <!-- show password -->
          <i
            @click="showPassword"
            :class="
              passwordShow
                ? 'pi pi-eye mr-5 text-Glaucous cursor-pointer'
                : 'pi pi-eye-slash mr-5 text-Glaucous cursor-pointer'
            "
          ></i>
        </div>
        <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
      </div>
      <Button class="w-full bg-[#8DB0F9] hover:bg-BlueRibbon">Login</Button>
    </form>

    <!-- redirect to the signup -->
    <div class="text-center text-sm mb-5">
      <p class="text-OxfordBlue">
        Don't Have An Account
        <router-link to="/signup" class="text-BlueRibbon">Create Account</router-link>
      </p>
    </div>

    <!-- redirect to home page and forget password -->
    <div class="flex justify-between">
      <router-link to="/" class="text-OxfordBlue text-sm">Go Back Home</router-link>

      <!-- when user forgets password -->
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

<style scoped>
input {
  background-color: transparent;
}
</style>
