<template>
   <nav class="menu-bar">
        <div class="group">
          <img style="width:30px; height: 50px; margin: 15px; margin-left: 30px;" src="../assets/logo.png"/>
          <img style="width:180px; padding: 10px" src="../assets/letter.png"/>
        </div>
        
        <router-link to="/home">
          <div class="item">
          <p>
            Inmuebles
          </p>
          </div>
        </router-link>

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
</template>

<script>

    export default {
      name: 'AppBar',
      data(){
      }
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


</style>