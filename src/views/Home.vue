<template>
<v-container>
    <v-row>
      <v-col>
      <v-card
          
          max-width="100%"
          outlined
          style="background-color:white"
        >
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
          
       </v-breadcrumbs>
          <v-btn
            v-show="!hidden"
            v-if="user.is_inside=='0'"
            color="red"
            fab
            dark
            small
            absolute
            bottom
            right
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn
            v-show="!hidden"
            v-if="user.is_inside=='1'"
            color="green"
            fab
            dark
            small
            absolute
            bottom
            right
            @click="handleInside"
          >
            <v-icon>mdi-plus</v-icon>
         </v-btn>
       </v-card>
       </v-col>
       </v-row>

        <v-row>
          <v-col
           cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            style="margin-top:-2%">
              <dashboard-table/>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            sm="7"
            md="7"
            lg="7"
            xl="7">
            <v-card 
            color="#36506b"
            dark
            style="margin-top:-1.2%;text-align: center"
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
            xl="5"
            >
            <v-card
            style="justify:space-between"
              class="updates">
              <v-card-title class="headercovid" style="text-align: center;font-weight: bolder;font-family: Montserrat-reg;" >
                    <v-spacer> Covid-19 Updates </v-spacer>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-subtitle> <a style="color:#36506b;" href="https://doh.gov.ph/"> https://doh.gov.ph/ </a></v-card-subtitle>
                  <v-card-subtitle class="links"> <a style="color:#36506b;" href="https://doh.gov.ph/covid19tracker">https://doh.gov.ph/covid19tracker</a></v-card-subtitle>
                  <v-card-subtitle class="links"> <a style="color:#36506b;" href="https://www.covid19.gov.ph/">https://www.covid19.gov.ph/</a></v-card-subtitle>
                  <v-card-subtitle class="links"> <a style="color:#36506b;" href="https://www.worldometers.info/coronavirus">https://www.worldometers.info/coronavirus</a></v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

      <br><br>

      <v-row>
        <v-col
            cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            >
         <v-card 
            color="#36506b"
            dark
            style="margin-top:-6%"
            >
            <v-card-title class="plugins">
                    <v-spacer> News & Updates </v-spacer>
            </v-card-title>
            </v-card>
        </v-col>
      </v-row>

      <v-row
      style="margin-left:1.5%">
      <!-- social media -->
        <v-col cols="12" md="4" lg="4">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCityofSanJuanNCRPhilippines&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
          width="340" 
          height="500" 
          style="border:none;overflow:hidden" 
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          >
          </iframe>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <a class="twitter-timeline" data-width="340" data-height="500" href="https://twitter.com/DOHgovph?ref_src=twsrc%5Etfw">Tweets by DOHgovph</a>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <a class="twitter-timeline" data-width="340" data-height="500" data-theme="light" href="https://twitter.com/WHOPhilippines?ref_src=twsrc%5Etfw">Tweets by WHOPhilippines</a>
        </v-col>
      </v-row>  
        
        <!-- <h1 v-if="!user">You're not loggedin!!</h1> -->
          <!-- <v-btn 
          @click="handleClick"
          color="primary" 
          class="rounded-pill" >
          Login
          </v-btn> -->
    
    <!-- /.row -->
</v-container>
</template>
<script>
import axios from 'axios'
import Store from '../Store'
import DashboardTable from './DashboardTable.vue'
import CovidRecords from './CovidRecords.vue'

export default {
  name: 'Home',
  data(){
    return {
      user: '',
      is_inside: '',
      active: Store.numberWithCommas(localStorage.getItem('cases')),
      recoveries: Store.numberWithCommas(localStorage.getItem('recoveries')),
      deaths: Store.numberWithCommas(localStorage.getItem('deaths')),
      items: [
        {
          text: 'Dashboard',
          disabled: true,
          href: 'home',
        }
      ],
    }
  },

  components: {
    DashboardTable,
    CovidRecords,
  },

  created () {
// POST request using fetch with set headers
    const headers = { 
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    axios.post("https://sjecmsbe.herokuapp.com/api/details", {}, { headers })
      .then(response => {
        this.user = response.data.success;
        console.log(response.data.success);
        console.log(Store.is_admin);
      });

    Store.methods.initialized()
  },

  methods: {
    handleClick(e){
      e.preventDefault()
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/');
    },

    handleInside(e){
      e.preventDefault()
      const headers = { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }

       axios.put(`https://sjecmsbe.herokuapp.com/api/useroutside/${this.user.email}`,{email: this.user.email}, {headers})
       .then(confirm('Out successfully!!'))
       .catch(function (error) {
        console.error(error.response);
      });

    }

  }

}
</script>

<style scoped>
.active{
  font-family: Montserrat-reg;
  margin-top: 0.5%;
}

.recoveries{
  margin-left: 19.5%;
  font-family: Montserrat-reg;
  border: 5px solid rgb(0, 0, 0);
  margin-top: -12.9%;
}

.deaths{
  margin-left: 39.3%;
  font-family: Montserrat-reg;
  border: 5px solid black;
  margin-top: -12.95%;
}

.updates{
  font-family: Montserrat-reg;
  color: #36506b;
}

.header{
  font-weight: bold;
  margin-top: 5%;
}

.headercovid{
  font-weight: bold;
  /* margin-top: 5%; */
  /* margin-left: 28%; */
}

.header1{
  font-weight: bold;
  margin-top: 1%;
}

.covidtitle{
  margin-left: 0%;
}

.number{
  font-family: Montserrat-reg;
  font-weight: bolder;
  font-size: xx-large;
  text-align: center;
  margin-top: 10px;
}

.links{
  margin-top: -4%;
}

.plugins{
  font-family: Montserrat-reg;
  font-weight: bolder;
  font-size:xx-large;
  text-align: center;
  background-color: #ffc412;
}



</style>

