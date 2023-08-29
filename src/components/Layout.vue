<script lang="ts">
import Navbar from './Navbar.vue';
import Alert from './Alert.vue';
export default {
    components: {
        Navbar,
        Alert
    }
}
</script>

<template>
    <Alert />
    <Navbar />
    <main class="antialiased bg-gray-200 text-gray-900 font-sans">
        <div class="flex items-center h-screen w-full">
            <slot></slot>
        </div>
    </main>
</template>
