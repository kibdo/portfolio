<template>
    <div class="heading">
        <h1>{{ heading }}</h1>
        <div class="text-deco"></div>
    </div>
</template>

<script>
    export default {
        props: ['heading']
    }
</script>

<style scoped>
.heading .text-deco{
    width: 3.5rem;
    height: 0.2rem;
    background-color: #149ddd;
    margin-top: 1rem;
}
h1{
    color: #173b6c;
    font-size: 2rem;
    font-weight: bold;
    text-transform: capitalize;
}
</style>