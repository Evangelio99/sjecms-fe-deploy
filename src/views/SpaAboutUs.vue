<template>
<v-app id="about">

  <v-row>
  <v-col
    cols="12"
    sm="12"
    md="12"
    lg="12"
    xl="12">
  <v-carousel
    cycle
    show-arrows-on-hover
    height="690">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    ><div class="abouttxt" style="color:#ffc412">
            About Us
          </div>
    </v-carousel-item>
  </v-carousel>
  </v-col>
  </v-row>

<br><br><br><br>
  <!-- <v-card
    class="mx-auto"
    max-width="344"
    max-height="600"
    outlined
  > -->
    <v-row
    style="margin-top:-7.5%">
      <v-col
        cols="12"
        sm="7"
        md="7"
        lg="7"
        xl="7"
        style="background-color:white">
        <br><br>
     <v-list-item three-line max-width="500" class="desc" style="background-color:white;">
      <v-list-item-content>
          <p class="overline mb-5">ABOUT COMPANY</p>
        <v-list-item-title class="headline mb-1">
          SJECMS
        </v-list-item-title>
        <v-list-item-subtitle class="sub">The developers implemented a more centralized system which automatically stores the data of</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">subjects, these data will include their names, current state of health, gender, and contact information.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">This information may be included in a health declaration form, but the underlying importance of this</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">project lies in its goal to keep and provide accurate data for the public, and the government.</v-list-item-subtitle>
        <v-list-item-subtitle class="sub">With these stored data, people will determine the concrete number of people within the area.</v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
      </v-col>

      <v-col
      style="background-color:white">
      <v-img src='/img/group.jpg' max-height="300px" max-width="500px"/>
      </v-col>
    </v-row>

    <v-row>
        <v-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        style="margin-top:-1%">
          <spa-desc/>
        </v-col>
      </v-row>

    <v-row>
      <v-col
      cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
      style="background-color:white;margin-top:-5%">
    <v-list-item three-line max-width="500" class="team" style="background-color:white">
      <v-list-item-content>
        <v-list-item-title style="font-family: Montserrat;font-size:30px">
          Meet Our Team
        </v-list-item-title>
        
      </v-list-item-content>
    </v-list-item>
      </v-col>
    </v-row>

    <v-row
    style="margin-top:-1%">
      <v-col
      cols="12"
        sm="3"
        md="3"
        lg="3"
        xl="3">
        <v-card
    class="pic1"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      src='/img/ronen.jpg'
    >
      <v-card-title class="fontb" style="font-weight:bolder">Ronen G. Santos</v-card-title>
    </v-img>

    <v-card-subtitle class="font pb-0">
      Programmer
    </v-card-subtitle>

    <v-card-text class="font text--primary">
      <div>Quezon City, Metro Manila</div>
    </v-card-text>
  </v-card>
      </v-col>

      <v-col
      cols="12"
        sm="3"
        md="3"
        lg="3"
        xl="3">
        <v-card
          max-width="300"
        >
    <v-img
      class="white--text align-end"
      height="250px"
      src="/img/arnel.jpg"
    >
      <v-card-title class="fontb" style="font-weight:bolder">Arnel L. Evangelio</v-card-title>
    </v-img>

    <v-card-subtitle class="font pb-0">
      Programmer
    </v-card-subtitle>

    <v-card-text class="font text--primary">
      <div>Quezon City, Metro Manila</div>
    </v-card-text>
  </v-card>
      </v-col>

      <v-col
      cols="12"
        sm="3"
        md="3"
        lg="3"
        xl="3">
        <v-card
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      src="/img/shiela.jpg"
    >
      <v-card-title class="fontb" style="font-weight:bolder">Shiela Kate N. Forbes</v-card-title>
    </v-img>

    <v-card-subtitle class="font pb-0">
      Front-End Developer
    </v-card-subtitle>

    <v-card-text class="font text--primary">
      <div>Manila, Metro Manila</div>
    </v-card-text>
  </v-card>
      </v-col>

        <v-col
      cols="12"
        sm="3"
        md="3"
        lg="3"
        xl="3">
        <v-card
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      src='/img/pada.jpg'
    >
      <v-card-title class="fontb" style="font-weight:bolder">Joseph Matthew M. Pada</v-card-title>
    </v-img>

    <v-card-subtitle class="font pb-0">
      Graphic Designer
    </v-card-subtitle>

    <v-card-text class="font text--primary">
      <div>Manila, Metro Manila</div>
    </v-card-text>
  </v-card>
        </v-col>

      
    </v-row>

