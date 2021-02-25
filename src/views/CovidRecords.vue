<template>
      <v-container
      style="justify-content:space-between">
      <v-row
      >
      <v-col
      cols="12"
        sm="4"
        md="4"
        lg="4"
        xl="4">
      <v-card
          class="active" 
          elevation="2"
          style="height: 150px; width:200px; align-text: center; border:1px solid #3949ab;"
          >
            <v-card-title class="header" style="color:#3949ab">
              <v-spacer> Active </v-spacer>
            </v-card-title>
            <v-card-subtitle class="number">{{ active }}</v-card-subtitle>
      </v-card> 
      </v-col>

      <v-col
      cols="12"
        sm="4"
        md="4"
        lg="4"
        xl="4" >
      <v-card
            class="recoveries"
            elevation="2"
          style="height: 150px; width:200px; align-text: center; border:1px solid #7cb342;"
          >
          <v-card-title class="header" style="color:#7cb342" >
              <v-spacer>Recoveries</v-spacer>
            </v-card-title>
            <v-card-subtitle class="number">{{ recoveries }}</v-card-subtitle>
      </v-card>
      </v-col>

      <v-col
      cols="12"
        sm="4"
        md="4"
        lg="4"
        xl="4" >
      <v-card 
          class="deaths"
          elevation="2"
          style="height: 150px; width:200px; align-text: center; border:1px solid #e53935;"
          >
          <v-card-title class="header" style="color:#e53935">
              <v-spacer>Deaths</v-spacer>
            </v-card-title>
            <v-card-subtitle class="number"> {{ deaths }}</v-card-subtitle>
      </v-card>  
      <v-card-title class="Novel">
              <v-spacer>API by <a class="Novel" style="color:#36506b" href= "https://disease.sh/">Novel Covid19</a></v-spacer>
            </v-card-title>
      </v-col>
      

      </v-row>
      </v-container>
</template>

<script>
import Store from '../Store'

  export default {
      name: 'Login',
      components: {

      },

      data () {
      return {
        active: Store.numberWithCommas(localStorage.getItem('cases')),
        recoveries: Store.numberWithCommas(localStorage.getItem('recoveries')),
        deaths: Store.numberWithCommas(localStorage.getItem('deaths')),
        items: [
          {
            src: '/img/ronen1.jpg',
          },
          {
            src: '/img/arnel1.jpg',
          },
          {
            src: '/img/shiela1.jpg',
          },
          {
            src: '/img/pada1.jpg',
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
.Novel{
  font-size:10px;
  color:white;
  text-align: right;
  font-family: Montserrat-reg;
  font-weight: bolder;
  margin-top: -11%;
  margin-right: -4%;
}

#inspire{
  background-image: url("/img/bgsj_login.jpg");
  /* background-color: ivory; */
  background-size:contain;
  /* background-position:center; */
  background-repeat: no-repeat;
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
}

.recoveries{
  font-family: Montserrat-reg;
  border: 5px solid rgb(0, 0, 0);

}

.deaths{
  font-family: Montserrat-reg;
  border: 5px solid black;
}

.header{
  font-weight: bold;
  margin-top: 5%;
  text-align: center;
}

.header1{
  font-weight: bold;
  margin-top: 5%;
  margin-left: 23.8%;
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

.sjtitle{
  font-size: 50px;
  font-family: Montserrat-reg;
  font-weight: bolder;
  text-align: center;
}

.sjabout{
  margin-top: 2%;
  margin-left: -15.5%;
  margin-right: -70%;
  max-width: 132%;
  background-image:url("/img/yellowwbg.png");
}

.sjabout1{
  margin-top: 0%;
  margin-left: -15.5%;
  margin-right: -70%;
  max-width: 132%;
  background-color:white;
  /* background-image: url("/img/bgsj_login.jpg"); */
}

.sjabout2{
  margin-top: 0%;
  margin-left: -15.5%;
  margin-right: -70%;
  max-width: 132%;
  background-image:url("/img/contactbg.png");
  /* background-image: url("/img/bgsj_login.jpg"); */
}

.sjsubtitle{
  font-family: Montserrat;
  font-size: 23px;
  text-align: center;
 }

 .sub{
  font-family: Montserrat;
  font-size: 15px;
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

