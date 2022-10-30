<template>
    <div>
        <SectionIntro heading="Skills" description="Below is a list of some Architectural Softwares and software development packages I use."/>
        <div class="info-wrapper">
            <div data-animation-class="slideInFromBottom" v-for="skill in getSkills" :key="skill.tempId" class="animated skill">
                <div class="skill-img-wrapper">
                    <img :src="getImageSrc(skill.imageSrc)" alt="">
                </div>
                <div class="skill-desc">
                    {{ skill.skill }}
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
            getSkills() {
                let newArray = [...this.$store.state.skills]
                for(let i = 0; i < newArray.length; i++){
                    newArray[i]['tempId'] = i
                }
                return newArray 
            }
        },

        methods: {
            getImageSrc(imgSrc) {
                return require(`@/assets/images/skills/${imgSrc}`)
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
    flex-direction: column;
    align-items: center;
}
.skill{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
}
.skill .skill-img-wrapper{
    width: 10rem;
    height: 10rem;
    
}
.skill-img-wrapper img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.skill-desc{
    padding: 1rem;
    text-align: center;
    font-weight: bold;
}
@media (min-width: 640px) {
    .info-wrapper{
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .skill{
        width: 50%;
    }
}
@media (min-width: 768px) {
    .info-wrapper{
        justify-content: center;
    } 
    .skill{
        width: 30%;
    }
    
}
@media (min-width: 1024px) { 
    .skill{
        width: 25%;
    }
    .info-wrapper{
        justify-content: start;
    } 
}
@media (min-width: 1280px) { 
    
}


</style>