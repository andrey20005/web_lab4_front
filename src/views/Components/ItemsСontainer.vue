<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style>
.container {
    margin: 0px 20px;
}

@media (max-width: 719px) {
    .container {
        min-height: 75vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        justify-content: space-evenly;
        /* justify-items: stretch; */
        /* align-content: center; */
        height: 100%;
        /* place-items: center; */
    }
}

@media (min-width: 720px) {
    .container {
        min-height: 75vh;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: 100%;
        place-items: center;
    }
}

@media (min-width: 1170px) {
    .container {
        width: 1170px;
    }
}
</style>