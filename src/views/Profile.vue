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

          <v-btn
            v-show="!hidden"
            v-if="is_inside=='0'"

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
            v-if="is_inside=='1'"
            color="green"
            fab
            dark
            small
            absolute
            bottom
            right
          >
            <v-icon>mdi-plus</v-icon>
         </v-btn>
       </v-breadcrumbs>
       </v-card>
       </v-col>
       </v-row>

          
              <v-row
              >
              <v-col
              cols="12"
              sm="4"
              md="4"
              lg="4"
              xl="4">
              <profile-picture/>
              </v-col>

              <v-col
              cols="12"
              sm="8"
              md="8"
              lg="8"
              xl="8"
              >
              <profile-form/>
              </v-col>
              </v-row>
   </v-container>
</template>

<script>
import axios from 'axios'
import ProfilePicture from './ProfilePicture.vue';
// import ProfileDetails from './ProfileDetails.vue';
import ProfileForm from './ProfileForm.vue';
    export default {
  // components: { ProfilePicture, ProfileDetails, ProfileForm },
    components: { ProfilePicture, ProfileForm },
      name: 'Profile',
      // data(){
      //   return {
      //     user: null,
      //   }
      // },

      data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'home',
          color: 'black',
        },
        {
          text: 'Profile',
          disabled: true,
          href: 'profile',
        },
      ],
    }),

      created () {
// POST request using fetch with set headers
        const headers = { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        axios.post("https://sjecmsbe.herokuapp.com/api/details/", {}, { headers })
          .then(response => {
            this.user = response.data.success;
            // console.log(response.data.success);
        });
      }
    }
</script>

<style scoped>


</style>