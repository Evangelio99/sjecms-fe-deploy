<template>
<v-card class="sjabout1" outlined>
  <v-container>
    <v-layout wrap>
      <v-flex
      xs12 md12 lg12>
      <v-list-item-content>
        <v-list-item-title class="sjtitle">
          San Juan Establishment
        </v-list-item-title>
        <v-list-item-title class="sjtitle">
          Crowd Monitoring System
        </v-list-item-title>
        <v-card-subtitle class="sjsubtitle">The developers implemented a more centralized system which automatically stores the data of subjects, these data will include their names, current state of health, gender, and contact information. This information may be included in a health declaration form, but the underlying importance of this project lies in its goal to keep and provide accurate data for the public, and the government. With these stored data, people will determine the concrete number of people who are within the area. Thus, paperless survey must be implemented in undergoing a health check to avoid contact with any person. The system project aims to monitor the business establishments specifically in San Juan City, Metro Manila. </v-card-subtitle>

      </v-list-item-content> 
      </v-flex>

    </v-layout>
  </v-container>
</v-card>
</template>

<style scoped>
.sjabout1{
  margin-top: 3%;
  max-width: 150%;
  background-image:url("/img/yellowwbg.png");
  background-size: cover;
}

.sub{
  text-align: center;
  align-content: center;
}

.sjtitle{
  font-size: 50px;
  font-family: Montserrat-reg;
  font-weight: bolder;
  text-align: center;
}

.sjsubtitle{
  font-family: Montserrat;
  font-size: 23px;
  text-align: center;
 }
</style>
