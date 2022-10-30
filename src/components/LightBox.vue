<template>
    <div v-if="showLightBox" class="wrapper" id='lightbox'>
        <div class="overlay"></div>
        <button @click="closeLightBox" class="close-btn btn">X</button>
        <button @click="moveRight" class="right-btn direction-btn btn"> <i class="bx bx-caret-right"></i></button>
        <button @click="moveLeft" class="left-btn direction-btn btn"> <i class="bx bx-caret-left"></i></button>
        <div id="image-wrapper" class="image-wrapper">
            <div class="inner-img-wrapper">
                <img :src="getImageSrc(getImage.imageSrc)" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        mounted () {
            
        },
        methods: {
            closeLightBox() {
                this.$store.commit('toggleLightBox')
            },
            getImageSrc(imgSrc){
                return require(`@/assets/images/portfolio/${imgSrc}`)
            },
            moveRight(){
                this.$store.state.lightBoxImageLinkList[this.$store.state.currentImgIndex]
                let next = 0;
                if (this.$store.state.currentImgIndex < this.$store.state.lightBoxImageLinkList.length - 1){
                    next = this.$store.state.currentImgIndex + 1                    
                }
                this.$store.commit('setLightBoxImages', {
                    LightBoxImages: this.$store.state.lightBoxImageLinkList,
                    currentImgIndex: next
                })
            },
            moveLeft(){
                this.$store.state.lightBoxImageLinkList[this.$store.state.currentImgIndex]
                let next = this.$store.state.lightBoxImageLinkList.length - 1;
                if (this.$store.state.currentImgIndex > 0){
                    next = this.$store.state.currentImgIndex - 1                    
                }
                this.$store.commit('setLightBoxImages', {
                    LightBoxImages: this.$store.state.lightBoxImageLinkList,
                    currentImgIndex: next
                })
            }
        },
        computed: {
            showLightBox() {
                return this.$store.state.showLightBox
            },
            lightBoxImages(){
                return this.$store.state.lightBoxImageLinkList
            },
            getImage(){
                return this.$store.state.lightBoxImageLinkList[this.$store.state.currentImgIndex]
            }
        },
    }
</script>

<style scoped>
#in{
    display: flex;
}
.slideRight{
    transform: translateX(-100%);
}
.inner-img-wrapper[data-active="false"]{
    display: none;
}
.inner-img-wrapper[data-active="true"]{
    display: block;
}
.image-wrapper{
    height: 60%;
    width: 100%;
    position: relative;
    overflow: auto;
    display: flex;
    z-index: 20;
}
.image-wrapper img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.inner-img-wrapper{
    min-width: 100%;
    height: 100%;
    overflow: hidden;
}
.wrapper{
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right-btn{
    right: 1rem;
}
.left-btn{
    left: 1rem;
}
.btn i{
    font-size: 3rem;
}
.overlay{
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.9;
    position: absolute;
    top: 0;
    right: 0;
}
.btn{
    position: absolute;
    color: white;
    transition: all 0.3s ease;
    background-color: rgb(17, 17, 17);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 50;
}

.btn:hover{
    background-color: rgb(63, 63, 63);
    color: white;
}
.close-btn{
    top: 1rem;
    height: 3rem;
    width: 3rem;
    right: 1rem;
    
}
.direction-btn{
    height: 4rem;
    width: 4rem;
    display: none;
}
@media (min-width: 640px) {
    .image-wrapper{
        height: 80%;
    }
}
@media (min-width: 768px) { 
    .direction-btn{
        display: block;
    }
    .image-wrapper{
        width: 90%;
        height: 95%;
    }
}
@media (min-width: 1280px) {
    .image-wrapper{
        width: 70%;
    }
}
</style>