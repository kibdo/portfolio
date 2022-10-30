<template>
    <div>
        <SectionIntro heading="Facts" description=""/>
        <div class="info-wrapper">
            <div data-animation-class="slideInFromBottom" :data-animation-delay="0.2 * fact.tempId" v-for="fact in getFacts" :key="fact.tempId" class="animated fact">
                
                <i :class="fact.iconClass"></i>
                <div class="fact-details">
                    <h3>{{ fact.value }}</h3>
                    <p><b>{{ fact.title }}</b> <span>{{ fact.desc }}</span></p>
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
            getFacts() {
                let newArray = [...this.$store.state.facts]
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
    flex-direction: column;
    padding-left: 2rem;
}
.fact{
    display: flex;
    align-items: start;
    margin-top: 2.5rem;
}
.fact i{
    font-size: 2.8rem;
    color: #149ddd;
}
.fact-details{
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
}
.fact-details h3{
    font-size: 3rem;
    font-weight: bold;
    
}
.fact-details p{
    margin-top: 0.3rem;
    text-transform: capitalize;
}
@media (min-width: 640px) {
    
}
@media (min-width: 768px) { 
    .info-wrapper{
        width: 80%;
        flex-direction: row;
        padding-left: 0rem;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0px auto;
    }
    .fact{
        width: 50%;
        padding-right: 2rem;
    }
}
@media (min-width: 1024px) { 
    .info-wrapper{
        width: 80%;
        flex-direction: row;
        padding-left: 0rem;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
    .fact{
        width: 25%;
        padding-right: 1rem;
    }
}
@media (min-width: 1280px) { 
    .info-wrapper{
        padding: 0rem 3rem;
    }
}


</style>