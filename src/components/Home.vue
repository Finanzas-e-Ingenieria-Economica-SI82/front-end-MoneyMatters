<template>
  <div class="card text-center">
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
        <div class="item">
          <p>
            Setting
          </p>
        </div>
        <div class="group">
          <!---Cambiar que es lo que va a ir en este apartado-->
          <router-link to="/sign-up">
            <span class="material-symbols-outlined" style="color:white; margin-top: 20px; padding-right: 50px; justify-content: center; align-content: center;">
            logout
            </span>
          </router-link>
        </div>
      </nav>

    <h1> Home </h1>
    <router-link to="/home"></router-link>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-6">
          <router-link to="/convert_rate" style="text-decoration: none; color: #4F555A">
            <div class="card" style="height: 100%">
              <div class="card-body">
                <div class="col-md-4">
                  <img src="../assets/ahorro.jpg" class="card-img mw-100" alt="ahorro">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Conversión entre tipos de tasa de interés</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-6">
          <router-link to="" style="text-decoration: none; color: #4F555A">
          <div class="card">
            <div class="card-body">
              <div class="col-md-4">
                <img src="../assets/france.jpg" class="card-img" alt="francés">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Método Francés</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <router-link to="/conversionTime" style="text-decoration: none; color: #4F555A">
          <div class="card">
            <div class="card-body">
              <div class="col-md-4">
                <img src="http://bitly.ws/vwpN" class="card-img" alt="dinero">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Presente y valor futuro</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
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
  .card-img{
    height: 100px;
    width: 200px;
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
  
</style>