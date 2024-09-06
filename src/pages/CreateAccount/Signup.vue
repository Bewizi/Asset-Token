<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import SmartHomeTechnology from '../../assets/images/general/Smart Home Technology Concept.png'
import Button from '../../components/Button.vue'
import Modal from '../../components/Modal.vue'

const toast = useToast()

// Modal visibility state
const isModalVisible = ref(false)

const formInput = ref({
  fullName: '',
  email: '',
  phoneNumber: '',
  password: ''
})

// displays error messages
const errors = ref({
  fullName: '',
  email: '',
  phoneNumber: '',
  password: ''
})

// Name regex patter
const namePattern = /^[A-Za-z\s]+$/
// Email regex pattern
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// Phone number regex pattern
const phoneNumberPattern = /^(?:\+234|234|0)(?:70|80|81|90|91)[0-9]{8}$/
// Password regex pattern (min 8 chars, one uppercase, one number, one special char)
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

// validate Name
const validateName = () => {
  if (!namePattern.test(formInput.value.fullName)) {
    errors.value.fullName = 'Name must contain letters and spaces'
  } else {
    errors.value.fullName = ''
  }
}

// validate Eamil
const validateEmail = () => {
  if (!emailPattern.test(formInput.value.email)) {
    errors.value.email = 'Invalid email address'
  } else {
    errors.value.email = ''
  }
}

// validate PhoneNumber
const validatePhoneNumber = () => {
  if (!phoneNumberPattern.test(formInput.value.phoneNumber)) {
    errors.value.phoneNumber = 'Invaild Phone Number'
  } else {
    errors.value.phoneNumber = ''
  }
}

// validate Password
const validatePassword = () => {
  if (!passwordPattern.test(formInput.value.password)) {
    errors.value.password =
      'Password must be at least 8 characters, include an uppercase Letter, a number,and a special character'
  } else {
    errors.value.password = ''
  }
}

// Form submitted
const handleSubmit = () => {
  formInput.value

  //validate both email and password for submission
  validateName()
  validateEmail()
  validatePhoneNumber()
  validatePassword()

  if (
    !errors.value.fullName &&
    !errors.value.email &&
    !errors.value.password &&
    !errors.value.phoneNumber
  ) {
    // proceed to login

    toast.success('Account created successful')

    // Clear the form input fields after successful login
    formInput.value.fullName = ''
    formInput.value.email = ''
    formInput.value.phoneNumber = ''
    formInput.value.password = ''

    // Show modal on successful form submission
    isModalVisible.value = true

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
  <section class="max-w-7xl mx-auto mt-20 relative">
    <section class="flex items-center justify-center px-5 md:px-0 lg:justify-between">
      <div>
        <div class="text-center mb-10">
          <h1 class="text-OxfordBlue font-bold text-4xl mb-2">Create Account</h1>
          <p class="text-Glaucous">This information would be used to create your account</p>
        </div>
        <form action="" class="mb-5" @submit.prevent="handleSubmit">
          <!-- name -->
          <div class="mb-5">
            <label for="name" class="text-Glaucous">Name</label>
            <div class="border border-Glaucous py-3 rounded-md mb-2 flex items-center">
              <i class="pi pi-user ml-3 mr-5 text-Glaucous"></i>
              <input
                v-model="formInput.fullName"
                type="text"
                placeholder="Enter your Name"
                class="placeholder:text-Glaucous border-none focus:outline-none w-full text-lg"
              />
            </div>
            <p v-if="errors.fullName" class="text-red-500 text-sm">{{ errors.fullName }}</p>
          </div>

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

          <!-- phone number -->
          <div class="mb-5">
            <label for="phoneNumber" class="text-Glaucous">Phone Number</label>
            <div class="border border-Glaucous py-3 rounded-md mb-2 flex items-center">
              <i class="pi pi-phone ml-3 mr-5 text-Glaucous"></i>
              <input
                v-model="formInput.phoneNumber"
                type="text"
                placeholder="Enter your phone number"
                class="placeholder:text-Glaucous border-none focus:outline-none w-full text-lg"
              />
            </div>
            <p v-if="errors.phoneNumber" class="text-red-500 text-sm">{{ errors.phoneNumber }}</p>
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
          <Button class="w-full bg-[#8DB0F9] hover:bg-BlueRibbon">Next</Button>
        </form>

        <!-- redirect to the login -->
        <div class="text-center text-sm mb-5">
          <p class="text-OxfordBlue mb-2">
            I Have An Account
            <router-link to="/login" class="text-BlueRibbon">Login</router-link>
          </p>

          <!-- agree to term and conditions -->
          <div class="mb-2">
            <input type="checkbox" />
            <span class="text-OxfordBlue ml-2"
              >By signing up, you agree to our Terms & Privacy Policy</span
            >
          </div>

          <!-- watch a video -->
          <div class="flex items-center justify-center">
            <button class="bg-transparent text-Glaucous">Watch Learn Video</button>
            <i
              class="pi pi-play text-white rounded-full p-3 ml-2 bg-gradient-to-b from-[#3A76F5] to-Sunglow/80"
            ></i>
          </div>
        </div>
      </div>

      <figure class="hidden lg:block">
        <img
          :src="SmartHomeTechnology"
          alt="An isometric illustration of a modern, two-story smart home"
        />
      </figure>
    </section>
  </section>
  <Modal v-if="isModalVisible" @close="isModalVisible = false" />
</template>

<style scoped>
input {
  background-color: transparent;
}
</style>
