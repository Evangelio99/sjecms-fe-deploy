<template>
    <v-carousel
        cycle
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        show-arrows-on-hover
        height="450"
        style="max-width:35%; margin-top:-32%; margin-bottom:5%; margin-left:55%"
        >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          
        ><div class="abouttxt">

              </div>
        </v-carousel-item>
      </v-carousel>
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