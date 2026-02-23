<script setup>
import { useTimeStore } from '@/stores/timeStore'
import { onMounted } from 'vue'

import ItemBox from './Components/ItemBox.vue'
import ItemsСontainer from './Components/ItemsСontainer.vue'

const timeStore = useTimeStore()

onMounted(() => {
  timeStore.loadTime()
})
</script>

<template>
    <ItemsСontainer>
        <ItemBox>
            <p>Время: {{ timeStore.currentTime }}</p>
            <p>Пояс: {{ timeStore.timezone }}</p>
        </ItemBox>
    </ItemsСontainer>
</template>
