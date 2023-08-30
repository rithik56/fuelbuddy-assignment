<script lang="ts">
import Alert from './Alert.vue';
export default {
    components: {
        Alert
    }
}
</script>

<template>
    <Alert />
    <main class="antialiased bg-gray-900 text-gray-900 font-sans">
        <div class="h-screen w-full">
            <slot></slot>
        </div>
    </main>
</template>
