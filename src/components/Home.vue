<template>
  <div class="home">
    <div class="card-header">
      <nav class="menu-bar">
        <div class="group">
          <img style="width:30px; height: 50px; margin: 15px; margin-left: 30px;" src="../assets/logo.png"/>
          <img style="width:180px; padding: 10px" src="../assets/letter.png"/>
        </div>
        
        <div class="item">
          <p>
            Inmuebles
          </p>
        </div>

        <div class="item">
          <p>
            Crédito
          </p>
        </div>

        <router-link to="/convert_rate">
          <div class="item">
            <p>
                Setting
            </p>
          </div>
        </router-link>

        <div class="group">
          <router-link to="/sign-up">
            <span class="material-symbols-outlined" style="color:white; margin-top: 20px; padding-right: 50px; justify-content: center; align-content: center;">
            logout
            </span>
          </router-link>
        </div>
      </nav>

      <div class="card flex justify-content-center" style="margin-top: 50px;">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <pv-multiSelect style="width: 20%;" v-model="selectType" :class="{ 'p-invalid': errorMessage }" :options="types" optionLabel="name" placeholder="Select Type" :maxSelectedLabels="3" class="w-full md:w-20rem" aria-describedby="text-error" />
              <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" type="submit" label="Submit" />
        </form>
        <pv-toast/>
      </div>

      <div class="card-list md:col-6 lg:col-3" style="padding: 40px; margin-top: 40px; margin: 10px;">
        <pv-card style="width: 25em">
            <template #header>
                <img style="width: 20em" alt="home" src="../assets/image1.png" />
            </template>
            <template #title> DPTO 1201 </template>
            <template #subtitle>
              <div style="">
                <span class="material-symbols-outlined" style="justify-content: space-around;">bed</span>
                  3 Dormitorios
                <span class="material-symbols-outlined" style="justify-content: space-around;">design_services</span>
                  98,82 m2
                <span class="material-symbols-outlined">payments</span>
                  S/. 120,000
              </div>
            </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <pv-button rounded style="background: #46A2AE; border-style: none; width: 40%; justify-content: center; font-weight: bold;" icon="pi pi-check" label="See More" />
            </template>
        </pv-card>

        <pv-card style="width: 25em; margin-top: 13px;">
            <template #header>
                <img style="width: 20em; margin-top: 10px;" alt="home" src="../assets/image2.png" />
            </template>
            <template #title> DPTO 1201 </template>
            <template #subtitle>
              <span class="material-symbols-outlined">bed</span>
                2 Dormitorios
              <span class="material-symbols-outlined" style="justify-content: space-around;">design_services</span>
                88,82 m2
              <span class="material-symbols-outlined">payments</span>
                S/. 80,000
            </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <pv-button rounded style="background: #46A2AE; border-style: none; width: 40%; justify-content: center; font-weight: bold;" icon="pi pi-check" label="See More" />
            </template>
        </pv-card>

        <pv-card style="width: 25em">
            <template #header>
                <img style="width: 20em" alt="home" src="../assets/image3.png" />
            </template>
            <template #title> DPTO 1201 </template>
            <template #subtitle>
              <span class="material-symbols-outlined">bed</span>
                3 Dormitorios
              <span class="material-symbols-outlined" style="justify-content: space-around;">design_services</span>
                90,82 m2
              <span class="material-symbols-outlined">payments</span>
                S/. 100,000
            </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <pv-button rounded style="background: #46A2AE; border-style: none; width: 40%; justify-content: center; font-weight: bold;" icon="pi pi-check" label="See More" />
            </template>
        </pv-card>
      </div>
        <img src="../assets/mivivienda.png"/>
    </div>
  </div>
</template>
    
<script>
    export default {
      name: 'HomeS',
      
      props: {
       // msg: String
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
  .menu-bar {
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    inline-size: center;
  }

  .item {
    color: white;
    background-color: transparent;
    font-size: 18px;
    display: inline-block;
    padding: 5px;
  }

  .item:hover {
    background-color: rgba(150, 149, 153, 0.712);
    border-radius: 15px;
    pointer-events: none;
    transition: 0.5s;
  }
  
  .card-list{
    display: flex;
    justify-content: space-around;
  }

</style>