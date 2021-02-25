<template>
  <v-card>
    <v-card-title class="font" style="font-weight:bolder">
      Survey
      <v-spacer></v-spacer>
      <!-- <v-text-field 
        v-model="estID"
        append-icon="mdi-magnify"  
        single-line 
        hide-details type="text" 
        label="Establishments"
      >
      </v-text-field> -->
        <v-select
        class="font"
        v-model="estID"
        :items="items"
        label="Establishments"
      ></v-select>

    </v-card-title>
    <v-spacer/>
    <v-data-table
      :headers="headers"
      :items="survey"
      tem-key="estID"
      :search="search"
      class="font"
      style="font-weight:bold"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      user: '',
      search: '',
      estID: '',
      items: [
        {text: 'all', value: ''},
        {text: 'Puregold', value: '001'},
        {text: 'Jollibee', value: '002'},
        {text: 'Dohtonbori Greenhills', value: '003'},
        {text: 'Mcdonalds', value: '004'},
        {text: 'Canfe Sanso', value: '005'},
        {text: 'BBQ shack', value: '006'},
        {text: 'Flossom Place', value: '007'},
        {text: "McLaren's Pub", value: '008'},
        {text: 'Barley and Vines', value: '009'},
        {text: 'Chivz Lounge Bar', value: '010'},
        {text: 'Tomo Japanese Dining', val1ue: '011'},
        {text: 'BBQ Shack', value: '012'},
      ],
      dialog: false,
      // headers: [
      //   {
      //     align: 'start',
      //     sortable: false,
      //     value: 'name',
      //   },
      //   { text: 'Establishment ID', value: 'estID' },
      //   { text: 'First Name', value: 'first_name' },
      //   { text: 'Last Name', value: 'Last_name' },
      //   { text: 'Gender', value: 'gender' },
      //   { text: 'Email', value: 'email' },
      //   { text: 'Address', value: 'address' },
      //   { text: 'Body Temperature', value: 'bodyTemp' },
      //   { text: 'Date and Time', value: 'created_at' },
      //   { text: 'updated Date and Time', value: 'updated_at' },
      //   { text: 'Actions', value: 'actions', sortable: false },
      // ],
      survey: [],
    }
  },
  created () {
    this.initialize()
  },
  computed: {
    headers() {
      return [
        {
          text: "Etablishments",
          align: ' d-none',
          sortable: false,
          value: "estID",
          filter: f => { return ( f + '' ).toLowerCase().includes( this[ 'estID' ].toLowerCase() ) }
        },
        // { text: 'Establishment ID', value: 'estID' },
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Email', value: 'email' },
        { text: 'Address', value: 'address' },
        { text: 'Body Temperature', value: 'bodyTemp' },
        { text: 'Date and Time', value: 'created_at' },
        // { text: 'updated Date and Time', value: 'updated_at' },
        // { text: 'Actions', value: 'actions', sortable: false },
      ];
    }
  },
  methods: {
    initialize () {
    const that = this
    axios.post("http://127.0.0.1:8000/api/displaysurvey", {})
    .then(response => {
      console.log(response.data)
      that.survey = response.data.success
    })
    .catch(function (error) {
      console.error(error.response);
    });
    },

  }
}
</script>

<style scoped>
.font{
  font-family: Montserrat;
}
</style>