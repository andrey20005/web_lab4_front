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
    <!-- Обёртка с прокруткой -->
    <div class="table-wrapper">
        <table class="res-table">
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
                    <td colspan="5" class="empty-cell">Загрузка...</td>
                </tr>
                <tr v-else-if="pointsStore.error">
                    <td colspan="5" class="empty-cell error">{{ pointsStore.error }}</td>
                </tr>
                <tr v-else-if="pointsStore.points.length === 0">
                    <td colspan="5" class="empty-cell">Нет данных</td>
                </tr>
                <tr v-for="point in pointsStore.points" :key="point.id">
                    <td>{{ formatTime(point.createdAt) }}</td>
                    <td>{{ point.r.toFixed(3) }}</td>
                    <td>{{ point.x.toFixed(3) }}</td>
                    <td>{{ point.y.toFixed(3) }}</td>
                    <td :class="point.hit ? 'hit' : 'miss'">
                        {{ point.hit ? 'Попал' : 'Мимо' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
/* Обёртка: отвечает за скролл и границы */
.table-wrapper {
    width: 100%;
    min-width: 230px;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: auto;
    /* border: 1px solid var(--color-border); */
    border: 0;
    border-radius: 4px;
    background: var(--color-background-soft);
    
    /* Кастомизация скроллбара */
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) transparent;
}

.table-wrapper::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.table-wrapper::-webkit-scrollbar-track {
    background: transparent;
}

.table-wrapper::-webkit-scrollbar-thumb {
    background-color: var(--color-border);
    border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-border-hover);
}

/* Сама таблица */
.res-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto; /* Адаптивная ширина колонок */
    font-size: 15px;
}

/* Шапка: фиксированная позиция */
.table-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--color-background-mute);
}

.table-header th {
    padding: 8px;
    text-align: center;
    font-weight: 600;
    color: var(--color-heading);
    border-bottom: 2px solid var(--color-border);
    white-space: nowrap;
    /* Важно: фон должен перекрывать прокручиваемый контент */
    background-color: var(--color-background-mute);
}

/* Тело таблицы */
.res-table tbody tr {
    border-bottom: 1px solid var(--color-border);
    transition: background-color 0.15s ease;
}

.res-table tbody tr:last-child {
    border-bottom: none;
}

.res-table tbody tr:hover {
    background-color: var(--color-background-mute);
}

/* Ячейки */
.res-table td {
    padding: 8px;
    text-align: center;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Состояния */
.hit {
    color: var(--emerald-green);
    font-weight: 600;
}

.miss {
    color: var(--blue);
    font-weight: 600;
}

.error {
    color: #ff6b6b;
    font-weight: 600;
}

.empty-cell {
    text-align: center;
    font-style: italic;
    color: var(--color-text);
}
</style>