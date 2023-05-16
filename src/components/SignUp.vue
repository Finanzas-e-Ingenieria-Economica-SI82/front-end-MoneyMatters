<template>
    <v-container class="container">
        <v-row class="grid">
            <v-col>
                <div class="col1 md:col-6 lg:col-3" style="padding: 60px; height: 100vh; width: 60vh;">
                    <img style="width:50px" src="../assets/logo.png">
                    <img style="width:200px" src="../assets/letter.png">
                    <p class="text-about" style="text-align: center; margin-top: 40%; font-size: 35px; color: #FFFF; font-weight: bold;">
                        Welcome
                    </p>
                    <p class="text-about-left" style="text-align: center; font-size: 20px; color: #FFFF;">
                        To keep connected with us please login with your personal info
                    </p>
                    <router-link to="/login">
                        <pv-button label="Log In" rounded style="margin-top: 70px; background: #46A2AE; border-style: none; width: 30%;"/>
                    </router-link>
                </div>
            </v-col>
        </v-row>
        <v-row class="grid2">
            <v-col>
                <div class="col2 md:col-6 lg:col-3" style="padding: 60px; height:85vh ;width: 100vh;">
                    <h1 style="color: #46A2AE; font-weight: bold"> Create Your Account </h1>
                        <div class="register">
                            <input type="name" v-model="name" placeholder="Name"/>
                            <input type="lastname" v-model="name" placeholder="Lastname"/>
                            <input type="username" v-model="username" placeholder="Username"/>
                            <input type="password" v-model="password" placeholder="Password"/>
                            <input type="dni" v-model="dni" placeholder="DNI"/>
                            <input type="phone" v-model="dni" placeholder="Phone"/>
                            <pv-button rounded style="margin-top: 10px; background: #46A2AE; border-style: none; width: 30%; justify-content: center; font-weight: bold;" v-on:click="msg">Sign Up</pv-button>
                        </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <router-link to="/sign-up"></router-link>
</template>

<script>
import axios from "axios"
export default {
    name: 'SingUp',

    props: {
    // msg: String
    },

    data(){
    return{
        username:'',
        password:''
    }
    },

    methods:{
    async msg(){
        if( this.username.value!=null || this.password.value!=" " ){
            let result =await axios.post("http://localhost:3000/users",
        {username: this.username,
        password:this.password
        });
        console.warn(result);
        if(result.status==201){
            alert("Se registró correctamente.")
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'HomeS'})
        }
        }
        else alert("It's necesary someone username or password bitch")
    }
    }
}
</script>
    
<style>
    .container{
        display: flex;
        max-width: 100vh;
        max-height: 100vh;
    }
    .col1{
        background: #000000;
    }
    .col2{
        box-shadow: 2px 3px 20px 6px rgba(0, 0, 0, 0.137);
        opacity: 10px;
        margin: 8.5%;
        margin-left: 11%;
        border-radius: 50px;
    }
    .grid2 input{
        width: 320px;
        height: 40px;
        padding-left: 50px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid rgba(0, 0, 0, 0.288);
        border-radius: 10px;
    }
</style>