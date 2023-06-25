<template>
  <app-bar></app-bar>
  <div class="filter">
    <label for="property-type">Tipo de propiedad:</label>
    <select id="property-type" v-model="selectedPropertyType">
      <option value="">Todos</option>
      <option value="Casa">Casa</option>
      <option value="Departamento">Departamento</option>
    </select>
  </div>
  <div class="home">
    <div class="card flex justify-content-center" style="margin-top: 50px;">
  <pv-toast/>
</div>
<div class="card-list md:col-4 lg:col-3" style="padding: 40px; margin-top: 40px; margin: 10px;">
  <card-property v-for="property in filteredProperties" :key="property.id" :property="property" @see-more="showPopup(property)" /></div>
    <popup v-if="showPopupFlag" :property="selectedProperty" @close-popup="closePopup" @goToCredit="showtable(selectedProperty)" />
  <FrenchMethod v-if="selectedProperty" :property="selectedProperty" />

  </div>

</template>

<script>
import { ref } from 'vue';
import AppBar from '../components/AppBar.vue';
import CardProperty from './CardProperty.vue';
import ApiService from '@/services/ApiService';
import Popup from './Popup.vue';
import FrenchMethod from './FrenchMethod.vue';
    export default {
    components: { AppBar, CardProperty, Popup, FrenchMethod },
      name: 'HomeS',
      mounted(){
          let user = localStorage.getItem('user-info');
          if(!user){
            this.$router.push('/sign-up')
          }
      },
      props: {
    property: Object,
  },
  computed: {
  filteredProperties() {
    if (this.selectedPropertyType === '') {
      return this.properties;
    } else {
      return this.properties.filter(property => property.type === this.selectedPropertyType);
    }
  },
},
      data(){
        return{
          selectedPropertyType: '',
          properties:[],
          errorMessage: '',
          selectType: {},

    types: ref([
      { type: 'Casa' },
      { type: 'Departamento' }
    ]),
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
    showtable(property) {
  this.$router.push({
    path: '/french_method',
    query: {
      propertyId: property.id,
      
    },
  });
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
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.filter {
  margin-top: 50px;
  text-align: center;
}

label {
  margin-right: 10px;
}

select {
  width: 200px;
  height: 50px;
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

select:hover,
select:focus {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

</style>