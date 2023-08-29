<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore';

const store = useAuthStore()

</script>

<template>
    <div v-if="store.error !== null" class="bg-red-100 border border-red-400 text-red-700 rounded relative w-full md:max-w-sm md:mx-auto" role="alert">
        <span class="block sm:inline">{{ store.error }}</span>
        <!-- <span>
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <title>Close</title>
                <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
        </span> -->
    </div>
</template>

<style scoped>
div {
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 50%;
    transform: translate(-50%, 0px);
    display: flex;
    align-items: center;
    padding: 16px;
    /* gap: 16px; */
}
</style>