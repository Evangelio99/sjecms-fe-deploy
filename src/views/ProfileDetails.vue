<template>
    <v-row 
    justify="end"
  >
    <v-col
    cols="12"
    sm="8"
    md="8"
    >
      <!-- <v-card class="elevation-12 col-lg-11 col-l-8 mx-auto" style="border-style: solid; border-color: teal"> -->
          <v-card class="col-lg-11 col-l-8 flex-column align-items-center" outlined>
              <br>
            <v-card-title class="display-1 py-0">
            Profile
            </v-card-title >

            <v-card-text class="mb-3">
                <v-row class="spacing">
                    <div class="col-md-4">
                      <h3 class="mb-0">First Name</h3>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      <p v-if="user">{{user.first_name}}</p>
                    </div>
                </v-row>
                <v-divider></v-divider>
                <v-row class="spacing">
                    <div class="col-md-4">
                      <h3 class="mb-0">Last Name</h3>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      <p v-if="user">{{user.last_name}}</p>
                    </div>
                </v-row>
                <v-divider></v-divider>
                
                <v-row class="spacing">
                    <div class="col-md-4">
                      <h3 class="mb-0">Gender</h3>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      <p v-if="user">{{user.last_name}}</p>
                    </div>
                </v-row>

                <v-divider></v-divider>
                <v-row class="spacing">
                    <div class="col-md-4">
                      <h3 class="mb-0">Email Address</h3>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      <p v-if="user">{{user.email}}</p>
                    </div>
                </v-row>
                <v-divider></v-divider>
                <v-row class="spacing">
                    <div class="col-md-4">
                      <h3 class="mb-0">Full Address</h3>
                    </div>
                    <div class="col-sm-8 text-secondary">
                      <p v-if="user">{{user.address}}</p>
                    </div>
                </v-row>
            </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Store from '../Store'
import axios from 'axios'
export default {
    data () {
      return {
        column: null,
        row: null,
        user: null,
      }
    },

    created () {
// POST request using fetch with set headers
        const headers = { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        axios.post("https://sjecmsbe.herokuapp.com/api/details/", {}, { headers })
          .then(response => {
            this.user = response.data.success;
            console.log(response.data.success);
          });
      },

    name: 'Register',
   
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
.spacing{
    margin-top: -4px;
}

.spacingradio{
    margin-top: -8px;
}

p{
    color: black;
}


</style>