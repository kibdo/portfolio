<template>
    <div>
        <SectionIntro heading="Portfolio" description="Checkout some of my Architecutural designs and software development projects."/>
        <div class="info-wrapper">
            <div data-animation-class="slideInFromBottom" class="animated nav">
                <a @click.prevent="handleCategoryChange(-1)" :class="{active: currentCatId == -1}" class="nav-link" href="#">All</a>
                <a @click.prevent="handleCategoryChange(category.id)" :class="{active: currentCatId == category.id}" v-for="category in projectCategories" :key="category.id" class="nav-link" href="#">{{ category.title }}</a>
            </div>
                <transition-group data-animation-class="slideInFromBottom" tag="div" class="animated main" name="project">
                    <div v-for="project in getProjects" :key="project.id" class="cardd"><Card :data="project" /></div>
                </transition-group>
        </div>
    </div>
    
</template>
<script>
import SectionIntro from '@/components/SectionIntro.vue'
import Card from '@/components/Portfolio/Card.vue'

    export default {
        methods: {
            handleCategoryChange(catId) {
                this.currentCatId = catId;
            }
        },
        computed: {
            getProjects() {
                let projects = [...this.$store.state.portfolioProjects]
                if (this.currentCatId != -1){
                    projects = projects.filter(el =>{
                        
                    if (el.category == this.currentCatId){
                        return el
                    }
                })
                }
                
                return projects
            },
            projectCategories(){
                
                return [...this.$store.state.portfolioCategories].sort()
            },
        },
        data() {
            return {
                currentCatId: -1,
                projects: [
                    {
                        id: 1,
                        imageSrc: 'image-1.jpg',

                    },
                    {
                        id: 2,
                        imageSrc: 'image-1.jpg',

                    },
                    {
                        id: 3,
                        imageSrc: 'image-1.jpg',

                    },
                    {
                        id: 4,
                        imageSrc: 'image-1.jpg',

                    }
                ]
            }
        },
        components: {
            SectionIntro,
            Card,
            
        },
    }
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.cardd{
    min-height: 20rem;
}
.project-enter-active{
    animation: scaleIn 0.5s ease;
}
.project-leave-active{
    animation: scaleOut 0.5s ease;
    position: absolute;
}
.project-move{
    transition: all 0.5s ease;
}
@keyframes scaleOut {
    0%{
        opacity: 1;
        transform: scale(1);
    }
    100%{
        opacity: 0;
        transform: scale(0);
    }
}
@keyframes scaleIn {
    0%{
        opacity: 0;
        transform: scale(0.5);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
.main{
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.25rem;
    position: relative;
}

.info-wrapper{
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
}
.nav{
    width: 100%;
    background-color: white;
    border-radius: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
}
.nav-link{
    color: #020203;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem;
    text-transform: uppercase;
    font-weight: bold;
}
.nav-link:hover{
    color: #149ddd;
}
.nav .active{
    color: #149ddd
}
.main{
        margin-top: 1rem;
    }
@media (min-width: 640px) {
    .cardd{
        min-height: auto;
    }
    .main{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem
    }
}
@media (min-width: 768px) { 
    .info-wrapper{
        display: flex;
    }
    .main{
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (min-width: 1024px) { 
    
}
@media (min-width: 1280px) { 
   
}


</style>