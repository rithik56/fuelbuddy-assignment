<script lang="ts">
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
        await store.login({ email: this.email, password: this.password })
      } catch (err) {
        setTimeout(() => {
          store.error = null
        }, 5000)
      }
    }
  }
}

</script>

<template>
  <Card title="Login">
    <div class="mb-4 md:w-full">
      <TextInput label="Email" type="email" :value="email" :onChangeHandler="onEmailChange" />
    </div>
    <div class="mb-6 md:w-full">
      <TextInput label="Password" type="password" :value="password" :onChangeHandler="onPasswordChange" />
    </div>
    <Button label="Login" color="green" :clickHandler="handleSubmit"></Button>
  </Card>
</template>
