<script lang="ts">
import { useAuthStore } from '@/stores/useAuthStore';
import Card from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue';

const store = useAuthStore()

export default {
  name: 'Dashboard',
  components: {
    Card,
    Spinner
  },
  data() {
    return {
      email: store.email,
      id: store.id,
      loading: false
    }
  },
  methods: {
    handleLogout: async function () {
      try {
        this.loading = true
        await store.logout()
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
  <button
    class="text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-primary-800"
    @click="() => {
      handleLogout()
    }">
  <span v-if="loading === false">Log out</span>
  <Spinner v-if="loading === true" />  
  </button>
  <Card title="User Details">
    <div class="mb-4">
      <span class="block mb-2 text-md font-medium text-white">Email</span>
      <span class="block mb-2 text-lg font-medium text-white">{{ email }}</span>
    </div>
    <div>
      <span class="block mb-2 text-md font-medium text-white">User Id</span>
      <span class="block mb-2 text-lg font-medium text-white">{{ id }}</span>
    </div>
  </Card>
</template>

<style scoped>
button {
  position: absolute;
  top: 50px;
  right: 50px;
}
</style>