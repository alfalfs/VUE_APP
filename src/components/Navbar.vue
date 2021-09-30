<template>
<!-- <div class="main-nav">  -->
   <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Firebase Vue CRUD PWA</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Login</router-link>
          </li>       
        </ul>
        <!-- <div>
          <b-button v-b-modal.modal-center>Launch centered modal</b-button>

          <b-modal id="modal-center" centered title="BootstrapVue">
            <p class="my-4">Vertically centered modal!</p>
          </b-modal>
        </div> -->
      </div>
      
      <!-- <button class="mx-2" @click="$emit('open-login-modal')">Login</button> -->
    </nav>
<!-- </div> -->

  <!-- <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Users</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </nav> -->
</template>

<script>
// import LoginModal from "./components/LoginModal"

export default {
  name: 'main-nav',
  // components: {LoginModal}
}
</script>

<style>
  .main-nav {
    text-align: center;
    margin: 40px auto;
  }
  .main-nav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
  }
  a.router-link-active {
    border-bottom: 2px solid #00ce89;
    padding-bottom: 4px;
  }
</style> 