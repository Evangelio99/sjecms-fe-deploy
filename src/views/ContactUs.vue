<template>
    <v-card class="sjabout2">
        <v-container style="background-color:none">
            <v-row>
            <v-flex>
          <v-list-item-title class="contactitle" style="text-align: left">Contact Us</v-list-item-title>
          <br>
          <v-list-item-subtitle class="contactsub">At SJECMS, it’s always storytelling time. Swing by & share yours.</v-list-item-subtitle>
          <v-list-item-title class="contactitle" style="font-size:30px; text-align: left">Let's Talk</v-list-item-title>
            </v-flex>
            </v-row>

            <v-row
            justify="space-between">
            <v-col
            cols="12"
            sm="3"
            md="3"
            lg="3"
            xl="3">
            <v-text-field
            label="Name"
            v-model="name"
            outlined
            dense
          ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            sm="3"
            md="3"
            lg="3"
            xl="3">
            <v-text-field
            label="Email"
            v-model="email"
            outlined
            dense
          ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            sm="3"
            md="6"
            lg="6"
            xl="6"
            >
            <v-list-item-title class="contactsub" style="font-size:20px; font-weight:bolder">Address:</v-list-item-title>
            <v-list-item-subtitle class="contactsub">San Juan City,</v-list-item-subtitle>
            <v-list-item-subtitle class="contactsub">Metro Manila</v-list-item-subtitle>
            <v-list-item-subtitle class="contactsub">Philippines</v-list-item-subtitle>
            </v-col>
            </v-row>

            <v-row>
            <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            xl="6"
            style="margin-top:-6%">
            <v-textarea
          outlined
          name="input-7-4"
          label="Message"
          v-model="message"
        ></v-textarea>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            xl="6"
            >
            <br><br><br>
                <v-list-item-subtitle class="contactsub" style="margin-top:-7.9%">sjestablishmentcrowdmonitoring@gmail.com</v-list-item-subtitle>
                <v-list-item-subtitle class="contactsub" style="margin-top:0%">(+63) 9481 451 3114</v-list-item-subtitle>
            </v-col>
            </v-row>

            <v-row>
                <v-col
                cols="12"
                sm="2"
                md="2"
                lg="2"
                xl="2"
                style="margin-top:-3.5%">
                    <v-btn
                    outlined
                    color="black"
                    @click="handlesubmit"
                    >
                    Submit
                    </v-btn>
                </v-col>
            </v-row>

          <!-- <v-list-item-subtitle class="contactsub">San Juan City,</v-list-item-subtitle>
          <v-list-item-subtitle class="contactsub">Metro Manila</v-list-item-subtitle>
          <v-list-item-subtitle class="contactsub">Philippines</v-list-item-subtitle> -->

          
        

        <!-- <v-container style="background-color:none">
          <v-list-item-subtitle class="contactsub" style="margin-left:45%; margin-top:-7.9%">sjestablishmentcrowdmonitoring@gmail.com</v-list-item-subtitle>
          <v-list-item-subtitle class="contactsub" style="margin-left:45%; margin-top:0%">(+63) 9481 451 3114</v-list-item-subtitle>
        </v-container> -->
        <v-divider></v-divider>
        <v-container style="background-color:none">
          <v-list-item-subtitle class="contactsub" style="margin-left:0%; margin-top:0%; text-align:center">Copyright &copy; SJECMS Website — 2021</v-list-item-subtitle>
        </v-container>
        </v-container>
      </v-card>
</template>

<script>
import axios from 'axios'
export default {
      name: 'ContactUs',
      data () {
      return {
        name: '',
        email: '',
        message: '',
      }
    },


    methods: {
      handlesubmit(e){
        e.preventDefault()
        axios.post('https://sjecmsbe.herokuapp.com/api/contact-us', {
            name: this.name,
            email: this.email,
            message: this.message
        })
        .then(
               confirm('Submit successfully!!') && this.eraseinput()
        )
        .catch(
            err => {
                console.log(err)
            }
        )
      },

      eraseinput(){
          this.name = this.email = this.message=''
      }

    }
}
</script>

<style scoped>
.sjabout2{
  margin-left: -15.5%;
  margin-right: -70%;
  max-width: 132%;
  background-image:url("/img/contactbg.png");
  background-size: cover;
  /* background-image: url("/img/bgsj_login.jpg"); */
}
.contactitle{
  font-family: Montserrat-reg;
  font-size: 50px;
  font-weight: bolder;
  color:white;
  text-align: center;
}

.contactsub{
  font-family: Montserrat;
  font-size: 15px;
  font-weight: lighter;
  color:white;
}


</style>