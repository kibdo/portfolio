<template>
    <i @click="toggleNav" v-show="!showNav && !desktopNav" class="bi mobile-nav-toggle d-xl-none bi-list"></i>
    <i v-show="showNav && !desktopNav" @click="toggleNav" class="bi mobile-nav-toggle d-xl-none bi-x" style=""></i>
    <transition tag="div" class="nav" name="nav">
    <div class="nav" v-show="showNav">        
        <div  class="nav-wrapper">
            <div class="avatar-wrapper ">
                <img class="avatar" src="@/assets/images/avatar.png" alt="">
            </div>
            <div class="name"><h2>Atiku Abubakar</h2></div>
            <div class="socials-wrapper">
            <a href="#" class="social-btn twitter"><i class="bx bxl-twitter"></i></a>
            <a href="#" class="social-btn facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="social-btn instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="social-btn google-plus"><i class="bx bxl-skype"></i></a>
            <a href="#" class="social-btn linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div class="nav-links-wrapper">
                <ul>
                    <li class="nav-item"><a @click.prevent="scrollToTop" href="" :class="{active: getActiveSection == 'home' }" class="nav-link"><i class="nav-btn bx bx-home"></i> <span>Home</span></a></li>
                    <li class="nav-item"><a href="#about" :class="{active: getActiveSection == 'about' || getActiveSection == 'facts' }" class="nav-link"><i class="nav-btn bx bx-user"></i> <span>About</span></a></li>
                    <li class="nav-item"><a href="#skills" :class="{active: getActiveSection == 'skills' }" class="nav-link"><i class="bx nav-btn bx-file-blank"></i> <span>Skills</span></a></li>
                    <li class="nav-item"><a href="#portfolio" :class="{active: getActiveSection == 'portfolio' }" class="nav-link"><i class="bx nav-btn bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li class="nav-item"><a href="#services" :class="{active: getActiveSection == 'services' }" class="nav-link"><i class="bx nav-btn bx-server"></i> <span>Services</span></a></li>
                    <li class="nav-item"><a href="#contact" :class="{active: getActiveSection == 'contact' }" class="nav-link"><i class="bx nav-btn bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
            </div>
            
        </div>
    
        <div class="nav-credits">
            <span>Designed by Atiku</span>            
        </div>
    </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        computed: {
            showNav() {
                return this.$store.state.navActive
            },
            desktopNav(){
                return this.$store.state.desktopNav
            },
            getActiveSection(){
                return this.$store.state.activeSection
            },
            setActiveSectionLink(){
                
            }
        },
        methods: {
            toggleNav() {
                this.$store.commit('toggleNav')
                let body_el = document.getElementById('body')
                if (this.showNav == true){
                   body_el.classList.add('overflow-hidden')
                }else{
                    body_el.classList.remove('overflow-hidden')
                }
            },
            scrollToTop(){
                scrollTo(0, 0)
            }
        },
    }
</script>

<style scoped>
@keyframes slideIn{
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0%);
    }
}
.nav-enter-active{
    animation: slideIn 0.4s ease;
}
.nav-leave-active{
    animation: slideIn 0.4s ease;
    animation-direction: reverse;
}
.mobile-nav-toggle{
    z-index: 1000000000;
    background-color: #149ddd;
    color: white;
    position: fixed;
    top: 1rem;
    right: 1rem;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.mobile-nav-toggle:hover{
    opacity: 0.8;
}
.nav{
    background-color: #070c14;
    height: 100%;
    width: 19rem;
    left: 0;
    position: relative;
}
.nav-wrapper{
    
    
    
    display: flex;
    justify-content: start;
    padding: 1rem 1rem 0.5rem 2rem;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: hidden;
    
}
.avatar-wrapper{
    display: flex;
    justify-content: center;
}
.avatar{
    border: 0.5rem solid #212431;
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 15rem;
    background-color: #020203;

}
.socials-wrapper{
 display: flex;
 margin-top: 1rem;
 justify-content: center;
}
.social-btn{
    color: white;
    height: 2.2rem;
    width: 2.2rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 3rem;
    background-color: #212431;
    transition: all 0.3s ease;
    margin-right: .7rem;
}
.social-btn:hover{
    background-color: #149ddd;
}
.name{
    color: white;
    margin-top: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.name h2{
    font-weight: bold;
    word-spacing: .2rem;
    text-align: center;
    margin: 0px;
    font-size: 1.5rem;
}
.nav-links-wrapper{
    display: flex;
    justify-content: start;
    margin-top: 1.5rem;
}
.nav-links-wrapper ul{
 width: 100%;
 height: 100%;
 padding: 0px;
 margin: 0px;
}
.nav-link{
    padding: .5rem 0px;
    margin: .5rem 0px;
    color: #a8a9b4;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    transition: all 0.3s ease;

}
.nav-link:hover .nav-btn{
    color: #149ddd;
}
.nav-link:hover span{
    color: white;
}
.nav-btn{
    font-size: 1.5rem;
    padding-right: .5rem;
}
.nav-item{
    display: flex;
    transition: all 0.5s ease;
}
.nav-item .active span{
    color: white;
}
.nav-item .active .nav-btn{
    color: #149ddd;
}
.nav-credits{
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;
    color: white;
}

@media (min-width: 640px) { 

}
@media (min-width: 768px) { 
     
}
@media (min-width: 1024px) { 
    
}
@media (min-width: 1280px) { 
    
}
</style>