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
        <v-card-title class="display-2 py-0">
            Contact Tracing
        </v-card-title >
        <p class="mb-auto">
          <v-card-subtitle v-text="'Welcome to Establishment Crowd Monitoring System!'">
          </v-card-subtitle> 
        </p>
            <v-card-text>
                <v-text-field
                  class="spacing"
                  v-model="first_name"
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  prepend-icon="mdi-account"
                  type="text"
                  value=first_name
                ></v-text-field>

                <v-text-field
                  class="spacing"
                  v-model="last_name"
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  prepend-icon="mdi-account"
                  type="text"
                  value=last_name
                ></v-text-field>

                <v-radio-group
                    class="spacingradio"
                    v-model="gender"
                    prepend-icon="mdi-gender-male-female"
                    value=gender
                    row
                    >
                    <v-radio
                        label="Male"
                        value="M"
                    ></v-radio>
                    <v-radio
                        label="Female"
                        value="F"
                    ></v-radio>
                </v-radio-group>

                <v-text-field
                  class="spacing"
                  v-model="email"
                  label="Email Address"
                  name="login"
                  prepend-icon="mdi-email"
                  type="text"
                  value=email
                ></v-text-field>

                <v-text-field
                  class="spacing"
                  v-model="address"
                  label="Full Address"
                  name="address"
                  prepend-icon="mdi-home"
                  type="text"
                  value=address
                ></v-text-field>

                <v-text-field
                  class="spacing"
                  v-model="bodyTemp"
                  label="Body Temperature"
                  name="bodyTemp"
                  prepend-icon="mdi-temperature-celsius"
                  type="text"
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

            <v-card-actions>
              <v-spacer />
                <v-btn 
                  @click="handleSubmit"
                  block 
                  color="#63C5DA"
                  class="rounded-pill white--text">
                  Submit
                  </v-btn>
              <v-spacer />
            </v-card-actions>

            <!-- Login -->
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">

                <v-card-actions>
                  <v-btn
                    v-if="!user"
                    v-bind="attrs"
                    v-on="on"
                    block 
                    dark
                    color="#63C5DA"
                    class="rounded-pill white--text">
                    Login
                  </v-btn>
                </v-card-actions>

              </template>

              <v-card>
                <v-card-title>
                  <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          class="spacing"
                          v-model="email"
                          label="Email Address"
                          name="email"
                          prepend-icon="mdi-email"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          class="spacing"
                          v-model="password"
                          label="Password"
                          name="pass"
                          prepend-icon="mdi-lock"
                          type="password"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          class="spacing"
                          v-model="bodyTemp"
                          label="Body Temperature"
                          name="bodyTemp"
                          prepend-icon="mdi-temperature-celsius"
                          type="text"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" text @click="handleSubmit2" >Submit</v-btn>

                  <!-- Submit successfully -->

                  <v-dialog v-model="successfully" persistent max-width="300px">

                    <v-card> 
                      <v-card-title>Submit successfully!</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="handleSubmit3">okay</v-btn>
                      </v-card-actions>
                    </v-card>

                  </v-dialog>

                  <!-- Invalid Message -->

                  <v-dialog v-model="failure" persistent max-width="350px">

                   <v-card>
                     <v-card-title>Incorrect username or password.</v-card-title>
                     <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn color="red darken-1" text @click="handleinvalid">okay</v-btn>
                     </v-card-actions>
                    </v-card> 

                   </v-dialog>

                </v-card-actions>

              </v-card>
            </v-dialog>


      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import Store from '../Store';
export default {
    name: 'SurveyForm',
    data(){
      return {
          user: Store.user,
          first_name: "",
          last_name: "",
          gender: "",
          email : "",
          address: "",
          bodyTemp: "",
          password:"",
          is_inside: 1,
          dialog: false,
          successfully: false,
          failure: false
      }
    },

    computed: {
      estID(){
        return this.$route.params.id
      },
    },

    created() {
      if(localStorage.getItem('token') != null) {
        this.getDetails()
      }
    },

    methods : {
    post ({model, body, objectFunction, errorFunction, headers}) {
      axios.post(`https://sjecmsbe.herokuapp.com/api/${model}`, body, headers).then(objectFunction).catch(errorFunction)
    },

    handleSubmit(e){
      e.preventDefault()
          confirm('Submit successfully!!') && this.submitform()
    },

    handleSubmit2(e){
      e.preventDefault()
      const that = this

        this.post({
          model: 'logindetails',
          body: { 
            email: this.email,
            password: this.password
          },
          objectFunction: (response) => {
              if(response.data){
                this.first_name = response.data.success.first_name
                this.last_name = response.data.success.last_name
                this.gender = response.data.success.gender
                this.email = response.data.success.email
                this.address = response.data.success.address
                that.successfully = true
                console.log(response)
              } 
          },
          errorFunction: function (error) {
            that.failure = true
            console.error(error.response)
            console.log(that.failure)
          },
          headers: {}
        })
    },

    handleSubmit3(e){
      e.preventDefault()
        this.submitform()
        this.successfully = false
        this.$router.push('/');
    },

    handleinvalid(e){
       e.preventDefault()
        this.failure = false
    },

    getDetails() {
      const headers = { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      };

      axios.post("https://sjecmsbe.herokuapp.com/api/details/", {}, { headers })
      .then(response => {
        this.first_name = response.data.success.first_name;
        this.last_name = response.data.success.last_name;
        this.gender = response.data.success.gender;
        this.email = response.data.success.email;
        this.address = response.data.success.address;
      });
    },

    submitform() {
      const that = this
      axios.post('https://sjecmsbe.herokuapp.com/api/userforms', {
        estID: this.estID,
        first_name: this.first_name,
        last_name: this.last_name,
        gender: this.gender,
        email : this.email,
        address: this.address,
        bodyTemp: this.bodyTemp,
      })
      .then(response => {
        that.is_inside = 1
        that.increment();
        console.log(response)
        that.$router.push('/');
      })
      .catch(function (error) {
        console.error(error.response);
      });

    },

    increment(){
      axios.put('https://sjecmsbe.herokuapp.com/api/estmonitor/formcreated', {
        estID: this.estID
      })

      this.userTableIncrement()
    },

    userTableIncrement(){
      const headers = { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }

       axios.put(`https://sjecmsbe.herokuapp.com/api/userinside/${this.email}`, {email: this.email}, {headers})
    }
  },

}
</script>
