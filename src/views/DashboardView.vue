<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore';
import Card from '@/components/Card.vue';

const store = useAuthStore()

</script>

<template>
  <Card title="Firebase Credentials">
    <div class="mb-4">
      <span>Email</span>
      <h1>{{ store.email }}</h1>
    </div>
    <div>
      <span>User Id</span>
      <h1>{{ store.id }}</h1>
    </div>
  </Card>
</template>
  
<style></style>