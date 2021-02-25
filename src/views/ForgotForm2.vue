<template>
  <v-row 
    justify="center"
  >
    <v-col
    cols="12"
    sm="8"
    md="5"
    >
      <v-card class="titleforgot elevation-12 col-lg-11 col-l-8 mx-auto" shaped>
        <v-card-title class="titleforgot" style="margin-top:10%;margin-left:8%">
            Forgot Password
        </v-card-title >

            <v-card-text>
                <v-text-field
                  color="#36506b"
                   class="spacing"
                  v-model="email"
                  label="Email Address"
                  name="email"
                  prepend-icon="mdi-email"
                  type="text"
                  :rules="[rules.required]"
                ></v-text-field>
            </v-card-text>
            <!-- Login -->
            <v-card-actions>
              <v-spacer />
                <v-btn 
                  @click="handleSubmit"
                  block 
                  color="#63C5DA"
                  style="margin-bottom:10%; width:30%;"
                  class="rounded-pill white--text">
                  Login
                  </v-btn>
              <v-spacer />
            </v-card-actions>
      </v-card>

         <v-dialog v-model="failure" persistent max-width="350px">

          <v-card>
            <v-card-title>Incorrect username or password.</v-card-title>
               <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="handleinvalid">okay</v-btn>
               </v-card-actions>
            </v-card> 

         </v-dialog>

    </v-col>
  </v-row>

</template>

<script>
// import CovidRecords from './CovidRecords'
import axios from "axios";
export default {
  name: 'Forgotpass',
  data(){
      return {
          email : "",
          password : "",
          show1: false,
          rules: {
          required: value => !!value || 'Required.',
          },
          failure: false
      }
  },

  methods : {
    handleSubmit(e){
      e.preventDefault()
         axios.post('http://127.0.0.1:8000/api/forgot_password', {
            email : this.email,
          }).then( response => {
             console.log(response.data)
             confirm('Submit successfully!!') && this.$router.push('/')
          } 
          )
          .catch( err => {
              console.log(err)
              this.failure=true 
            }
          );
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
.spacing{
    margin-top: -4px;
}

.spacingradio{
    margin-top: -8px;
}

.titleforgot{
    font-family: Montserrat-reg;
    font-weight: bolder;
    font-size: 40px;
    color: #36506b;
    top: 57%;
}
</style>