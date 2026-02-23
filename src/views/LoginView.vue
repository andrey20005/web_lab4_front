<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import ItemBox from './Components/ItemBox.vue'
import { useRouter } from 'vue-router'
import InputField from './FormComponents/InputField.vue'

import ItemsСontainer from './Components/ItemsСontainer.vue'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const handleLogin = async () => {
    loading.value = true
    error.value = ''

    try {
        await authStore.login(username.value, password.value)
        router.push('/form')
    } catch (err) {
        console.log(err)
        error.value = err.response?.data?.error || 'Ошибка при входе'
    } finally {
        loading.value = false
    }
}

const handleRegist = async () => {
    loading.value = true
    error.value = ''

    try {
        await authStore.register(username.value, password.value)
        await authStore.login(username.value, password.value)
        router.push('/form')
    } catch (err) {
        error.value = err.response?.data?.error || 'Ошибка при входе'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <ItemsСontainer>
        <ItemBox>
            <input v-model="username" placeholder="Логин" />
            <input v-model="password" type="password" placeholder="Пароль" />
            <a @click="handleLogin">{{ loading ? 'Вход...' : 'Войти' }}</a>
            <a @click="handleRegist">{{ loading ? 'регистрация...' : 'Зарегестрироваться' }}</a>
            <div v-if="error" class="error">{{ error }}</div>
        </ItemBox>
    </ItemsСontainer>
</template>

<style>

</style>
