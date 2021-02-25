import Vue from 'vue';
import axios from 'axios'

export default  Vue.observable ({
    user: null,
    token: null,
    is_admin: localStorage.getItem('user'),
    methods: {
      initialized(){
        axios.get("https://disease.sh/v3/covid-19/countries/PH?yesterday=true&strict=true", {})
        .then(response => {
          localStorage.setItem('cases', response.data.active)
          localStorage.setItem('recoveries', response.data.recovered)
          localStorage.setItem('deaths', response.data.deaths)
        })
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 

  });