<template>
    <v-card>
        <v-container>
            <v-layout wrap>
                <v-flex>
                    <v-row
                    style="background-color:none">
                        <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        lg="12"
                        xl="12"
                        >
                        <v-list-item-title class="contactsub" style="font-size:20px; font-weight:bolder">Address:</v-list-item-title>
                        <v-list-item-subtitle class="contactsub">San Juan City,</v-list-item-subtitle>
                        <v-list-item-subtitle class="contactsub">Metro Manila</v-list-item-subtitle>
                        <v-list-item-subtitle class="contactsub">Philippines</v-list-item-subtitle>

                        <br><br>
                        
                        <v-list-item-subtitle class="contactsub">sjestablishmentcrowdmonitoring@gmail.com</v-list-item-subtitle>
                        <v-list-item-subtitle class="contactsub">(+63) 9481 451 3114</v-list-item-subtitle>
                        </v-col>
                 </v-row>
                </v-flex>

            </v-layout>
        </v-container>
    </v-card>
</template>

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