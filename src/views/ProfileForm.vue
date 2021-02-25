<template>
  <v-card
    class="fbody col-lg-11 col-l-8 flex-column align-items-center" shaped
  >
    <v-toolbar
      flat
      color="#3ec1c9"
    >
      <v-icon>mdi-contacts</v-icon>
      <v-toolbar-title class="font" style="color:white;font-weight:bolder">
        User Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="#ffc312"
        fab
        small
        @click="isEditing = !isEditing" 
      >
        <v-icon v-if="isEditing">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
                <v-text-field
                  :disabled="!isEditing"
                  class="spacing"
                  color="#36506b"
                  v-model="first_name"
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  prepend-icon="mdi-account"
                  type="text"
                  value=user
                  :rules="[rules.required]"
                ></v-text-field>

                <!-- <v-text-field
                  :disabled="!isEditing"
                  class="spacing"
                  color="#36506b"
                  v-model="first_name"
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="[rules.required]"
                ></v-text-field> -->

                <v-text-field
                  :disabled="!isEditing"
                  class="spacing"
                  color="#36506b"
                  v-model="last_name"
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="[rules.required]"
                ></v-text-field>

                <v-radio-group
                    :disabled="!isEditing"
                    class="spacingradio"
                    :rules="[rules.required]"
                    v-model="gender"
                    prepend-icon="mdi-gender-male-female"
                    
                    row
                    >
                    <v-radio
                        color="blue"
                        label="Male"
                        value="M"
                    ></v-radio>
                    <v-radio
                        color="pink"
                        label="Female"
                        value="F"
                    ></v-radio>
                </v-radio-group>

                <v-text-field
                  :disabled="!isEditing"
                  color="#36506b"
                  class="spacing"
                  v-model="email"
                  label="Email Address"
                  name="login"
                  prepend-icon="mdi-email"
                  type="text"
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  :disabled="!isEditing"
                  color="#36506b"
                  class="spacing"
                  v-model="address"
                  label="Full Address"
                  name="address"
                  prepend-icon="mdi-home"
                  type="text"
                  :rules="[rules.required]"
                ></v-text-field>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
        user: '',
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        address: '',
        states: [
          { name: 'Florida', abbr: 'FL', id: 1 },
          { name: 'Georgia', abbr: 'GA', id: 2 },
          { name: 'Nebraska', abbr: 'NE', id: 3 },
          { name: 'California', abbr: 'CA', id: 4 },
          { name: 'New York', abbr: 'NY', id: 5 },
        ],

        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
        show1: false,
      }
    },
    created () {
      const headers = { 
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    axios.post("http://127.0.0.1:8000/api/details", {}, { headers })
      .then(response => {
        this.user = response.data.success;
        this.first_name = response.data.success.first_name;
        this.last_name = response.data.success.last_name;
        this.gender = response.data.success.gender;
        this.email = response.data.success.email;
        this.address = response.data.success.address;
        
        
        console.log(this.user);
      });
  },

      methods: {
          save(e){
              e.preventDefault()
              const that = this;

              const data = {
                  first_name: this.first_name,
                  last_name: this.last_name,
                  gender: this.gender,
                  email: this.email,
                  address: this.address,
              }

              const headers = { 
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              };

              axios.put('http://127.0.0.1:8000/api/update', data, { headers })
              .then(
                    res => {
                        console.log(res)
                        that.isEditing = !that.isEditing
                        that.hasSaved = true
                    }
                )
                .catch(
                    err => {
                        console.log(err)
                    }
                )
           }
      }

//     methods: {
//       customFilter (item, queryText, itemText) {
//         const textOne = item.name.toLowerCase()
//         const textTwo = item.abbr.toLowerCase()
//         const searchText = queryText.toLowerCase()

//         return textOne.indexOf(searchText) > -1 ||
//           textTwo.indexOf(searchText) > -1
//       },
//       save () {
//         this.isEditing = !this.isEditing
//         this.hasSaved = true
//       },
//     },
}
</script>

<style scoped>
.font{
  font-family: Montserrat;
}
</style>

