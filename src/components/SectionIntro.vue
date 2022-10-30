<template>
    <div>
        <TitleText :heading="heading" />
        <div class="intro">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
import TitleText from '@/components/TitleText.vue'
    export default {
        props: ['heading', 'description'],
        components: {
            TitleText,
        },
    }
</script>

<style scoped>
.intro{
    margin-top: 1rem;
}
</style>