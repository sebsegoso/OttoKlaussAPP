<template>
<div class="home">
    <h3 v-show="usuario.displayName">
        Hola {{ usuario.displayName }} ({{ usuario.email }})
    </h3>
    <h1>Inventario de productos</h1>
    <hr />

    <v-data-table :headers="headers" :items="juguetesData" :items-per-page="5" class="elevation-1"></v-data-table>
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

export default {
    name: "Home",
    components: {},
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
        return "Otto Klauss - Juguetería";
    },
    computed: {
        ...mapState('Auth', ["usuario"]),
        ...mapGetters(["juguetesData"]),
    }
};
</script>
