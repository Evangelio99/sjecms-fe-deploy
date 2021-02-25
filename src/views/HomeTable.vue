<template>
  <!-- <v-card class="tbl elevation-3 col-lg-11 col-xl-8 mx-auto" outlined> -->
  <v-data-table
    :headers="headers"
    :items="details"
    :items-per-page="5"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    class="tblbg"
  ></v-data-table>

  <!-- </v-card> -->
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'DashboardTable',
    data () {
      return {
        headers: [
          { text: 'Establishment', value: 'estName' },
          { text: 'Currently Inside', value: 'currentIn' },
          { text: 'Total', value: 'totalIn' },
        ],
        details: [],

        sortBy: 'currentIn',
        sortDesc: true
      }
    },

    created () {
        this.initialize()
    },

    methods: {
        fetchData(){
            axios.get('https://sjecmsbe.herokuapp.com/api/estmonitor')
            .then(response=>{
                console.log(response);
                this.details = response.data;
            })
            .catch(
                    err => {
                        console.log(err)
                    }
                )
        },

        initialize(){
            this.fetchData()
        }
    }
  }
</script>

<style scoped>
.tbl{
    background-image: url("/img/bgsj_map.jpg");
    margin-top:-10%;
} 

.tblbg{
    /* background-image: url("/img/sjmap.png"); */
    background-color:white;
    /* margin-top:-2%; */
    border: 1px solid rgb(218, 218, 218);
    font-family: Montserrat-reg;
}
</style>