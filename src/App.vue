<template>
  <div :class="{mainFlex: desktopNav}" class="main">
    <div :class="{FixedNavWrapper: !desktopNav, stickyNavWrapper: desktopNav}" class="navWrapper">
      <NavBar />
    </div>
    <div class="router-main">
      <router-view/>
    </div>
    <div v-if="showLightBox" class="lightbox-wrapper">
        <LightBox />
    </div>
  </div>

</template>

<script> 
import NavBar from '@/components/NavBar.vue'
import LightBox from '@/components/LightBox.vue'
  export default {
    data() {
      return {
      }
    },
    computed: {
      showLightBox() {
        return this.$store.state.showLightBox 
      },
      desktopNav(){
        return this.$store.state.desktopNav
      }
    },
    components: {
      NavBar,
      LightBox
    },
    methods: {
      navVisible() {
        const windowWidth = window.innerWidth
        let navActive = false
        let desktopNav = false
        if (windowWidth > 1023){
          navActive = true
          desktopNav = true
        }
        this.$store.commit('setNavValue', {navActive, desktopNav})
      }
    },
    beforeMount () {
      const windowWidth = window.innerWidth
      let navActive = windowWidth > 1023 ? true : false
      let desktopNav = windowWidth > 1023 ? true : false

      this.$store.commit('setNavValue', {navActive, desktopNav})
    },
    mounted () {
      
      window.addEventListener('resize', this.navVisible)
    },
  }
</script>

<style>

.animated{
  opacity: 0;
  transition: all 0.8s ease;
}
.slideInFromBottom{
    opacity: 1;
    animation: slideInFromBottom 1s ease-out;
}
.slideInFromRight{
    opacity: 1;
    animation: slideInFromRight 1s ease-out;
}
.slideInFromLeft{
    opacity: 1;
    animation: slideInFromLeft 1s ease-out;
}
.fadeIn{
  opacity: 1;
}

@keyframes slideInFromLeft {
    0%{
        left: -10rem;
        
    }
    100%{
        left: 0rem;
    }
}
@keyframes slideInFromRight {
    0%{
        right: -10rem;
        
    }
    100%{
        right: 0rem;
        
    }
}
@keyframes slideInFromBottom {
    0%{
        transform: translateY(7rem);
    }
    100%{
        transform: translateY(0rem);
    }
}

*{
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  margin: 0px;
  padding:0px;
}
.lightbox-wrapper{
    display: flex;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 10000000000;
}
.mainFlex{
  display: flex;
}
.router-main{
  overflow-x: hidden;
  width: 100%;
}
.main{
  background-color: #fdfdfd;
  max-width: 100%;
}
.FixedNavWrapper{
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    z-index: 1000000000;
}
.stickyNavWrapper{
    position: sticky;
    top: 0;
    height: 100vh;
    margin: 0px;
    z-index: 1000000000;
}
.router-link-exact-active {
  color: white;

}
.router-link-active{
  color: white !important;
}

</style>