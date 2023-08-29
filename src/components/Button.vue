<script lang="ts">
export default {
    name: 'Button',
    props: {
        label: String,
        color: String,
        clickHandler: Function
    }
}
</script>

<template>
    <button class="text-white uppercase text-sm font-semibold px-4 py-2 rounded" @click="() => {
        if (clickHandler) {
            clickHandler()
        }
    }">{{ label }}</button>
</template>

<style scoped>
button {
    background-color: v-bind(color);
}
</style>