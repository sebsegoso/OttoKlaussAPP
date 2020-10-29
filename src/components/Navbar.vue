<template>
<div>
    <v-app-bar color="#000" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn outlined light>
            <router-link to="/">HOME</router-link>
        </v-btn>

        <v-btn outlined>
            <router-link to="/Login">INICIAR SESIÓN</router-link>
        </v-btn>

        <v-btn outlined>
            <router-link to="/">CERRAR SESIÓN</router-link>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="#000" dark>
        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="FOTO USUARIO" alt="FOTO USUARIO"></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        NOMBRE USUARIO
                    </v-list-item-title>
                    <v-list-item-subtitle>CORREO USUARIO</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title>My Files</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    name: "Navbar",
    data: () => ({
        drawer: false,
        group: null,
    }),
    computed: {
        ...mapState(['usuario'])
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>
