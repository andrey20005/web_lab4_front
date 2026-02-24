<script setup>
import ImageInForm from './FormComponents/ImageInForm.vue'
import InputField from './FormComponents/InputField.vue'
import ResTable from './FormComponents/ResTable.vue'
import ItemBox from './Сomponents/ItemBox.vue'
import ItemsСontainer from './Сomponents/ItemsСontainer.vue'
import { ref, computed } from 'vue'
import { usePointsStore } from '@/stores/pointsStore'

const pointsStore = usePointsStore()
const formError = ref('')

const xValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
const rValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
</script>

<template>
    <ItemsСontainer>
        <ItemBox>
            <ImageInForm />
        </ItemBox>
        <ItemBox id="form">
            <form @submit.prevent="pointsStore.addPoint()">
                <InputField>
                    <template #legend>X:</template>
                    <select v-model.number="pointsStore.newPoint.x">
                        <option v-for="val in xValues" :key="val" :value="val">
                            {{ val }}
                        </option>
                    </select>
                </InputField>
                <InputField>
                    <template #legend>Y:</template>
                    <input type="number" v-model.number="pointsStore.newPoint.y" min="-3" step="0.0001" max="3"
                        placeholder="от -3 до 3" />
                </InputField>
                <InputField>
                    <template #legend>R:</template>
                    <select v-model.number="pointsStore.newPoint.r">
                        <option v-for="val in rValues" :key="val" :value="val">
                            {{ val }}
                        </option>
                    </select>
                </InputField>
                <InputField>
                    <button type="submit" :disabled="pointsStore.loading"> {{ pointsStore.loading ? 'Добавление...' : 'Добавить' }} </button>
                </InputField>
                <div class="exeptoin_in_form" v-if="pointsStore.error">{{ pointsStore.error }}</div>
            </form>
            <!-- <a @click="pointsStore.addPoint()">{{ pointsStore.loading ? 'Добавление...' : 'Добавить' }}</a> -->
        </ItemBox>
        <ItemBox style="flex: 4">
            <ResTable />
        </ItemBox>
    </ItemsСontainer>
</template>

<style>
#form select,
#form input {
    min-width: 150px;
    background-color: var(--color-background-mute);
    border: 0;
    font-size: 20px;
    color: var(--color-text);
}

.exeptoin_in_form {
    max-width: 250px;
}
</style>
