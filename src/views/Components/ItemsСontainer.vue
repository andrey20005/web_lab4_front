<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style>
.container {
    margin: 0px 20px;
}

@media (min-width: 1210px) {
    .container {
        width: 1170px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        justify-items: stretch;
        align-content: center;
        height: 100%;
    }
}
</style>