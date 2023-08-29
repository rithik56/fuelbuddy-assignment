<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useAuthStore } from './stores/useAuthStore';
import Layout from './components/Layout.vue';

const store = useAuthStore()

onMounted(() => {
  store.init()
})

</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>