<template>
      <v-card class="col-lg-10 col-xl-7 mx-auto" outlined>
        <v-card-title class="tlog" style="color:#36506b">
            Login
        </v-card-title >
        <p class="mb-auto">
          <v-card-subtitle class="sub" v-text="'Welcome to Establishment Crowd Monitoring System!'">
          </v-card-subtitle> 
        </p>
            <v-card-text>
                <v-text-field
                  color="#36506b"
                  v-model="email"
                  label="Email Address"
                  name="email"
                  prepend-icon="mdi-email"
                  type="text"
                  require
                ></v-text-field>

                <v-text-field
                  color="#36506b"
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <div>
                  <input class="custom-control-input" type="checkbox" name="remember" id="remember">

                  <label class="custom-control-label" for="remember">
                    Remember Me
                  </label>
              </div>
            </v-card-actions>
            <!-- Login -->
            <v-card-actions>
              <v-spacer />
                <v-btn 
                  @click="handleSubmit"
                  block 
                  color="#63C5DA"
                  class="rounded-pill white--text">
                  Login
                  </v-btn>
              <v-spacer />
            </v-card-actions>
            <v-card-actions>
              <v-spacer />
                <a class="btn btn-link" style="color:#168bea;" href="/forgotpassword">
                    Forgot Your Password?
                </a>
                <v-spacer />
            </v-card-actions>
            <br/><hr/><br/>
            <v-card-actions>
            <v-spacer />
            <v-hover>
              <v-btn 
                @click="goToRegister()"
                block
                color="green"
                  class="rounded-pill white--text">
                Register
                </v-btn></v-hover>
            <v-spacer />
            <br>
          </v-card-actions>
        <br><br>

        <v-dialog v-model="failure" persistent max-width="350px">

          <v-card>
            <v-card-title>Incorrect username or password.</v-card-title>
               <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="handleinvalid">okay</v-btn>
               </v-card-actions>
            </v-card> 

         </v-dialog>
      </v-card>

      
</template>

<script>
// import CovidRecords from './CovidRecords'
import axios from "axios";
import Store from '../Store'
export default {
  name: 'LoginForm',
  data(){
      return {
          email : "",
          password : "",
          show1: false,

          failure: false
      }
  },

  methods : {
    handleSubmit(e){
      e.preventDefault()
      const that = this
      if (this.password.length > 0) {
          axios.post('https://sjecmsbe.herokuapp.com/api/login', {
            email: this.email,
            password: this.password
          })
          .then(response => {
            localStorage.setItem('token', response.data.success.token);
            localStorage.setItem('user', response.data.success.is_admin);
            Store.user = localStorage.getItem('token');
            Store.is_admin = localStorage.getItem('user');
            if(localStorage.getItem('token') != null){
              if(localStorage.getItem('user') == 1){
                // localStorage.getItem('user');
                this.$router.push('/adminhome');
              }
              else{
                this.$router.push('/home');
              }
            }
          })
          .catch(function (error) {
            that.failure = true
            console.error(error.response)
            console.log(that.failure)
          });
      }
    },

    goToRegister(){
      this.$router.push('/register'); 
    },

    handleinvalid(e){
      e.preventDefault()
      this.failure = false
    }

  },

  // components: {
  //   CovidRecords
  // }  

}
</script>

<style scoped>
.login,
  .image {
   min-height: 100vh;
}

.tlog{
  margin-top: 5%;
  font-family: Montserrat-reg !important;
  font-size:300%;
  font-weight: bolder;
}

.sub{
  margin-top: -4%;
  font-family: Montserrat-reg;
  font-size: 75%;
  font-weight: bold;
}

</style>
