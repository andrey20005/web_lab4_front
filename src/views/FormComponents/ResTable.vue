<script setup>
import { usePointsStore } from '@/stores/pointsStore'
import { onMounted } from 'vue'

const pointsStore = usePointsStore()

const formatTime = (timeString) => {
    if (!timeString) return ''
    const date = new Date(timeString)
    return date.toLocaleTimeString('ru-RU', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    })
}

onMounted(() => {
    pointsStore.loadPoints()
})
</script>


<template>
    <table id="res_table">
        <thead class="table-header">
            <tr>
                <th>time</th>
                <th>R</th>
                <th>X</th>
                <th>Y</th>
                <th>Res/err</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="pointsStore.loading">
                <td colspan="5">Загрузка...</td>
            </tr>
            <tr v-else-if="pointsStore.error">
                <td colspan="5" class="error">{{ pointsStore.error }}</td>
            </tr>
            <tr v-else-if="pointsStore.points.length === 0">
                <td colspan="5">Нет данных</td>
            </tr>
            <tr v-for="point in pointsStore.points" :key="point.id">
                <td>{{ formatTime(point.createdAt) }}</td>
                <td>{{ point.r }}</td>
                <td>{{ point.x }}</td>
                <td>{{ point.y }}</td>
                <td :class="point.hit ? 'hit' : 'miss'">
                    {{ point.hit ? 'Попал' : 'Мимо' }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
#res_table {
  border-collapse: collapse;
  /* table-layout: fixed; */
  width: 100%;
  min-width: 230px;
}

#res_table tr th, #res_table tr td {
    padding: 8px;
    text-align: center;
    /* word-break: break-all; */
    /* overflow-wrap: break-word; */
    /* max-width: 300px; */
    white-space: nowrap;
}

</style>
