<script lang="ts">
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
      password: ''
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
        await store.signup({ email: this.email, password: this.password })
      } catch (err: unknown) {
        setTimeout(() => {
          store.error = null
        }, 5000)
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
    <Button label="Create" color="green" :clickHandler="handleSubmit"></Button>
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
