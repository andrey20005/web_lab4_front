<template>
    <fieldset class="my-fieldset">
        <legend><slot name="legend"></slot></legend>
        <!-- <legend><h3><slot name="legend"></slot></h3></legend> -->
        <slot></slot>
    </fieldset>
</template>

<style>
.my-fieldset {
    padding: 3px 15px 10px 15px;
    border: 0;
}
</style>
