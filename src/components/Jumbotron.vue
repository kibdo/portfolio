<template>
    <div class="wrapper">
        <img class="cover-photo" src="@/assets/images/atiku.jpg" alt="">
        <div class="overlay"></div>
        <transition name="title" appear>
            <div class="text-wrapper">
                <h2 class="name">Hello world, <br /> I'm Atiku Abubakar</h2>
                <div>
                    <p class="typing-text-wrapper"><span class="typed border-blue-600" data-typed-items="An Architect, A Software Developer, A blogger"></span></p>
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
import Typed from '@/assets/vendor/typed.js/typed.min.js'

    export default {
        components: {
        },
        mounted () {
            /**
             * Easy selector helper function
             */
            const select = (el, all = false) => {
                el = el.trim()
                if (all) {
                return [...document.querySelectorAll(el)]
                } else {
                return document.querySelector(el)
                }
            }

            /**
             * Hero type effect
             */
            const typed = select('.typed')
            if (typed) {
                let typed_strings = typed.getAttribute('data-typed-items')
                typed_strings = typed_strings.split(',')
                new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
                });
            }
        },
    }
</script>

<style scoped>
.typed{
    border-bottom: 0.15rem solid #149ddd;
}
.title-enter-from{
    opacity: 0;
}
.title-enter-active{
    transition: opacity 1.5s ease;
    transition-delay: 0.7s;
}
.title-enter-to{
    opacity: 1;
}
.overlay{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.7);
}
.wrapper{
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cover-photo{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative
}
.text-wrapper{
    position: absolute;
    left: 15%;
}
.name{
    margin: 0rem;
    padding: 0rem;
    font-weight: bold;
    font-size: 1.7rem;
}
.text-wrapper{
    text-transform: capitalize;
    
    color: white;
}
.text-wrapper p{
    font-size: 1.7rem;
    margin-top: .2rem;
}
.typing-text-wrapper{
    display: flex;
}
.typing-text-wrapper span{
    margin-left: 0.5rem
}
@media (min-width: 640px) { 
    .text-wrapper{
        left: 20%;
    }
    .name{
        font-size: 3rem;
    }
}
@media (min-width: 768px) { 
     .name{
        font-size: 4rem;
    }
}
@media (min-width: 1024px) {
    
}
@media (min-width: 1280px) { 
}
</style>