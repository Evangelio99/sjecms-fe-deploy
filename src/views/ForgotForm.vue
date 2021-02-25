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
                  name="login"
                  prepend-icon="mdi-email"
                  type="text"
                  :rules="[rules.required]"
                ></v-text-field>
            </v-card-text>
            
            <!-- send -->
            <v-card-actions>
              <v-spacer />
                <v-btn 
                  color="#63C5DA"
                  class="rounded-pill white--text"
                  style="margin-bottom:10%; width:30%;"
                  @click="this.sendemail"
                >
                  Send Email
                  </v-btn>
              <v-spacer />
            </v-card-actions>

      </v-card>

        <v-dialog v-model="failure" persistent max-width="350px">

          <v-card>
            <v-card-title>User does not exist!</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="failure=false">okay</v-btn>
            </v-card-actions>
          </v-card> 

        </v-dialog>
        
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
    name: 'ForgotPassword',
    data () {
      return {
        column: null,
        row: null,
        failure: false,
        email:'',
        rules: {
          required: value => !!value || 'Required.',
        },
      }
    },
    method: {
        sendemail(e){
          e.preventDefault()
            axios.post('https://sjecmsbe.herokuapp.com/api/forgot_password', {
              email : this.email,
            }).then(console.log('success'))
            .catch(
              this.failure = true
            );
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

.titleforgot{
    font-family: Montserrat-reg;
    font-weight: bolder;
    font-size: 40px;
    color: #36506b;
    top: 57%;
}
</style>