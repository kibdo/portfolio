<template>
    <div>
        <SectionIntro heading="Testimonials" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis unde quam totam eveniet accusantium facilis eum earum perspiciatis, eius, dolor ut! Assumenda soluta fuga eligendi exercitationem sapiente sequi corporis!"/>
        <div class="info-wrapper">
            
        </div>
    </div>
</template>

<script>
import SectionIntro from '@/components/SectionIntro.vue'
    export default {
        components: {
            SectionIntro,
        },
    }
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.info-wrapper{
    width: 100%;
}
@media (min-width: 640px) {
    
}
@media (min-width: 768px) { 
    .info-wrapper{
        display: flex;
    
    }
    
}
@media (min-width: 1024px) { 
    
}
@media (min-width: 1280px) { 
    
}


</style>