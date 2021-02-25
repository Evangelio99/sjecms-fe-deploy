<template>
  <!-- <div id="app">
    <router-view/>
  </div> -->
  <v-app id="inspire">

    <div v-if="!user">
      <router-view></router-view>
    </div>

      <!-- If using vue-router -->

    <div v-if="user&&is_admin==0">
      <navbar ref="navbar"></navbar>
      
      <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header>
     
      <v-main>
          <v-container>
            <router-view></router-view>
          </v-container>
      </v-main>

      <!-- <app-footer></app-footer> -->
    </div>

    <div v-if="user&&is_admin==1">
      <adminnav ref="adminnav"></adminnav>

      <app-header @toggle-drawer="$refs.adminnav.drawer = !$refs.adminnav.drawer"></app-header>

      <v-main>
          <v-container>
            <router-view></router-view>
          </v-container>
      </v-main>

      <!-- <app-footer></app-footer> -->
    </div>


    <!-- <v-footer app>

    </v-footer> -->
  </v-app>

</template>

<script>
import Navbar from './components/NavBar'
import AdminNav from './components/AdminNavbar'
import Header from './components/Header'
// import Footer from './components/Footer'
import Store from './Store'
export default {
  name: 'App',
  computed: {
    user () {
      return Store.user
    },
    is_admin() {
      return Store.is_admin
    }
  },
  created() {
    Store.user = localStorage.getItem('token');
  },
  components: {
    'navbar': Navbar,
    'adminnav': AdminNav,
    'app-header': Header,
    // 'app-footer': Footer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
@font-face {
  font-family: "montserrat";
  src: local("montserrat"),
   url("/fonts/montserrat/Montserrat-Light.otf") format("opentype");
}

@font-face {
  font-family: "montserrat-reg";
  src: local("montserrat"),
   url("/fonts/montserrat/Montserrat-Regular.otf") format("opentype");
}
</style>
