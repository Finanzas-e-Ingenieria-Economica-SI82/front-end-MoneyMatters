<template>
  <div>
    <app-bar></app-bar>

    <v-container class="user-info">
      <v-row class="grid">
        <v-col>
          <div class="col2 md:col-6 lg:col-3" style="padding: 55px; width: 150vh;">
            <div class="register" flex flex-wrap justify-content-center gap-2>
              <img class="input-icon" src='../assets/mivivienda.png' alt="Icono de usuario" />
              <input type="text" v-model="name" :placeholder="users.name" :readonly="!editable" />
              <input type="text" v-model="lastname" :placeholder="users.lastname" :readonly="!editable" />
              <input type="text" v-model="username" :placeholder="users.username" :readonly="!editable" />
              <input type="password" v-model="password" :placeholder="users.password" :readonly="!editable" />
              <input type="text" v-model="dni" :placeholder="users.dni" :readonly="!editable" />
              <input type="text" v-model="phone" :placeholder="users.phone" :readonly="!editable" />
              <pv-button rounded style="margin-top: 0px; background: #46A2AE; border-style: none; width: 30%; justify-content: center; font-weight: bold;" v-on:click="toggleEditable">
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
//import axios from 'axios';
import AppBar from '../components/AppBar.vue';
import ApiService from '@/services/ApiService';

export default {
  components: {
    AppBar
  },
  data() {
    return {
      users: {},
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
  if (this.editable) {
    this.updateUserInfo(); // Invocar el método para actualizar los datos del usuario
  }
  this.editable = !this.editable;
  this.updating = false;
},
    getUserInfo() {
      ApiService.getUser()
    .then((currentUserData) => {
      if (currentUserData) {
        this.users = currentUserData;
        this.name = currentUserData.name || '';
        this.lastname = currentUserData.lastname || '';
        this.username = currentUserData.username || '';
        this.password = currentUserData.password || '';
        this.dni = currentUserData.dni || '';
        this.phone = currentUserData.phone || '';
        console.log(this.users);
      } else {
        console.log('No hay datos de usuario');
      }
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(this.users);
    },

    updateUserInfo() {
  const user = {
    id: this.users.id,
    name: this.name,
    lastname: this.lastname,
    username: this.username,
    password: this.password,
    dni: this.dni,
    phone: this.phone
  };

  ApiService.updateUser(user)
    .then(() => {
      this.editable = false;
      this.updating = false;
    })
    .catch((error) => {
      console.error(error);
    });
}

  }
};
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
    color: #494949;
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
    padding-top: 10%;
    padding-left: 100px;
  }

  </style>