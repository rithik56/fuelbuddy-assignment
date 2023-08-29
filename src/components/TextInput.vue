<script lang="ts">
export default {
    name: 'TextInput',
    props: {
        label: String,
        type: String,
        value: String,
        onChangeHandler: Function
    },
}

</script>

<template>
    <label class="block text-xs mb-1">{{ label }}</label>
    <input class="w-full border rounded p-2 outline-none focus:shadow-outline" :type="type" :value="value" @input="(event) => {
        if (onChangeHandler) {
            onChangeHandler(event)
        }
    }" placeholder="Email">
</template>