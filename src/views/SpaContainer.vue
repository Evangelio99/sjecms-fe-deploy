<template>
    <v-app id="app">
        <navbar ref="navbar"></navbar>

        <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

        <!-- <app-footer></app-footer> -->
    </v-app>

</template>

<script>
    import Navbar from '../components/NavBar'
    import Header from '../components/Header'
    // import Footer from '../components/Footer'
    export default {
        name: 'SpaContainer',
        components: {
            'navbar': Navbar,
            'app-header': Header,
            // 'app-footer': Footer
        }
    }
</script>

<style scoped>
/* .bg{
    background-color: aqua;
} */
</style>