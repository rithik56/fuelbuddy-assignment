<script lang="ts">
export default {
    props: {
        title: String
    }
}
</script>

<template>
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span class="block w-full text-xl uppercase font-bold mb-4">{{ title }}</span>
        <slot></slot>
    </div>
</template>