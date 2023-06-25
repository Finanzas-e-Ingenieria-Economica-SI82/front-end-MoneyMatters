<template>
  <nav class="menu-bar">
    <div class="group">
      <a>
        <img style="width:30px; height: 50px; margin: 15px; margin-left: 30px;" src="../assets/logo.png"/>
        <img style="width:180px; padding: 10px" src="../assets/letter.png"/>
      </a>
      <span class="btn-menu">
        <span class="hidden material-symbols-outlined">
          menu
        </span>
      </span>
    </div>
    <div class="list-container">
      <ul class="lists">
        <router-link to="/home">
          <li>
            <a>
              <div class="item">
                <p>
                  Inmuebles
                </p>
              </div>
            </a>
          </li>
        </router-link>
        <router-link to="/french_method">
          <li>
            <a>
              <div class="item">
                <p>
                  Crédito
                </p>
              </div>
            </a>
          </li>
        </router-link>
        <router-link to="/convert_rate">
          <li>
            <a>
              <div class="item">
                <p>
                  Tasas
                </p>
              </div>
            </a>
          </li>
        </router-link>
        <div class="person-icon" @click="toggleDropdown">
          <span class="material-symbols-outlined">settings</span>
      <div class="dropdown" v-if="showDropdown">
        <router-link to="/UserProfile">
          <li>
            <a>
              <div class="item">
                <p>
                  <span class="material-symbols-outlined">person</span>
                </p>
              </div>
            </a>
          </li>
        </router-link>
        <router-link to="/sign-up">
          <li>
            <a>
              <div class="item">
                <p>
              <span class="material-symbols-outlined">logout</span>
            </p>
              </div>
            </a>
          </li>
        </router-link>
    </div>
    </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .menu-bar {
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
  }

  .menu-bar .list-container {
    margin-right: 20px;
  }

  .menu-bar .list-container ul {
    display: flex;
  }

  .menu-bar .list-container ul li {
    list-style: none;
  }

  .menu-bar .list-container ul li a {
    text-decoration: none;
    margin: 0px 10px;
    padding: 8px;
    color: #000000;
    border-radius: 24px;
    transition: 0.3s;
    font-size: 16px;
  }

  .menu-bar .list-container ul li a:hover,
  .menu-bar .list-container ul li a.active {
    background: #46A2AE;
    color: #000000;
  }

  .btn-menu > .hidden {
    display: none;
  }

  .item {
    color: rgb(255, 255, 255);
    background-color: transparent;
    font-size: 18px;
    display: inline-block;
    padding: 5px;
  }

  @media only screen and (max-width: 900px) {
    .btn-menu > .hidden {
      display: block;
      position: absolute;
      right: 30px;
      top: 20px;
      font-size: 28px;
      color: #ffff;
      transition: 0.5s;
      cursor: pointer;
    }

    .menu-bar .list-container {
      position: fixed;
      top: 60px;
      left: -100%;
      background: #ffffff;
      width: 100%;
      height: calc(100vh - 60px);
    }

    .menu-bar .list-container .lists {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-top: 4px solid #46A2AE;
    }

    .menu-bar .list-container ul li {
      width: 90%;
      border-bottom: 2px solid #ffffff;
      display: flex;
      justify-content: center;
    }

    .menu-bar .list-container ul li a {
      font-size: 20px;
      text-align: center;
      padding: 12px 0px;
    }

    .menu-bar .list-container ul li a.active {
      background: none;
      color: #46A2AE;
    }

    .menu-bar .list-container ul li a:hover {
      background: none;
      color: #46A2AE;
    }
  }

  .person-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    margin-left: 40px;
    margin-right: 80px;
    color: #ffffff;
  }

  .dropdown {
    position: absolute;
    top: 90px;
    right: 40px;
    background: black;
    width: 120px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    z-index: 999;
    text-align: left;
    padding-right: 60px;
  }

  .dropdown a  {
    color: #ffffff;
    text-decoration: none;
    padding: 4px;
    transition: 0.3s;
    font-size: 12px;
    text-align: center;
  }
  .dropdown p {
    color: #ffffff;
    text-decoration: none;
    padding: 4px;
    transition: 0.3s;
    font-size: 12px;
    text-align: center;
  }
@media screen {
  
}
.person-icon:hover,
.dropdown-link:hover {
  background: #46A2AE;
  color: #ffffff;
}

 




  .menu-bar .list-container ul li:last-child {
    margin-left: 60px;
  }
  
</style>
