<template>
    <div id="hero" class="jumbotron">
        <Jumbotron />
    </div>
    <div class="main-body">
        <div id="about" data-name="about" class="about section">
            <About />
        </div>
        <div id="" data-name="facts" class="section facts">
            <Facts />
        </div>
        <div id="skills" data-name="skills" class="skills section">
            <Skills />
        </div>
        <div id="portfolio" data-name="portfolio" class="portfolio section">
            <Portfolio />
        </div>
        <div id="services" data-name="services" class="section services">
            <Services />
        </div>
        <div id="contact" data-name="contact" class="contact section">
            <Contact />
        </div>
        
    </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue'
import About from '@/components/About.vue'
import Facts from '@/components/Facts.vue'
import Skills from '@/components/Skills.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'
import Services from '@/components/Services.vue'
    export default {
        mounted () {

            let sectionPointer = () => {
                let sections = document.getElementsByClassName('section')
                let stack = ['home']
                //console.log(sections[0].getBoundingClientRect().top)
                for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++){
                    let el = sections[sectionIndex]
                    //console.log(sections[sectionIndex].getBoundingClientRect().top)
                    if (el.getBoundingClientRect().top <= 0 && !stack.includes(el.getAttribute('data-name'))){
                        stack.push(el.getAttribute('data-name'))
                    }
                    else{
                        stack.indexOf(el.getAttribute('data-name'));
                        stack.splice(1, stack.indexOf(el.getAttribute('data-name')));
                    }
                }
            this.$store.commit('setActiveSection', stack[stack.length - 1]);
            }
            let scrollAmination = () =>{
                let animatedElements = document.getElementsByClassName('animated');
                for(let i =0; i < animatedElements.length; i++){
                    const animatedElement = animatedElements[i];
                    if (animatedElement.getBoundingClientRect().top <= 600){
                        const animationClass = animatedElement.getAttribute('data-animation-class')
                        let animationDelay = animatedElement.getAttribute('data-animation-delay') && (window.innerWidth > 768) ? parseFloat(animatedElement.getAttribute('data-animation-delay')) : 0;
                        animationDelay = animationDelay * 1000
                        console.log(animationDelay)
                        setTimeout(() => {animatedElement.classList.add(animationClass)}, animationDelay);
                    }
                }
            }
            const onScrollEvent = () => {
                sectionPointer();
                scrollAmination();
            }
            document.addEventListener('scroll', onScrollEvent)
        },
        data() {
            return {
                
            }
        },
        components: {
            Jumbotron,
            About,
            Facts,
            Skills,
            Portfolio,
            Contact,
            Services,
        },
        methods: {
            
        },
        
    }
</script>

<style scoped>
.jumbotron{
    width: 100%;
    height: 100vh;
    
}
.skills{
    background-color: #f5f8fd;
}
.portfolio{
    background-color: #f5f8fd;
}
.main-body{
    min-height: 100vh;
    width: 100%;
    z-index: 10000;
    position: relative;
    background-color: white;
}
.section{
    min-height: 100vh;
    width: 100%;
    padding: 4rem 1rem;
    overflow-y: hidden;
}
.facts{
    min-height: auto;
}
.services{
    min-height: auto;
}
@media (min-width: 640px) { 
    .section{
        padding: 4rem 6rem;
    }
}
@media (min-width: 768px) { 
     .jumbotron{
        position: sticky;
        top: 0;
        z-index: 2;
     }
     
    .section{
        padding: 4rem 1rem;
    }
}
@media (min-width: 1024px) { 
    
}
@media (min-width: 1280px) { 
    
}
</style>