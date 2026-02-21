<template>
<div class="item_box">
    <slot></slot>
</div>
</template>

<style>
.item_box {
    flex: 1;
    margin: 10px;
    background-color: var(--color-background-soft);
    padding: 20px;
    border-radius: 20px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* .item_box div { */
    /* margin: 0 200px 0 200px; */
    /* display: block; */
/* } */

</style>
