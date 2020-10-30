<template>
<div>
    <v-app-bar color="#000" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <h1>Otto Klauss</h1>

        <v-spacer />

        <v-menu :offset-x="true" open-on-hover left v-if="usuario !== ''">
            <template v-slot:activator="{ on, attrs }">
                <v-avatar v-bind="attrs" v-on="on">
                    <v-img :src="usuario.photoURL" alt="FOTO USUARIO"></v-img>
                </v-avatar>
            </template>

            <v-list color="#000">
                <v-list-item>
                    <v-btn @click="logOut" small color="red">
                        <v-icon>mdi-logout</v-icon>
                        cerrar sesion
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="#000" dark width="auto" class="rounded-r">
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

        <v-list nav>
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
        <template v-slot:append v-if="usuario !== ''">
            <v-divider />
            <div class="pa-2">
                <v-btn @click="logOut" x-large outlined color="red">
                    <v-icon>mdi-logout</v-icon>
                    cerrar sesion
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
