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
            Edit Profile
            </v-card-title >

            <v-card-text class="mb-3">
                <v-text-field
                  class="spacing"
                  color="#36506b"
                  v-model="first_name"
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  prepend-icon="mdi-account"
                  type="text"
                ></v-text-field>

                <v-text-field
                  class="spacing"
                  color="#36506b"
                  v-model="last_name"
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  prepend-icon="mdi-account"
                  type="text"
                ></v-text-field>

                <v-radio-group
                    class="spacingradio"
                    
                    v-model="gender"
                    prepend-icon="mdi-gender-male-female"
                    
                    gender
                    >
                    <v-radio
                        color="blue"
                        label="Male"
                        value="M"
                    ></v-radio>
                    <v-radio
                        color="pink"
                        label="Female"
                        value="F"
                    ></v-radio>
                </v-radio-group>

                <v-text-field
                  color="#36506b"
                  class="spacing"
                  v-model="email"
                  label="Email Address"
                  name="login"
                  prepend-icon="mdi-email"
                  type="text"
                ></v-text-field>

                <v-text-field
                  color="#36506b"
                  class="spacing"
                  v-model="address"
                  label="Full Address"
                  name="address"
                  prepend-icon="mdi-home"
                  type="text"
                ></v-text-field>

                <v-text-field
                  color="#36506b"
                  class="spacing"
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>

                <v-text-field
                  color="#36506b"
                  class="spacing"
                  v-model="c_password"
                  id="c_password"
                  label="Confirm Password"
                  name="c_password"
                  prepend-icon="mdi-lock"
                  type="c_password"
                ></v-text-field>

                
                <v-list-item-title>
                <v-btn
                class="editbtn"
                outlined
                color="#63C5DA"
                medium
                width="150px"
                @click="handleClick"

                >
                Save Changes
                </v-btn>
                </v-list-item-title>
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

        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        address: '',
        password: '',
        c_password: '',
        
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

    name: 'Register',
   
   methods: {
        handleClick(e){
          e.preventDefault()
          localStorage.removeItem('token');
          Store.user = localStorage.getItem('token');
          this.$router.push('/');
        },

        goToProfile(){
          this.$router.push('/profile'); 
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