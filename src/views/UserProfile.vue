<template>
    <div>
      <app-bar></app-bar>
  
      <v-container class="user-info">
        <v-row class="grid">
          <v-col>
            <div class="col2 md:col-6 lg:col-3" style="padding: 40px; height: 100vh; width: 170vh;">
              <div class="register" flex flex-wrap justify-content-center gap-2>
                <input type="name" v-model="name" :placeholder="users.name" :readonly="!editable" />
                <img class="input-icon" src="" alt="Icon" />
                <input type="lastname" v-model="lastname" :placeholder="users.lastname" :readonly="!editable" />
                <input type="username" v-model="username" :placeholder="users.username" :readonly="!editable" />
                <input type="password" v-model="password" :placeholder="users.password" :readonly="!editable" />
                <input type="dni" v-model="dni" :placeholder="users.dni" :readonly="!editable" />
                <input type="phone" v-model="phone" :key="users.id" :placeholder="users.phone" :readonly="!editable" />
                <label>{{ users.lastname }}</label>
                <label>ssssss</label>
                <pv-button rounded style="margin-up: 0px; background: #46A2AE; border-style: none; width: 30%; justify-content: center; font-weight: bold;" v-on:click="toggleEditable">
                  <span v-if="!updating" class="material-symbols-outlined">edit</span>
                  <span v-else class="material-symbols-outlined">update</span>
                </pv-button>
                <p v-if="error" class="error">{{ error }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AppBar from '../components/AppBar.vue';
  import ApiService from '@/services/ApiService';
  export default {
    components: {
      AppBar
    },
    data() {
      return {
        users: [],
        editable: false,
        updating: false,
        error: ''
      };
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      toggleEditable() {
        this.editable = !this.editable;
        this.updating = !this.editable;
      },
      getuserapi(){
        ApiService.getUser().then((response)=>{
            this.users=response.data;
            console.log("users:",this.users);
        }).catch((error)=>{
            console.log(error);
        })
    },
      getUserInfo() {
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  if (userInfo) {
    this.users = userInfo;
    this.name = userInfo.name || '';
    this.lastname = userInfo.lastname || '';
    this.username = userInfo.username || '';
    this.password = userInfo.password || '';
    this.dni = userInfo.dni || '';
    this.phone = userInfo.phone || '';
  }
},
      updateUserInfo() {
        axios.patch(`http://localhost:3000/users/${this.users.id}`, {
          name: this.name,
          lastname: this.lastname,
          username: this.username,
          password: this.password,
          dni: this.dni,
          phone: this.phone
        })
          .then(() => {
            this.editable = false;
            this.updating = false;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
  </script>
  
  <style>
  /* Estilos para la sección de perfil del usuario */
  .col2 {
    box-shadow: 2px 3px 20px 6px rgba(0, 0, 0, 0.137);
    opacity: 5px;
    margin: 4%;
    margin-left: 9%;
    border-radius: 90px;
  }
  
  .user-profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .user-info {
    display: flex;
    max-width: 100vh;
    max-height: 100vh;
  }
  
  .grid input {
    width: 320px;
    height: 35px;
    padding-left: 50px;
    display: block;
    margin-bottom: 40px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: 0;
    border: 2px solid rgba(0, 0, 0, 0.288);
    border-radius: 10px;
  }
  
  .personal-info-heading {
    font-size: 60px;
    font-weight: bold;
    margin-top: 0;
    color: #333333; /* Cambia el color del texto según tus preferencias */
    text-align: center; /* Centra el texto horizontalmente */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .input-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .input-icon {
    position: absolute; 
    top: 64%;
    right: 200px;
    transform: translateY(-50%);
    width: 400px; 
    border-radius: 20%;
  }
  </style>