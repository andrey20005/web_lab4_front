<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()

</script>

<template>
    <header>
        <div>
            <div class="header-info">
                <p>Захарченко</p><p>Андрей</p><p>Сергеевич</p>
            </div>
            <div class="header-info">
                <p>Группа: </p><p>P3214</p>
            </div>
            <div class="header-info">
                <p>Вариант: </p><p>47834</p>
            </div>
        </div>
        <div>
            <RouterLink to="/">Home</RouterLink> 
            <RouterLink to="/form">Form</RouterLink> 
        </div>
        <div id="user_header" v-if="authStore.isAuthenticated">
            <p>{{ authStore.user }}</p>
            <a @click="authStore.logout">Выйти</a>
        </div>
        <div id="log-reg-buttons" v-else>
            <RouterLink to="/login">Войти</RouterLink>
        </div>
    </header>
    
    <RouterView />
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px auto 10px auto;
    @media (max-width: 775px) {
        margin: 20px 20px 10px 20px;
    }
    padding: 10px;
    background-color: var(--color-background-soft);
    border-radius: 10px;
}

@media (min-width: 775px) {
    header {
        width: 715px;
    }
}

header div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.header-info {
    flex-direction: column;
    padding: 10px;
}

</style>