<br><br><br>

  <v-card class="sjabout2" style="margin-top:-2%">
        <v-container style="background-color:none">
          <v-list-item-title class="contactitle" style="text-align: left">Contact Us</v-list-item-title>
          <br>
          <v-list-item-subtitle class="contactsub">At SJECMS, it’s always storytelling time. Swing by & share yours.</v-list-item-subtitle>
          <v-list-item-title class="contactitle" style="font-size:30px; text-align: left">Let's Talk</v-list-item-title>
          <br>
          <v-list-item-subtitle class="contactsub">San Juan City,</v-list-item-subtitle>
          <v-list-item-subtitle class="contactsub">Metro Manila</v-list-item-subtitle>
          <v-list-item-subtitle class="contactsub">Philippines</v-list-item-subtitle>

          
        </v-container>

        <v-container style="background-color:none">
          <v-list-item-subtitle class="contactsub" style="margin-left:45%; margin-top:-7.9%">sjestablishmentcrowdmonitoring@gmail.com</v-list-item-subtitle>
          <v-list-item-subtitle class="contactsub" style="margin-left:45%; margin-top:0%">(+63) 9481 451 3114</v-list-item-subtitle>
        </v-container>
        <v-divider></v-divider>
        <v-container style="background-color:none">
          <v-list-item-subtitle class="contactsub" style="margin-left:0%; margin-top:0%; text-align:center">Copyright &copy; SJECMS Website — 2021</v-list-item-subtitle>
        </v-container>
      </v-card>

  
  <!-- <v-list-item three-line max-width="500" class="desc" style="background-color:#2c4966;">
      <v-list-item-content>
        
        <v-list-item-subtitle class="sub align-items-center text-center" style="margin-bottom:3%;">Copyright &copy; SJECMS Website 2021</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item> -->
  <!-- </v-card> -->



</v-app>
</template>

<script>
import SpaDesc from './SpaDesc.vue'
  export default {
  components: { SpaDesc },
    data () {
      return {
        items: [
          {
            src: '/img/adminlogin.jpg',
          },
          {
            src: '/img/buildings.jpg',
          },
          {
            src: '/img/pupsj.jpg',
          },
          {
            src: '/img/church.jpg',
          },
        ],

        links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],

        // slides: [
        //   'First',
        //   'Second',
        //   'Third',
        //   'Fourth',
        // ],
      }
    },
  }
</script>


<style scoped>
.abouttxt{
    margin-left: center;
    margin-top: 25%;
    font-size: 100px;
    /* font-family: 'Montserrat-reg' !important; */
    text-align: center;
    font-weight:bolder;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    /* -webkit-text-stroke: 0.01px white; */
} 



#about {
  /* background-image: url("/img/bgsj_opacity1.jpg"); */
  /* background-size:cover; */
  /* background-position:center; */
  background-repeat: no-repeat;
  background-size:contain;
  margin-top: -1%;
  width: 110%;
  margin-left: -5%;
  font-weight: bold;
}

.logo{
  margin-left: 50%;
}

.desc{
  /* margin-top: -4%; */
}

.desc1{
  margin-top: 3.5%;
  margin-left: -5%;

}

.desc2{
  margin-top: -14.7%;
  margin-left: 35.5%;
}

.desc3{
  margin-top: -13.6%;
  margin-left: 67%;
}

.team{
  margin-top: 3%;
}

.pic1{
  margin-top: 0%;
  margin-left: 0%;
}

.pic2{
  margin-top: -27.2%;
  margin-left: 25.3%;
}

.pic3{
  margin-top: -27.2%;
  margin-left: 50.6%;
}

.pic4{
  margin-top: -27.2%;
  margin-left: 76%;
}

.left{
  margin-left:4.5%;
  margin-top:-3%;
  margin-bottom: 3%;
}

.right{
  margin-left:22.5%;
  margin-right:-22.5%;
}

.sub{
  font-weight: lighter;
  font-family: Montserrat;
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

.sjabout2{
  margin-top: 0%;
  margin-left: -15.5%;
  margin-right: -70%;
  max-width: 132%;
  background-image:url("/img/contactbg1.png");
  background-size: cover;
  /* background-image: url("/img/bgsj_login.jpg"); */
}

.descriptions{
  margin-top: 3.6%;
  margin-left: -15.5%;
  margin-right: -10%;
  max-width: 132%;

  background-color:#e9e9e9;
  /* background-image: url("/img/bgsj_login.jpg"); */
}

.font{
  font-family: Montserrat;
}

.fontb{
  font-family: Montserrat-reg;
}

</style>