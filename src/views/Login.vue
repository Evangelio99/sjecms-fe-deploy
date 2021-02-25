<template>
<v-app id="inspire">

    <v-app-bar
      app
      color="#63C5DA"
    >
      <v-spacer />
        <v-avatar tile >
          <v-img src='/img/sjcmslogo.png'></v-img>
        </v-avatar>
        <v-toolbar-title class="px-3 title">
          <h2>San Juan Establishment Crowd Monitoring</h2>
        </v-toolbar-title>
      <v-spacer />
      
    </v-app-bar>


  <v-main>
    <v-container>
      <v-row
      style="margin-top:1.7%"
      class="space-around"
      >
      <v-col
        cols="12"
        sm="7"
        md="7"
        lg="7"
        xl="7" 
      >
        <HomeTable/>
        <v-card 
        color="#36506b"
        dark
        style="margin-top:-3%;text-align: center"
        >
        <v-card-title class="header1" style="text-align: center; font-weight: bolder;font-family: Montserrat-reg;">
                <v-spacer> Philippines COVID-19 Records </v-spacer>
        </v-card-title>
        </v-card>

        <covid-records/>
        </v-col>
      

      <v-col
      cols="12"
        sm="5"
        md="5"
        lg="5"
        xl="5">
        <LoginForm/>
      </v-col>
      </v-row>

      <v-row>
        <v-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        class="Descriptions">
          <try/>
        </v-col>
      </v-row>

      <v-row>
      <v-col
      cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        style="margin-top:-7%">
        <san-juan/>
      </v-col>
      </v-row>

      <v-row>
      <v-col
      cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        style="margin-top:-5.5%">
        <team/>
      </v-col>
      </v-row>

      <v-row>
        <v-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        style="margin-top:-2%;margin-left:-1%">
          <contact-us/>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        class="Descriptions1">
          <san-juan/>
        </v-col>
      </v-row> -->


     
    </v-container>
  </v-main>

</v-app>

</template>

<script>
// // import HomepageDesc from './HomepageDesc'
import LoginForm from './LoginForm'
import Store from '../Store'
// import axios from 'axios'
  // import AboutUs from './AboutUs'
import HomeTable from './HomeTable.vue'
import CovidRecords from './CovidRecords.vue'
import Try from './Try.vue'
import SanJuan from './SanJuan.vue'
import Team from './Team.vue'
import ContactUs from './ContactUs.vue'
// import CovidRecords from './CovidRecords.vue'
  export default {
      name: 'Login',
      components: {
          LoginForm,
          // AboutUs,
          HomeTable,
            CovidRecords,
            Try,
            SanJuan,
            Team,
            ContactUs,
        //   HomepageDesc,
            // CovidRecords
      },

      data () {
      return {
        active: Store.numberWithCommas(localStorage.getItem('cases')),
        recoveries: Store.numberWithCommas(localStorage.getItem('recoveries')),
        deaths: Store.numberWithCommas(localStorage.getItem('deaths')),
        items: [
          {
            src: '/img/ronen2.png',
          },
          {
            src: '/img/arnel2.png',
          },
          {
            src: '/img/shiela2.png',
          },
          {
            src: '/img/pada2.png',
          },
        ],
        Confirmcases: '',
      }
    },
    created(){
      Store.methods.initialized()
    },

  }

</script>

<style scoped>
#inspire{
  background-image: url("/img/bgsj_login.jpg");
  /* background-color: ivory; */
  background-size:cover;
  /* background-position:center; */

}

.title {
  color: white;
  font-family: 'Montserrat' !important;
}

.login,
  .image {
   min-height: 100vh;
}

.logincard{
  margin-top: -3.4%;
  margin-left:-8%;
}

.tablecard{
  margin-top: -61.08%;
  margin-left: 2.5%;
}

.covidcard{
  margin-top: 0%;
  margin-left: 0%;
}

.covid{
  margin-top: 20%;
}

.active{
  font-family: Montserrat-reg;
  margin-top: 1.5%;
  margin-left: 2.5%;
}

.recoveries{
  margin-left: 21.9%;
  font-family: Montserrat-reg;
  border: 5px solid rgb(0, 0, 0);
  margin-top: -12.9%;
}

.deaths{
  margin-left: 41.9%;
  font-family: Montserrat-reg;
  border: 5px solid black;
  margin-top: -12.95%;
}

.header{
  font-weight: bold;
  margin-top: 5%;
}

.header1{
  font-weight: bold;
  margin-top: 5%;
  text-align: center;
  
}

.covidtitle{
  margin-left: 2.5%;
}

.number{
  font-family: Montserrat-reg;
  font-weight: bolder;
  font-size: xx-large;
  text-align: center;
  margin-top: 10px;
}

.desc1{
  margin-top: 3.5%;
  margin-left: -4.8%;
}

.desc2{
  margin-top: -31.15%;
  margin-left: 32.5%;
}

.desc3{
  margin-top: -30.38%;
  margin-left: 70%;
  margin-right: -5%;
}


.sjabout2{
  margin-left: -15.5%;
  margin-right: -70%;
  max-width: 132%;
  background-image:url("/img/contactbg.png");
  background-size: cover;
  /* background-image: url("/img/bgsj_login.jpg"); */
}

 /* .sub{
  font-family: Montserrat;
  font-size: 15px;
 } */

.sjabout1{
  max-width: 132%;
  background-color:white;
  /* background-image: url("/img/bgsj_login.jpg"); */
  margin-left:-16%; margin-right:-15.5%; margin-top:3.5%
}

.sjabout9{
  margin-top: 3%;
  max-width: 132%;
  background-image:url("/img/yellowwbg.png");
  background-size: cover;
}

.sjabouttema{
  max-width: 132%;
  background-color:white;
  /* background-image: url("/img/bgsj_login.jpg"); */
  margin-left:-16%; margin-right:-15.5%; margin-top:3.5%
}

.sub{
  text-align: center;
  align-content: center;
}
 .meet{
   font-family: Montserrat-reg;
   font-size: 50px;
   font-weight: bolder;
   color: #36506b;
   margin-left: 9%;
   margin-top: 7%;
 }

.meetdesc{
   font-family: Montserrat-reg;
   font-size: 20px;
   font-weight:lighter;
   color: #3ec1c9;
   margin-left: 9%;
   margin-top: 3%;
 }

.Descriptions{
  margin-top:-5%;
}

.Descriptions1{
  margin-top:-6%
}

</style>