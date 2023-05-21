<template>
  <app-bar></app-bar>
  <div class="home">
    <div class="card flex justify-content-center" style="margin-top: 50px;">
  <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
      <pv-multiSelect style="width: 20%;" v-model="selectType" :class="{ 'p-invalid': errorMessage }" :options="types" optionLabel="type" placeholder="Select Type" :maxSelectedLabels="3" track-by="id" class="w-full md:w-20rem" aria-describedby="text-error" />
        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
      <pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" type="submit" label="Submit" />
  </form>
  <pv-toast/>
</div>
<div class="card-list md:col-6 lg:col-3" style="padding: 40px; margin-top: 40px; margin: 10px;">
<card-property v-for="property in properties" :key="property.id" :property="property" @see-more="showPopup(property)"/>
</div>
<popup v-if="showPopupFlag" :property="selectedProperty" @close-popup="closePopup" />
  </div>

</template>

<script>
import { ref } from 'vue';
import AppBar from '../components/AppBar.vue';
import CardProperty from './CardProperty.vue';
import ApiService from '@/services/ApiService';
import Popup from './Popup.vue';
    export default {
    components: { AppBar, CardProperty, Popup },
      name: 'HomeS',
      mounted(){
          let user = localStorage.getItem('user-info');
          if(!user){
            this.$router.push('/sign-up')
          }
      },
      props: {
       // msg: String
      },
      data(){
        return{
          properties:[],
          errorMessage: '',
          selectType,
          types,
          showPopupFlag: false,
          selectedProperty: null,
    }
      },
      methods: {
    onSubmit() {
      // Handle form submission
    },
    showPopup(property) {
      this.showPopupFlag = true;
      this.selectedProperty = property;
    },
    closePopup() {
      this.showPopupFlag = false;
      this.selectedProperty = null;
    },
  },
      created() {
		ApiService.getProperties()
    
			.then((response) => {
        this.properties = response.data;
				console.log("properties:", this.properties);
			})
			.catch((error) => {
				console.log(error);
			});
	},
    }
const selectType = ref();
const types = ref([
  {  
    type: 'Casa', 
  },
  {
    type: 'Departamento'
  }
]);
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>