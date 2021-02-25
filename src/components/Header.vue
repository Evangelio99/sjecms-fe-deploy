<template>
    <v-app-bar app color="#63C5DA" dark>
        <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>
        <v-avatar tile >
          <v-img src='/img/sjcmslogo.png'></v-img>
        </v-avatar>
        <v-toolbar-title class="px-3 title center ">San Juan Crowd Control Monitoring System</v-toolbar-title>
    </v-app-bar>
</template>

<style scoped>
.title {
  color: white;
  font-family: 'Montserrat' !important;
  font-weight: bold;
}
</style>