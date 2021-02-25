<template>
    <v-row 
    justify="center"
  >
    <v-col
    cols="12"
    sm="8"
    md="5"
    >
      <v-card class="elevation-12 col-lg-11 col-l-8 mx-auto" shaped>
        <v-card-title class="display-2 py-0" style="color:#36506b">
            Register
        </v-card-title >
        <p class="mb-auto">
          <v-card-subtitle v-text="'Welcome to Establishment Crowd Monitoring System!'">
          </v-card-subtitle> 
        </p>
            <v-card-text>
                <v-text-field
                  class="spacing"
                  color="#36506b"
                  v-model="first_name"
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="[rules.required]"
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
                  :rules="[rules.required]"
                ></v-text-field>

                <v-radio-group
                    class="spacingradio"
                    :rules="[rules.required]"
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
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  color="#36506b"
                  class="spacing"
                  v-model="address"
                  label="Full Address"
                  name="address"
                  prepend-icon="mdi-home"
                  type="text"
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  color="#36506b"
                  class="spacing"
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  hint="At least 8 characters"
                  :rules="[rules.required,rules.min]"
                ></v-text-field>

                <v-text-field
                  color="#36506b"
                  class="spacing"
                  v-model="c_password"
                  id="c_password"
                  label="Confirm Password"
                  name="c_password"
                  prepend-icon="mdi-lock"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  hint="At least 8 characters"
                  :rules="[rules.required,rules.min]"
                ></v-text-field>

                <v-card-actions>
              <div>
                  <input class="custom-control-input" type="checkbox" name="agree" id="agree">

                  <label class="custom-control-label" for="agree">
                    I agree to the Terms and Conditions
                  </label>
              </div>
            </v-card-actions>
            </v-card-text>
            
            <!-- Login -->
            <v-card-actions>
              <v-spacer />
                <v-btn 
                  @click="handleSubmit"
                  block 
                  color="#63C5DA"
                  class="rounded-pill white--text">
                  Register
                  </v-btn>
              <v-spacer />
            </v-card-actions>

            <v-dialog v-model="failure" persistent max-width="355px">

              <v-card>
                 <v-card-title>E-mail already registered. Please enter a different e-mail.</v-card-title>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                     <v-btn color="red darken-1" text @click="handleinvalid">okay</v-btn>
                 </v-card-actions>
             </v-card> 

         </v-dialog>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
export default {
    data () {
      return {
        

        column: null,
        row: null,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
        show1: false,
        
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        address: '',
        password: '',
        c_password: '',

        failure: false
        
      }
    },
    name: 'Register',

    methods: {
        handleSubmit(){
            const that = this
            const data = {
               first_name: this.first_name,
               last_name: this.last_name,
               gender: this.gender,
               email: this.email,
               address: this.address,
               password: this.password,
               c_password: this.c_password
            }
      
            axios.post('https://sjecmsbe.herokuapp.com/api/register', data)
                .then(
                    res => {
                        console.log(res)
                        confirm('Register successfully!!') && that.$router.push('/home');
                    }
                )
                .catch(
                    err => {
                        that.failure = true
                        console.log(err)
                    }
                )
        },

        handleinvalid(e){
          e.preventDefault()
          this.failure = false
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
</style>