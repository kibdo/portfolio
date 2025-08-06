<template>
    <div>
        <SectionIntro heading="About" description="My name is Umar Atiku Abubakar, a trained architect with a Master’s degree in Architecture from Caleb University, Lagos. Born and raised in Kaduna State, I began my architectural studies at the Federal University of Technology, Minna, before transferring to Caleb University in 2020, where I completed both my Bachelor’s and Master’s degrees."/>
        
        <div class="info-wrapper">
            <div data-animation-class="slideInFromLeft" class="animated dp-wrapper">
                <img  class="border-2 border-gray-500" src="@/assets/images/avatar.png" alt="">
            </div>
            <div data-animation-class="slideInFromRight" class="animated main-wrapper">
                <h1>Architecture Career</h1>
                <p class="main-intro">
                    {{ getIntro }}
                </p>
                <div class="details-wrapper">
                    <div v-for="data in getBioData" :key="data.title" class="info-block"><i class="bi bi-chevron-right"></i> <span class="detail">{{ data.title }}:</span><span class="value">{{ data.value }}</span></div>
                </div>
                <p>
                    {{ getOutro }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import SectionIntro from '@/components/SectionIntro.vue'
    export default {
        data() {
            return {
                state: this.$store.state
            }
        },
        components: {
            SectionIntro,
        },
        computed: {
            getBioData() {
                return this.state.adminInfo.bioData
            },
            getIntro(){
                return this.state.adminInfo.bioIntro
            },
            getOutro(){
                return this.state.adminInfo.bioOutro
            }
        },
    }
</script>

<style scoped>
.main-wrapper{
    position: relative;
}
.info-wrapper{
    position: relative;
    overflow-x: hidden;    
}
.dp-wrapper{
    position: relative;
}

@media (min-width: 640px) {
    .details-wrapper{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    } 
    .info-block{
    }
}
@media (min-width: 768px) { 
    .info-wrapper{
        display: flex;
    
    }
    .dp-wrapper{
        position: relative;
        margin-top: 1rem;
        width: 30%;
    }
    .main-wrapper{
        width: 70%;
        margin-left: 1.5rem;
    }
}
@media (min-width: 1024px) { 
    .dp-wrapper{
        width: 33%;
    }
    .main-wrapper{
        width: 67%;
    }
}
@media (min-width: 1280px) { 
    
}
*{
    margin: 0px;
    padding: 0px;
}
.details-wrapper{
    width: 100%;
    
}
.info-wrapper{
    width: 100%;
    position: relative;
}
.info-block{
    margin-top: 1rem;
}
.main-intro{
    font-style: italic;
}
.info-block .detail{
    font-weight: bolder;
    text-transform: capitalize;
}
.info-block .bi{
    color: #149ddd
}
.info-block .value{
    margin-left: 1rem;
}
h1{
    color: #173b6c;
    font-size: 2rem;
    font-weight: bold;
}

.dp-wrapper{
    margin-top: 1rem;
}
.main-wrapper{
    margin-top: 1rem;
    
}
.main-wrapper p{
    margin-top: 0.5rem;
}
</style>