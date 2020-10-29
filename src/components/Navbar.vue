<template>
<div>
    <v-app-bar color="#000" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer />

        <v-btn outlined light>
            <router-link to="/">HOME</router-link>
        </v-btn>

        <v-btn @click="logOut" outlined v-if="usuario !== ''">
            CERRAR SESIÓN
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="#000" dark width="auto">
        <v-list v-if="usuario !== ''">
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img :src="usuario.photoURL" alt="FOTO USUARIO"></v-img>
                </v-list-item-avatar>
                <v-list-item-title class="title">
                    {{ usuario.displayName }}
                </v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-subtitle>{{ usuario.email }}</v-list-item-subtitle>
            </v-list-item>
        </v-list>

        <v-list v-else>
            <v-list-item>
                <v-list-item-title> No has iniciado sesión </v-list-item-title>
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

        <template v-slot:append>
            <div class="pa-2">
                <v-btn @click="logOut" color="red" outlined v-if="usuario !== ''">
                    CERRAR SESIÓN
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";
export default {
    name: "Navbar",
    data: () => ({
        drawer: false,
        group: null,
    }),
    computed: {
        ...mapState("Auth", ["usuario"]),
    },
    methods: {
        ...mapActions("Auth", ["logOut"]),
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>
