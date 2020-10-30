<template>
<div class="home">
    <v-container>
        <h3 v-show="usuario.displayName">
            Hola {{ usuario.displayName }} ({{ usuario.email }})
        </h3>
        <h1>Inventario de productos</h1>

        <v-row>
            <v-col cols="12" :md="4">
                <Accordion class="elevation-10 rounded-lg" />
            </v-col>
            <v-col cols="12" :md="8">
                <TablaUsuarios />
            </v-col>

        </v-row>
    </v-container>
</div>
</template>

<script>
import {
    mapGetters,
    mapState
} from "vuex";
import firebase from "firebase";
//Componentes
import Accordion from '../components/Accordion'
import TablaUsuarios from '../components/TablaUsuarios'

export default {
    name: "Home",
    components: {
        Accordion,
        TablaUsuarios
    },
    data() {
        return {};
    },
    title() {
        return "Inventario | Otto Klauss";
    },
    computed: {
        ...mapState('Auth', ["usuario"]),
    }
};
</script>
