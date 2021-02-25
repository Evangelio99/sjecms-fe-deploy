<template>
<v-card class="sjabout1">
  <v-container>
    <v-layout wrap>
      <v-flex
      xs12 md4 lg4>
      <v-list-item three-line max-width="200" class="desc1">
      <v-list-item-content class="left">
        <v-img src='/img/time.png' max-height="100px" max-width="100px" style="margin-left:38%"></v-img>
        <v-list-item-title class="headline mb-1" style="text-align: center;">
          Who we are?
        </v-list-item-title>
        <v-list-item-subtitle class="sub">This system helps saves time for logging in and</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">out of business establishments making it more</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">convenient for client to make transactions and </v-list-item-subtitle>
        <v-list-item-subtitle class="sub">preventing the spread of COVID-19 virus.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub" style="margin-bottom: 3%"><br></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </v-flex>

      <v-flex
      xs12 md4 lg4>
      <v-list-item three-line max-width="250" class="desc2">
        <v-list-item-content>
          <v-img src='/img/innovate.png' max-height="100px" max-width="100px" style="margin-left:38%"></v-img>
        <v-list-item-title class="sub headline mb-1">
          What we do?
        </v-list-item-title>
        <v-list-item-subtitle class="sub">Our group believes that technology can and should</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">Be a force for good and meaningful innovation can</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">And will contribute to a brighter world in big</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">And small ways.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub" style="margin-bottom: 3%"><br></v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
      </v-flex>

      <v-flex
      xs12 md4 lg4>
      <v-list-item three-line max-width="500" class="desc3">
      <v-list-item-content class="sub">
        <v-img src='/img/protect.png' max-height="100px" max-width="100px" style="margin-left:38%"></v-img>
        <v-list-item-title class="headline mb-1">
          Our Services
        </v-list-item-title>
        <v-list-item-subtitle class="sub">As the world responds to outbreak of COVID-19</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">Our group are working to do our part by ensuring</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">The safety of people, striving to protect health,</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">well-being of the communities which we operate</v-list-item-subtitle>
        <v-list-item-subtitle class="sub" style="margin-bottom:3%;"> & providing technology, and service to our client.
      </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </v-flex>
      <br><br><br>
    </v-layout>
  </v-container>
</v-card>
</template>

<script>
export default {
    name: 'HomepageDesc',
}
</script>

<style scoped>
.sjabout1{
  max-width: 132%;
  /* background-color:white; */
  background-image: url("/img/bgsj_login.jpg");
}

.sub{
  text-align: center;
  align-content: center;
}
</style>