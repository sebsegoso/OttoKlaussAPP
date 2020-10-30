<template>
<v-data-table dark dense :headers="headers" :items="juguetesData" :items-per-page="10" class="elevation-10 rounded-lg">
    <template v-slot:item.acciones="{ item }">
        <v-btn color="primary" small @click="editarProducto(item)">
            <v-icon dark> mdi-pencil </v-icon>
        </v-btn>

        <v-btn color="red" small>
            <v-icon dark> mdi-trash-can-outline </v-icon>
        </v-btn>
    </template>
</v-data-table>
</template>

<script>
import {
    mapGetters
} from "vuex";

export default {
    data() {
        return {
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
                {
                    text: "Acciones",
                    value: "acciones",
                },
            ],
        };
    },
    computed: {
        ...mapGetters(["juguetesData"]),
    },
    methods: {
        editarProducto(item) {
            console.log(item)
        }
    },
};
</script>
