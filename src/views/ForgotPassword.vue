<template>
<div id="app">
<v-app id="map">

    <v-app-bar
      app
      color="#63C5DA"
      overflow-hidden
    >
      <v-spacer />
        <v-avatar tile >
          <v-img src='/img/sjcmslogo.png'></v-img>
        </v-avatar>

        <v-toolbar-title class="px-3 title center">
          <h2>San Juan Establishment Crowd Monitoring</h2>
        </v-toolbar-title>
      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>

  <v-main>
    <v-container>
        <v-row
      class="mt-0"
      align="center"
      >
        <ForgotForm/>
      </v-row>
    </v-container>
  </v-main>

</v-app>
</div>

</template>

<script>
  import ForgotForm from './ForgotForm2'

  export default {
      name: 'ForgotPassword',
      components: {
          ForgotForm
      }
  }
</script>

<style scoped>
.title {
  color: white;
  font-family: 'Montserrat' !important;
}

.login,
  .image {
   min-height: 100vh;
}

#map {
  background-image: url("/img/bgsj_opacity.jpg");
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;

}

</style>
