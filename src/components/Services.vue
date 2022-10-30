<template>
    <div>
        <SectionIntro heading="Services" description="I offer the following services"/>
        <div class="info-wrapper">
            <div v-for="service in getServices" :key="service.tempId" data-animation-class="slideInFromBottom" :data-animation-delay="0.2 * service.tempId" class="animated service">
                <div class="icon-wrapper">
                    <i :class="service.iconClass"></i>
                </div>
                <div>
                    <h5 class="title">
                        {{ service.title }}
                    </h5>
                    <p class="desc">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionIntro from '@/components/SectionIntro.vue'
    export default {
        components: {
            SectionIntro,
        },
        computed: {
            getServices() {
                const newArray = [...this.$store.state.services]
                for(let i = 0; i < newArray.length; i++){
                    newArray[i]['tempId'] = i
                }
                return newArray
            }
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
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}
.service{
    width: 100%;
    padding: 0rem 0.5rem 2rem 0.5rem;
    display: flex;
}
.service:hover .icon-wrapper{
    color: #007aff;
    background-color: white;
    border: 1px solid #007aff
}
.service:hover i{
    color: #007aff;
}
.service:hover h5{
    color: #007aff;
}
.icon-wrapper{
    margin-right: 2rem;
    height: 3.5rem;
    min-width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007aff;
    border-radius: 20rem;
    margin-top: 0.2rem;
    transition: all 0.3s ease;
}
.icon-wrapper i{
    font-size: 1.6rem;
    color: white;
    transition: all 0.3s ease;
}
.title{
    font-weight: bold;
    transition: all 0.3s ease;
}
.desc{
    margin-top: 1rem;
}
@media (min-width: 640px) {
    
}
@media (min-width: 768px) { 
    .service{
        width: 50%;
    }
    .info-wrapper{
        display: flex;
    
    }

}
@media (min-width: 1024px) { 
    
}
@media (min-width: 1280px) { 
    .service{
        width: 33%;
    }
}


</style>