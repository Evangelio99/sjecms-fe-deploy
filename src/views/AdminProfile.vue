<template>
  <v-data-table
    :headers="headers"
    :items="survey"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title style="font-weight:bolder;font-family:Montserrat">User information</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              @click="isEditing = false"
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :disabled="true" v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.first_name" label="First Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.last_name" label="Last Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.gender" label="Gender"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :disabled="isEditing" v-model="password" label="Password"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :disabled="isEditing" v-model="c_pass" label="Confirm Password"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <!-- <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template> -->
  </v-data-table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminProfile',
  data(){
    return {
      user: '',
      search: '',
      dialog: false,
      isEditing: true,
      get_id: '',
      get_email:'',
      password: '',
      c_pass: '',
      headers: [
        {
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ID', value: 'id' },
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'Last_name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Email', value: 'email' },
        { text: 'Address', value: 'address' },
        { text: 'Email Verified At', value: 'email_verified_at' },
        { text: 'Created Date and Time', value: 'created_at' },
        { text: 'Updated Date and Time', value: 'updated_at' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      survey: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        address: '',
      },
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
      dialog (val) {
        val || this.close()
      },
  },

  created () {
    this.initialize()
  },

  methods: {
      initialize () {
      const that = this
      axios.post("https://sjecmsbe.herokuapp.com/api/adminview", {})
      .then(response => {
        console.log(response.data)
        that.survey = response.data.success
      })
      .catch(function (error) {
        console.error(error.response);
      });

      },

      editItem (item) {
        this.editedIndex = this.survey.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.get_id = Object.assign({}, item).id
        this.dialog = true
        this.isEditing = true
      },

      close () {
        this.dialog = false
        this.isEditing = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      
      save () {
          const 
          that = this,
          get_firstname = this.editedItem.first_name,
          get_lastname = this.editedItem.last_name,
          get_gender = this.editedItem.gender,
          get_email = this.editedItem.email,
          get_address = this.editedItem.address,
          get_pass = this.password,
          get_cpass = this.c_pass

          if(this.editedIndex > -1){
            confirm('Are you sure you want to save your changes?') 
            && 
            axios.put(`https://sjecmsbe.herokuapp.com/api/adminupdate/${ that.get_id }`,{
              first_name: get_firstname,
              last_name: get_lastname,
              gender: get_gender,
              email: get_email,
              address: get_address,
            })
            .then(response => {
              console.log(response.data)
              console.log(that.get_id)
              that.dialog = false
            })
            .catch(function (error) {
              console.error(error.response);
            });
            this.initialize()
          }else{
              axios.post('https://sjecmsbe.herokuapp.com/api/register', {
                first_name: get_firstname,
                last_name: get_lastname,
                gender: get_gender,
                email: get_email,
                address: get_address,
                password: get_pass,
                c_password: get_cpass
              })
              .then(
                  response => {
                      console.log(response)
                      console.log('new user created')
                      this.initialize()
                      that.dialog = false
                  }
              )
              .catch(
                  error => {
                      console.log(error.response)
                  }
              )
            }
      },

      deleteItem (item) {
        const that = this
        this.editedIndex = this.survey.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.get_id = Object.assign({}, item).id
        confirm('Are you sure you want to delete this item?') && 
        axios.delete(`https://sjecmsbe.herokuapp.com/api/delete/${ that.get_id }`, {})
        .then(response => {
          console.log(response)
          console.log(`user ${ that.get_id } info is deleted successfully!`)
          that.get_id = 0
          this.initialize()
        })
        .catch(function (error) {
          console.error(error);
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

