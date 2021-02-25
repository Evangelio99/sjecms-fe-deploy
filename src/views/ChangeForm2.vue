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
         <v-card-title class="titleforgot" style="margin-top:10%;margin-left:11%">
            Reset Password
        </v-card-title>

            <v-card-text>
                <v-text-field
                    color="#36506b"
                    prepend-icon="mdi-lock"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="New Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>
                 <v-text-field
                    color="#36506b"
                    prepend-icon="mdi-lock"
                    v-model="c_password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Confirm Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
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
            <v-card-title>Password do not match</v-card-title>
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
import axios from "axios";
export default {
  name: 'Changepassform',
  data(){
      return {
          password : "",
          c_password : "",
          show1 : false,
          rules: {
            required: value => !!value || 'Required.',
          },
          failure: false
      }
  },

  computed: {
    email(){
      return this.$route.params.email
    },
    code(){
      return this.$route.params.token
    },
  },

  methods : {
    handleSubmit(e){
      e.preventDefault()
         axios.post(`http://127.0.0.1:8000/api/reset_password/${this.email}/${this.code}`, {
            password: this.password,
            c_password: this.c_password
          }).then( response => {
             console.log(response.data)
             confirm('Password Change Successfully!!') && this.$router.push('/')
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
    top: 35%;
}
</style>