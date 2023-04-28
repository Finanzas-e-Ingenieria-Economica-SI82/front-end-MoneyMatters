<template>
    <div class="grid">
        <h1>Login</h1>
        <div class="login">
            <input type="text" v-model="username" id="username" name="username" placeholder="Enter username" />
            <input type="password" v-model="password" id="password" name="password" placeholder="Enter password" />    
            <router-link to="/home">
              <button v-on:click="login">Sign In</button>
            </router-link>
            <p v-if="error" class="error">{{ error }}</p>
        </div>

    </div>
        
</template>

<script>
import axios from 'axios';
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

      /*methods:{
        async login(){
            if( this.username.value!=null || this.password.value!=null){
                let result =await axios.get("http://localhost:3000/users?username=${this.username}&password=${this.password}",
                {username: this.username,
                 password:this.password
            });
            console.warn(result);
            //if(result.status==201){
            //    alert("Se logeo correctamente.")
            //    localStorage.setItem("user-info",JSON.stringify(result.data))
            //    this.$router.push({name:'HomeS'})
            //}
            }
            else alert("ERROR username or password")
        }
    }*/
      methods: {
        login(){
          axios.get('http://localhost:3000/users').then(response =>{
            const users=response.data.users;
            const user=users.find(user=>user.username == this.username && user.password == this.password);
            if(user){
              this.$router.push('/sign-up'); 
            } else {
              alert("Se logeo correctamente.")
              this.error = 'Username or password is incorrect';
            }
          }).catch(error =>{
            console.log(error);
          });
        }
      }
  }  
    
</script>

<style>
    .error {
      color: red;
    }
    .login input{
        width: 200px;
        height: 40px;
        padding-left: 50px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid black;
    }
    
    .login button{
        width: 250px;
        height: 40px;
        background:  rgb(137, 0, 201);
        border: 1px solid rgb(137, 0, 201);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
</style>