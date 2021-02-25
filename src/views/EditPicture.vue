<template>
<v-row 
    class="mt-9"
      align="center"
>
    <v-col
    cols="12"
    sm="8"
    md="4"
    >
      <v-card class="d-flex flex-column align-items-center text-center" outlined>
          <br>
        <v-list-item-content>
            <v-img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
        </v-list-item-content>

            <v-list-item-content>
                <v-list-item-title><h3 v-if="user">{{user.first_name}} {{user.last_name}}</h3></v-list-item-title>
                <v-list-item-subtitle><p v-if="user">{{user.address}}</p></v-list-item-subtitle>

            
            </v-list-item-content>
            <br>

            
            
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Store from '../Store'
import axios from 'axios'
  export default {
    name: 'NavBar',
    data() {
        return {
          user: null,
            drawer: true
        }
    },
      created () {
// POST request using fetch with set headers
        const headers = { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        axios.post("http://127.0.0.1:8000/api/details/", {}, { headers })
          .then(response => {
            this.user = response.data.success;
            console.log(response.data.success);
          });
      },
      methods: {
        handleClick(e){
          e.preventDefault()
          localStorage.removeItem('token');
          Store.user = localStorage.getItem('token');
          this.$router.push('/');
        },

        goToEdit(){
          this.$router.push('/editprofile'); 
        }

        },
      }
    
</script>

<style scoped>

</style>