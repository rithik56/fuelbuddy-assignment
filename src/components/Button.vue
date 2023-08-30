<script lang="ts">
import Spinner from './Spinner.vue';

export default {
    name: 'Button',
    components: {
        Spinner
    },
    computed: {
        classes() {
            const styles = {
                green: 'bg-green-600 hover:bg-green-700',
                red: 'bg-red-600 hover:bg-red-700',
                yellow: 'bg-yellow-600 hover:bg-yellow-700',
                blue: 'bg-blue-600 hover:bg-blue-700'
            }
            if(this.$props.color) {
                return styles[this.$props.color as keyof typeof styles] ? styles[this.$props.color as keyof typeof styles] : styles['green']
            }
           
        }
    },
    props: {
        label: String,
        color: String, 
        loading: Boolean,
        clickHandler: Function
    }
}
</script>

<template>
    <button :class="[`w-full text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-primary-800 flex justify-center items-center`, classes]" @click="() => {
        if (clickHandler) {
            clickHandler()
        }
    }">
        <span v-if="loading === false">{{ label }}</span>
        <Spinner v-if="loading === true" />
    </button>
</template>