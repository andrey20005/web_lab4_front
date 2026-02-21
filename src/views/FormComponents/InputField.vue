<template>
    <fieldset class="my-fieldset">
        <legend><slot name="legend"></slot></legend>
        <slot></slot>
    </fieldset>
</template>

<style>
.my-fieldset {
    /* border-radius: 10px; */
    padding: 3px 15px 10px 15px;
    /* border-width: 1.5px; */
    border: 0;
}
</style>
