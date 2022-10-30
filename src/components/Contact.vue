<template>
    <div>
        <SectionIntro heading="Contact" description="See my contact details below"/>
        <div class="info-wrapper">
            <div data-animation-class="fadeIn" class="info-card animated">
                <div class="data-card">
                    <i class="bi bi-geo-alt"></i>
                    <div>
                        <h4>Location:</h4>
                        <p>No.15 Alley Crescent, Mando GRA, Kaduna</p>
                    </div>
                </div>
                <div class="data-card">
                    <i class="bi bi-geo-alt"></i>
                    <div>
                        <h4>Email:</h4>
                        <p>abuakar21@gmail.com</p>
                    </div>
                </div>
                <div class="data-card">
                    <i class="bi bi-geo-alt"></i>
                    <div>
                        <h4>Call:</h4>
                        <p>08147751998</p>
                    </div>
                </div>
                <iframe class="iframe" src="" frameborder="0"></iframe>
            </div>
            <div data-animation-class="fadeIn" class="animated form-card">
                <form class="" action="">
                    <div class="top-form-group">
                        <div id="name" class="form-group">
                        <span>Name</span>
                        <input type="text" />
                    </div>
                    <div id="email" class="form-group">
                        <span>Email</span>
                        <input type="text" />
                    </div>
                    </div>
                    <div class="form-group">
                        <span>Subject</span>
                        <input type="text" />
                    </div>
                    <div class="text-group">
                        <span>Message</span>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="btn-group">
                        <button class="submit-btn">send message</button>
                    </div>
                </form>
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
    }
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.info-wrapper{
    width: 100%;
    margin-top: 2rem;
}
.info-card{
    padding: 2rem;
    background-color: white;
    box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
    
}
.data-card{
    display: flex;
    margin-bottom: 2rem;
}
.data-card i{
    height: 3rem;
    width: 3rem;
    font-size: 1.5rem;
    background-color: #dff3fc;
    color: #149ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    margin-right: 1rem;
}
.data-card h4{
    font-size: 1.6rem;
    font-weight: bold;
}
.data-card p{
    color: #173b6c;
}
.iframe{
    border: 1px solid #bdbdbd;
    width: 100%;
    height: 20rem;
}
.form-card{
    box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
    padding: 2rem;
    margin-top: 3rem;
}
.form-group{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}
.form-group span{
    color: #173b6c;

}
.form-group input{
    height: 3rem;
    border: 1px solid #ced4da;
    margin-top: 0.3rem;
}
.text-group{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}
.text-group textarea{
    height: 10rem;
    border: 1px solid #ced4da;
    margin-top: 0.3rem;
}
.btn-group{
    width: 100%;
    display: flex;
    justify-content: center;
}
.btn-group button{
    padding: 1px;
    background-color: #149ddd;
    border: 0px;
    padding: 0.7rem 1.4rem;
    border-radius: 0.3rem;
    color: white;
    text-transform: capitalize;
    transition: all 0.3s ease;
}
.btn-group button:hover{
    opacity: 0.8;
}
input, textarea{
    padding: 1rem
}
input:focus, textarea:focus{
    outline-color: #dff3fc;
}
@media (min-width: 640px) {
    
}
@media (min-width: 768px) { 
    .top-form-group{
        display: flex;
    }
    .top-form-group #name{
        margin-right: 1rem;
    }
}
@media (min-width: 1024px) { 
    
   .top-form-group{
        flex-direction: row;
    }
    .top-form-group #name{
        margin-right: 1rem;
    }
   
}
@media (min-width: 1280px) {
    .info-wrapper{
        display: flex;
    }
    .top-form-group{
        flex-direction: row;
    }
    .top-form-group #name{
        margin-right: 1rem;
    }
    .form-card{
        margin: 0rem;
        width: 60%;
    }
    .info-card{
        width: 40%;
        margin-right: 2rem;
    }
}


</style>