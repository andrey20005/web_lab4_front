<template>
<div class="item_box">
    <slot></slot>
</div>
</template>

<style>
.item_box {
    /* flex: 1; */
    margin: 10px;
    background-color: var(--color-background-soft);
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
