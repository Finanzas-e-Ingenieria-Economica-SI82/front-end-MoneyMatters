<template>

    <h1> Sign Up </h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter username" />
        <input type="password" v-model="password" placeholder="Enter password" />
        <button v-on:click="msg">Sign Up</button>
    </div>
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
    
    .register input{
        width: 200px;
        height: 40px;
        padding-left: 50px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid black;
    }
    
    .register button{
        width: 250px;
        height: 40px;
        background:  rgb(137, 0, 201);
        border: 1px solid rgb(137, 0, 201);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
    </style>