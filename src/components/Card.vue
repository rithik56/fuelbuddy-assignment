<script lang="ts">
export default {
    props: {
        title: String
    }
}
</script>

<template>
    <div class="w-full bg-gray-800 rounded shadow-lg md:max-w-sm md:mx-auto" style="position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <span class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">{{ title }}</span>
            <slot></slot>
        </div>
    </div>
</template>