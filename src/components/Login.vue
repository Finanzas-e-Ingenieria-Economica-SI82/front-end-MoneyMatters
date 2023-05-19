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
              <router-link to="/home">
                <pv-button rounded style="margin-top: 15px; background: #46A2AE; border-style: none; width: 30%; justify-content: center; font-weight: bold;" v-on:click="login">Log In</pv-button>
              </router-link>
            <p v-if="error" class="error">{{ error }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import { response } from 'express';

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
      
    },
  }  
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