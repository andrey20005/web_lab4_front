<script setup>
import { useTimeStore } from '@/stores/timeStore'
import { onMounted } from 'vue'

import ItemBox from './Components/ItemBox.vue'

const timeStore = useTimeStore()

onMounted(() => {
  timeStore.loadTime()
})
</script>

<template>
    <ItemBox style="flex: 1">
        <p>Время: {{ timeStore.currentTime }}</p>
        <p>Пояс: {{ timeStore.timezone }}</p>
    </ItemBox>
</template>
