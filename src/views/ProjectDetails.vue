<template>
        <div class="main-wrapper">
            <div class="page-title shadow-md">
                <h1>{{ getProject.title }}</h1>
                <div class="text-sm">
                    <router-link to="/">Home</router-link><span class="mx-3">/</span><span>{{ getProject.title }}</span>
                </div>
            </div>
            <div class="product-details-wrapper mt-5 p-3">
                <div class="slider-wrapper mr-4 rounded-t md:rounded-none ">
                    <div class="carousel-wrapper project-details-slider swiper-container">
                        <div class="swiper-wrapper align-items-center">
                        <div v-for="image in getProjectImages" :key="image?.url" class="swiper-slide">
                            <img :src="getImageSrc(image?.url)" alt="">
                        </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="product-details p-4 shadow-md rounded">
                    <h4 class="font-semibold border-b border-gray-300 pb-3">Project Information</h4>
                    <div class="mt-2">
                        <div class="info-group">
                            <span class="font-semibold">Category: </span><span>{{ getProjectCategory }}</span>
                        </div>
                        <div class="info-group">
                            <span class="font-semibold">Client: </span><span>{{ getProject.client }}</span>
                        </div>
                        <div v-if="getProject.date" class="info-group">
                            <span class="font-semibold">Project Date: </span><span>{{ getProject.date }}</span>
                        </div>
                        <div v-if="getProject.url" class="info-group">
                            <span class="font-semibold">Project URL: </span><span><a href="#">{{ getProject.url }}</a></span>
                        </div>
                        <div v-if="getProject.location" class="info-group">
                            <span class="font-semibold">Location: </span><span>{{ getProject.location }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-description mx-3 p-4 bg-white rounded shadow-md pb-5">
                    <h3 class="font-semibold">{{ getProject.desc_title }}</h3>
                    <p>{{ getProject.description }}</p>
            </div>
        </div>
</template>

<script>
import '@/assets/vendor/swiper/swiper-bundle.min.css' 
import Swiper from '@/assets/vendor/swiper/swiper-bundle.min.js'
    export default {
        methods: {
            getImageSrc(url) {
                return require(`@/assets/images/${url}`)
            }
        },
        mounted () {
              /**
             * Portfolio details slider
             */
            new Swiper('.project-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
            });
        },
        data() {
            return {

            }
        },
        computed: {
            getProject() {
                let project = null;
                for (let el of this.$store.state.portfolioProjects){
                    if (el.id == this.$route.params.id){
                        project = el
                    }
                }
                return project
            },
            getProjectCategory(){
                let category = null
                for (let el of this.$store.state.portfolioCategories){
                    if (el.id == this.getProject.category){
                        category = el.title
                    }
                }
                return category
            },
            getProjectImages(){
                let productImages = []
                for (let el of this.$store.state.portfolioProjects){
                    if (el.id == this.$route.params.id){
                        productImages = el.productImages
                    }
                }
                return productImages
            }
        },
    }
</script>

<style scoped>
.info-group{
    padding-bottom: 0.5rem;
}
.product-details{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
}
.main-wrapper{
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
}
.body{
    overflow: hidden !important;
}
.product-details-wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}
.page-title{
    padding: 1rem;
    background-color: rgb(248, 248, 248);
}
a{
    color: #149ddd !important;
    text-decoration: none;
    transition: all 0.3s ease;
}
a:hover{
    color: #37b3ed !important;
}
.project-details-slider{
    height: 100%;
    width: 100%;
}
.slider-wrapper{
    height: 20rem;
    overflow: hidden;
    width: 100%;
}
.swiper-slide{
    height: 100%;
    
}
.project-details-slider img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
@media (min-width: 640px) { 
 .project-details-slider{
        height: 25rem;
    }
}
@media (min-width: 768px) { 
     .slider-wrapper{
        width: 60%;
        height: 27rem;
    }
    .product-details-wrapper{
        display: flex;
        flex-direction: row;
        
    }
    .product-details{
        width: 40%;
    }
}
@media (min-width: 1024px) { 
    
}
@media (min-width: 1280px) { 
    
}
</style>