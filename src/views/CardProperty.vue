<template>
    <router-link
		class="property-link"
        :to="{name:'', params: { id: property.id }}"
	>
    <div class="card-header">

  <pv-card style="width: 25em">
      <template #header>
          <img style="width: 20em" alt="home" :src="property.imageUrl"/>
      </template>
      <template #title>{{ property.name }} </template>
      <template #subtitle>
        <div style="">
          <span class="material-symbols-outlined" style="justify-content: space-around;">bed</span>
          {{ property.numDormitorios }} Dormitorios
          <span class="material-symbols-outlined" style="justify-content: space-around;">design_services</span>
          {{ property.dimension }}  m2
          <span class="material-symbols-outlined">payments</span>
            S/. {{ property.price }} 
        </div>
      </template>
      <template #content>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
              quas!
          </p>
      </template>
      <template #footer>
          <pv-button rounded style="background: #46A2AE; border-style: none; width: 40%; justify-content: center; font-weight: bold;" icon="pi pi-check" label="See More" @click="$emit('see-more')"  />
      </template>
  </pv-card>


</div>
  <!-- <img src="../assets/mivivienda.png"/> -->

    </router-link>
    <router-view :property="property" />
</template>
<script>

    export default {

        name: 'CardProperty',
        props:{
           property: Object,
        },
    data(){
    },

    methods:{

    },
    }

</script>
<style>
  
  .card-list{
    display: flex;
    justify-content: space-around;
  }
  .property-link{
    text-decoration: none;
  }
</style>