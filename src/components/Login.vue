<template>
  <v-container class="login">
    <v-row class="grid3">
      <v-col>
        <div class="col3 md:col-6 lg:col-3" >
          <img style="width: 75vh; height: 99.5vh" src="../assets/loginban.png">
        </div>
      </v-col>
    </v-row>
    <v-row class="grid4">
      <v-col>
        <div class="col4 md:col-6 lg:col-3" style="padding: 170px; height:90vh; width:85vh; background: #000000;">
            <img style="width:50px" src="../assets/logo.png">
            <img style="width:200px; padding: 10px" src="../assets/letter.png">
            <div style="margin-top: 50px;">
              <input type="text" v-model="username" id="username" name="username" placeholder="Username" />
              <input type="password" v-model="password" id="password" name="password" placeholder="Password" />    
            </div>
            <p v-if="error" class="error">{{ error }}</p>
                <pv-button rounded style="margin-top: 20px; background: #46A2AE; border-style: none; width: 40%; justify-content: center; font-weight: bold;" v-on:click="login">Log In</pv-button>
            <div style="padding: auto;">
              <router-link to="/sign-up">
                <pv-button rounded style="margin-top: 20px; background: #46A2AE; border-style: none; width: 40%; justify-content: center; font-weight: bold;">Sing Up</pv-button>
              </router-link>
            </div>
        </div>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import { response } from 'express';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
//import axios from 'axios';
    export default {
      name: 'LogiN',
    
      props: {
       // msg: String
      }, 

      data(){
        return{
          username: '',
          password: '',
          error: ''
        }
      },
 
      methods:{
        async login() {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", this.username), where("password", "==", this.password));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        const userData = querySnapshot.docs[0].data();
        console.log("Usuario logueado:", userData);
        this.$router.push({
  path: "/home",
  params: { userData: userData }
});
        return userData;
      } else {
        this.error = "Usuario o contraseña incorrectos";
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }
    
  }  }
</script>

<style>
    .error {
      color: red;
    }
    .login{
        display: flex;
        max-width: 100vh;
        max-height: 100vh;
    }
    .grid4 input{
        width: 320px;
        height: 40px;
        padding-left: 50px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid rgb(255, 255, 255);
        border-radius: 10px;
    }
    .col4{
        box-shadow: 2px 3px 20px 6px rgba(1, 0, 0, 0.411);
        opacity: 10px;
        margin: 6%;
        margin-left: 70px;
        border-radius: 50px;
    }
</style>