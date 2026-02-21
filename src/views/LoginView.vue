<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>

<template>
    <div class="login">
        <!-- <button @click="authStore.login()">Войти</button> -->
        <a @click="authStore.login('Андрей')">Войти</a>
    </div>
</template>

<style>

</style>
