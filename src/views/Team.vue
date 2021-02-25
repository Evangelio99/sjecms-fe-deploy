<template>
<v-card class="sjabout1">
  <v-container>
    <v-layout wrap>
      <v-flex
      xs12 md6 lg6>
      <p class="meet">Meet</p>
            <p class="meet" style="margin-top:-1.5%">The Team</p>
            <p class="meetdesc">We are one team. We are a company that </p>
            <p class="meetdesc" style="margin-top:-1%"> Make the difference. It’s when we share</p>
            <p class="meetdesc" style="margin-top:-1%"> our skills, knowledge and experience we </p>
            <p class="meetdesc" style="margin-top:-1%"> become one team.</p>
            <v-img src='/img/zigzagblack.png' style="margin-left:8%; margin-top:0%" width="200px"></v-img>
            <br><br>
      </v-flex>

      <v-flex
      xs12 md6 lg6>
      <v-carousel
        cycle
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        show-arrows-on-hover
        
        style="max-width:100%;max-height:100%"
        >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          
        ><div class="abouttxt">

              </div>
        </v-carousel-item>
      </v-carousel>
      </v-flex>

    </v-layout>
  </v-container>
</v-card>
</template>

<script>
import Store from '../Store'
  export default {
      name: 'Pictures',
      components: {
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
.sjabout1{
  max-width: 132%;
  background-color:white;
  /* background-image: url("/img/bgsj_login.jpg"); */
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
</style>