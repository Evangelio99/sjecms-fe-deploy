<template>
  <v-navigation-drawer
      dark
      src="https://th.bing.com/th/id/OIP.8m61gWVYo8XWfK9yJPXt9AHaFj?w=218&h=180&c=7&o=5&dpr=1.25&pid=1.7"
      v-model="drawer" app>
      <v-list dense>

        <v-list-item two-line>
        <v-list-item-avatar v-if="!gender">
            <img src='/img/male.png'>
        </v-list-item-avatar>
         <v-list-item-avatar v-if="gender">
            <img src='/img/female.png'>
        </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title><h3 class="font" v-if="user">{{user.first_name}} {{user.last_name}}</h3></v-list-item-title>
            <v-list-item-subtitle class="font">Admin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

            <v-divider></v-divider>
          
          <v-list-item class="font" link exact :to="{ name: 'AdminHome' }">
              <v-list-item-action>
                  <v-icon>mdi-office-building-outline</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title>Establishments</v-list-item-title>
              </v-list-item-content>
          </v-list-item>

          <v-list-item class="font" link exact :to="{ name: 'AdminProfile' }">
              <v-list-item-action>
                  <v-icon>mdi-account-group</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title>Users</v-list-item-title>
              </v-list-item-content>
          </v-list-item>

          <!-- <v-list-item link exact :to="{ name: 'edit' }">
              <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title>Edit Profile</v-list-item-title>
              </v-list-item-content>
          </v-list-item> -->

          <!-- <v-list-item link exact :to="{ name: 'AboutUs' }">
              <v-list-item-action>
                  <v-icon>mdi-information</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title>About</v-list-item-title>
              </v-list-item-content>
          </v-list-item> -->

          <v-list-item class="font" @click="handleClick">
              <v-list-item-action>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Log Out</v-list-item-title>
              </v-list-item-content>
          </v-list-item>

      </v-list>
  </v-navigation-drawer>
</template>

<script>
import Store from '../Store'
import axios from 'axios'
  export default {
    name: 'NavBar',
    data() {
        return {
          user: null,
          gender: null,
            drawer: true
        }
    },
      created () {
// POST request using fetch with set headers
        const that = this
        const headers = { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        axios.post("http://127.0.0.1:8000/api/details/", {}, { headers })
          .then(response => {
            this.user = response.data.success
            this.gender = response.data.success.gender 
            if(that.gender == 'M'){
                that.gender = false
            }else{
              that.gender = true
            }
          });
      },
      methods: {
        handleClick(e){
          e.preventDefault()
          localStorage.removeItem('token');
          Store.user = localStorage.getItem('token');
          this.$router.push('/');
        }
      }
    }
    
</script>

<style scoped>
.font{
  font-family:Montserrat;
}
</style>