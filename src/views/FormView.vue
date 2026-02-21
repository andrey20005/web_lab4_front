<script setup>
import ImageInForm from './FormComponents/ImageInForm.vue'
import InputField from './FormComponents/InputField.vue'
import ResTable from './FormComponents/ResTable.vue'
import ItemBox from './Components/ItemBox.vue'
</script>


<template>
    <ItemBox style="flex: 1">
        <ImageInForm/>
    </ItemBox>
    <ItemBox style="flex: 1">
        <InputField>
            <template #legend>X:</template>
            <div class="radio-group">
                <label><input type="radio" name="X" value="-4"> -4 </label>
                <label><input type="radio" name="X" value="-3"> -3 </label>
                <label><input type="radio" name="X" value="-2"> -2 </label>
                <label><input type="radio" name="X" value="-1"> -1 </label>
                <label><input type="radio" name="X" value="0" checked> 0 </label>
                <label><input type="radio" name="X" value="1"> 1 </label>
            </div>
        </InputField>
    </ItemBox>
    <ItemBox style="flex: 3">
        <ResTable/>
    </ItemBox>
</template>

<style>

.radio-group {
    white-space: nowrap;
}   

</style>
