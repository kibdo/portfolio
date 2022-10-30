<template>
    <div  class="wrapper">
        <div class="img-wrapper">
            <img :src="getImageSrc" alt="">
        </div>
        <div class="info">
            <a @click.prevent="showLightBox" class="btn" href="#"><div class="overlay"></div><i class="bx bx-plus"></i></a>
            <span class="divider"></span>
            <router-link :to="{name: 'ProjectDetails', params: {id: data.id}}" class="btn" href="#"><div class="overlay"></div><i class="bx bx-link"></i></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        methods: {            
            showLightBox() {
                let LightBoxImages = []
                let currentImgIndex;
                for (let i = 0; i < this.$store.state.portfolioProjects.length; i++){
                    let elem = this.$store.state.portfolioProjects[i]
                    let img = {}
                    img.imageSrc = elem.imageSrc
                    img.id = i
                    img.active = false                    
                    if (elem.id == this.data.id){
                        currentImgIndex = i
                        img.active = true
                    }
                    LightBoxImages.push(img)
                }
                this.$store.commit('setLightBoxImages', {
                    LightBoxImages: LightBoxImages,
                    currentImgIndex: currentImgIndex
                    })
                this.$store.commit('toggleLightBox', )
            }
        },
        computed: {
            getImageSrc() {
                return require(`@/assets/images/portfolio/${this.data.imageSrc}`) 
            },
            
        },
    }
</script>

<style scoped>

.wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative
}
.img-wrapper{
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    bottom: 0;
    transition: all 0.3s ease;
}
.wrapper:hover .img-wrapper{
    opacity: 0.8;
}
.img-wrapper img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.info{
    height: 2.7rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    opacity: 0;
    transition: all 0.3s ease;
    
}
.wrapper:hover .info{
    opacity: 1;
    animation: slideUp 0.3s ease;
}
@keyframes slideUp {
    0%{
        transform: translateY(100%);
    }
    100%{
        transform: translateY(0%);
    }
}
.overlay{
    height: 100%;
    width: 100%;
    background-color: #149ddd;
    position: absolute;
    top: 0;
    opacity: 0.7;
    transition: all 0.3s ease;
}
.btn{
    width: 50%;
    display: flex;
    position: relative;
    color: rgb(230, 230, 230);
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.7rem;
    border: 0px;
    transition: all 0.3s ease;
}
.btn:hover{
    color: rgb(230, 230, 230)

}
.btn:hover .overlay{
    background-color: #1691ca;
    
}
.btn i{
    position: relative;
}

.divider{
    height: 100%;
    width: 2px;
    background-color: #1991c9;
}
@media (min-width: 768px) {
    .wrapper{
        height: 15rem;
        overflow: hidden;
        position: relative
    }
}
@media (min-width: 640px) {
    .wrapper{
        height: 11rem;
        overflow: hidden;
        position: relative
    }
}
@media (min-width: 640px) {
    .wrapper{
        height: 13rem;
    }
}
@media (min-width: 1024px) {
   
}
@media (min-width: 1280px) { 
    .wrapper{
        height: 15rem;
    }
 }
</style>