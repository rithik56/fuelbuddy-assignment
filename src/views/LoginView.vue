<script lang="ts">
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import Card from '@/components/Card.vue';
import { useAuthStore } from "../stores/useAuthStore"

const store = useAuthStore()

export default {
  name: 'Login',
  components: {
    Button,
    TextInput,
    Card
  },
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    onEmailChange(event: Event) {
      const target = event.target as HTMLInputElement
      if (target) {
        this.email = target.value
      }
    },
    onPasswordChange(event: Event) {
      const target = event.target as HTMLInputElement
      if (target) {
        this.password = target.value
      }
    },
    handleSubmit: async function () {
      try {
        this.loading = true
        await store.login({ email: this.email, password: this.password })
      } catch (err) {
        setTimeout(() => {
          store.error = null
        }, 5000)
      } finally {
        this.loading = false
      }
    }
  }
}

</script>

<template>
  <Card title="Sign in to your account">
    <div class="mb-4 md:w-full">
      <TextInput label="Email" type="email" :value="email" :onChangeHandler="onEmailChange" />
    </div>
    <div class="mb-6 md:w-full">
      <TextInput label="Password" type="password" :value="password" :onChangeHandler="onPasswordChange" />
    </div>
    <Button label="Sign in" color="green" :loading="loading" :clickHandler="handleSubmit"></Button>
    <p class="text-sm font-light text-gray-400">
      Don’t have an account yet? <RouterLink to="/register" class="font-medium hover:underline" style="color:#21bd58">Sign up</RouterLink>
    </p>
  </Card>
</template>
