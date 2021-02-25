<template>
      <v-card class="d-flex flex-column align-items-center text-center" outlined>
          <br><br><br><br><br>
        <v-list-item-content v-if="!gender">
            <v-img src='/img/male.png' alt="Admin" class="rounded-circle" width="150"/>
        </v-list-item-content>
        <v-list-item-content v-if="gender">
            <v-img src='/img/female.png' alt="Admin" class="rounded-circle" width="150"/>
        </v-list-item-content>        
        
            <v-list-item-content>
                <v-list-item-title><h3 class="font" v-if="user">{{user.first_name}} {{user.last_name}}</h3></v-list-item-title>
                <v-list-item-subtitle><p class="font" v-if="user">{{user.address}}</p></v-list-item-subtitle>

              

            <br>
            </v-list-item-content>

            <br><br><br><br><br><br><br>
            
        </v-card>

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
        const that = this
// POST request using fetch with set headers
        const headers = { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        axios.post("https://sjecmsbe.herokuapp.com/api/details/", {}, { headers })
          .then(response => {
            this.user = response.data.success;
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
        },

        goToEdit(){
          this.$router.push('/editprofile'); 
        }

        },
      }
    
</script>

<style scoped>
.font{
  font-family: Montserrat-reg;
}
</style>