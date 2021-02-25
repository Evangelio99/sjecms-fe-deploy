<template>
<v-card class="sjabout1" outlined>
    <v-layout wrap>
      <v-flex
      xs12 md4 lg4>
       <v-list-item three-line max-width="250" class="desc2" style="background-color:#e9e9e9;">
      <v-list-item-content>
        <v-img src='/img/who.png' max-height="75px" max-width="60px" style="margin-left:43%;margin-top:5%"></v-img>
        <v-list-item-title style="text-align: center;font-family: Montserrat; font-size:30px">
          <v-spacer> Who we are? </v-spacer>
        </v-list-item-title>
        <v-list-item-subtitle class="sub">We are a group of start-up programmers,</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">designers, and students from the Polytechnic</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">University of the Philippines– San Juan Branch.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">We are currently under the program of IT &</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">beginning to develop in the web-dev industry.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub"><br></v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>
      </v-flex>

      <v-flex
      xs12 md4 lg4>
       <v-list-item three-line max-width="250" class="desc2" style="background-color:#e9e9e9;">
      <v-list-item-content>
        <v-img src='/img/do.png' max-height="75px" max-width="60px" style="margin-left:43%;margin-top:5%"></v-img>
        <v-list-item-title style="text-align: center;font-family: Montserrat; font-size:30px">
          What we do?
        </v-list-item-title>
        <v-list-item-subtitle class="sub">We are driven by passion to make great software</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">design and functionality available to everyone.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">We specialize in application in providing public</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">safety, healthcare, and convenience </v-list-item-subtitle>
        <v-list-item-subtitle class="sub"><br><br></v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>
      </v-flex>

      <v-flex
      xs12 md4 lg4>
      <v-list-item three-line max-width="250" class="desc3" style="background-color:#e9e9e9;">
      <v-list-item-content  class="right" >
        <v-img src='/img/services.png' max-height="75px" max-width="60px" style="margin-left:43%;margin-top:5%"></v-img>
        <v-list-item-title style="text-align: center;font-family: Montserrat;font-size:30px">
          Our Services
        </v-list-item-title>
        <v-list-item-subtitle class="sub">Together we offer accessibility, secure & services,</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">That enables people to be inspired and to make</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">their lives simple with technology, making it</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">convenient live in a more advance way.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub"><br><br></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </v-flex>
    </v-layout>
</v-card>
</template>

<style scoped>
.sjabout1{
  max-width: 132%;
  background-color:white;
  /* background-image: url("/img/bgsj_login.jpg"); */
  background-size: cover;
}

.sub{
  text-align: center;
  align-content: center;
  font-family: Montserrat;
  font-weight: lighter;
}
</style>