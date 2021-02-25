<template>
    <v-card>
        <v-container>
            <v-layout wrap>
                
                <v-flex>
                    <v-row>
                        <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        lg="12"
                        xl="12">
                    <v-list-item-title class="contactitle" style="text-align: left">Contact Us</v-list-item-title>
                    <br>
                    <v-list-item-subtitle class="contactsub">At SJECMS, it’s always storytelling time. Swing by & share yours.</v-list-item-subtitle>
                    <v-list-item-title class="contactitle" style="font-size:30px; text-align: left">Let's Talk</v-list-item-title>
                        </v-col>
                 </v-row>
                </v-flex>
               

                <v-flex>
                    <v-row
                        justify="space-between">
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                        lg="6"
                        xl="6">
                        <v-text-field
                        label="Name"
                        outlined
                        dense
                    ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                        lg="6"
                        xl="6">
                        <v-text-field
                        label="Email"
                        outlined
                        dense
                    ></v-text-field>
                        </v-col>
                    </v-row>
                </v-flex>

                <v-flex>
                    <v-row>
                    <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                    xl="12"
                    >
                    <v-textarea
                    outlined
                    name="input-7-4"
                    label="Message"
                    ></v-textarea>
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