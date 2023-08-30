<script lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import Card from '@/components/Card.vue';
import type { MouseEvent } from 'react';

const store = useAuthStore()

export default {
  name: 'Register',
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
    handleSubmit: async function (event: MouseEvent) {
      try {
        this.loading = true
        await store.signup({ email: this.email, password: this.password })
      } catch (err: unknown) {
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
  <Card title="Create Your Account">
    <div class="mb-4 md:w-full">
      <TextInput label="Email" type="email" :value="email" :onChangeHandler="onEmailChange" />
    </div>
    <div class="mb-6 md:w-full">
      <TextInput label="Password" type="password" :value="password" :onChangeHandler="onPasswordChange" />
    </div>
    <Button label="Create" color="green" :loading="loading" :clickHandler="handleSubmit"></Button>
    <p class="text-sm font-light text-gray-400">
      Already have an account? <RouterLink to="/" class="font-medium hover:underline" style="color:#21bd58">Sign in</RouterLink>
    </p>
  </Card>
</template>

<style>
.box {
  border-radius: 2rem;
}

.border-t-10 {
  border-top-width: 10px;
}
</style>
