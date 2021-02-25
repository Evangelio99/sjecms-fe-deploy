<template>
    <v-row>
      <v-col lg="12" class="mt-3 mb-3">
        <!-- <h1 v-if="user">Welcome {{user.first_name}} {{user.last_name}} This is your profile!</h1> -->
        <v-card
          
          max-width="100%"
          outlined
          style="background-color:dirty white"
        >
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
       </v-breadcrumbs>
       </v-card>


        <v-container>
              <v-row
              class="peditpic"
              >
              <edit-picture/>
              </v-row>
          </v-container>
        

        <v-container>
              <v-row
              class="pedit"
              >
              <edit-details/>
              </v-row>
          </v-container>

      </v-col>
    </v-row>
    <!-- /.row -->
</template>

<script>
import axios from 'axios'
import EditPicture from './EditPicture.vue';
import EditDetails from './EditDetails.vue';
    export default {
  components: { EditPicture, EditDetails },
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
        },
        {
          text: 'Profile',
          disabled: false,
          href: 'profile',
        },
        {
          text: 'Edit Profile',
          disabled: true,
          href: 'editprofile',
        },
      ],
    }),

      created () {
// POST request using fetch with set headers
        const headers = { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        };
        axios.post("http://127.0.0.1:8000/api/details/", {}, { headers })
          .then(response => {
            this.user = response.data.success;
            console.log(response.data.success);
        });
      }
    }
</script>

<style scoped>
.pedit{
  margin-top: -27.6%
}

.peditpic{
  margin-top: -3%
}
</style>