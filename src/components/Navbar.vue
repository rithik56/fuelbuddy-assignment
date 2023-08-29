<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';

const store = useAuthStore()

const handleLogout = async () => {
    try {
        await store.logout()
    } catch (err) {
        setTimeout(() => {
            store.error = null
        }, 5000)
    }
}

</script>

<template>
    <nav>
        <ul>
            <li v-if="store.id === null">
                <RouterLink to="/">Login</RouterLink>
            </li>
            <li v-if="store.id === null">
                <RouterLink to="/register">Signup</RouterLink>
            </li>
            <li v-if="store.id !== null"><button @click="handleLogout">Logout</button></li>
        </ul>
    </nav>
</template>

<style>
nav {
    position: fixed;
    width: 100vw;
    padding: 16px;
    display: flex;
    justify-content: end;
    background-color: black;
    color: white;
    font-weight: 600;
}

ul {
    display: flex;
    gap: 32px;
}
</style>