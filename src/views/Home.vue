<template>
<div class="home">
    <h3 v-show="usuario.displayName">
        Hola {{ usuario.displayName }} ({{ usuario.email }})
    </h3>
    <h1>Inventario de productos</h1>

    <v-row>
        <v-col cols="12" :md="4">
            <Accordion class="elevation-10 rounded-lg" />
        </v-col>
        <v-col cols="12" :md="8">
            <v-data-table dark dense :headers="headers" :items="juguetesData" :items-per-page="10" class="elevation-10 rounded-lg"></v-data-table>
        </v-col>

    </v-row>
</div>
</template>
</div>
</template>

<script>
import {
    mapGetters,
    mapState
} from "vuex";
import firebase from "firebase";

import Accordion from '../components/Accordion'

export default {
    name: "Home",
    components: {
        Accordion
    },
    data() {
        return {
            user: "",
            headers: [{
                    text: "Código",
                    align: "start",
                    value: "codigo",
                },
                {
                    text: "Nombre",
                    value: "nombre",
                },
                {
                    text: "Stock",
                    value: "stock",
                },
                {
                    text: "Precio",
                    value: "precio",
                },
            ],
        };
    },
    title() {
        return "Inventario | Otto Klauss";
    },
    computed: {
        ...mapState('Auth', ["usuario"]),
        ...mapGetters(["juguetesData"]),
    }
};
</script>
