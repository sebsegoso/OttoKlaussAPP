<template>
<div>

    <v-dialog v-model="dialog" max-width="100%">
        <FormEdit :producto="productoAEditar" @cerrar="dialog = false" />
    </v-dialog>

    <v-data-table dark dense :headers="headers" :items="juguetesData" :items-per-page="10" class="elevation-10 rounded-lg">
        <!--BOTONES -->
        <template v-slot:item.acciones="{ item }">
            <!--EDITAR -->
            <v-btn color="primary" small @click="editarProducto(item)" @click.stop="dialog = true">
                <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
            <!-- BORRAR -->

            <v-btn color="red" small @click="borrarProducto(item)">
                <v-icon dark> mdi-trash-can-outline </v-icon>
            </v-btn>
        </template>
    </v-data-table>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
import FormEdit from '../components/FormEdit'

export default {
    name: 'Data table',
    components: {
        FormEdit
    },
    data() {
        return {
            dialog: false,
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
            productoAEditar: null
        };
    },
    computed: {
        ...mapGetters(["juguetesData"]),
    },
    methods: {
        ...mapActions(['deleteToy']),
        editarProducto(item) {
            this.dialog = true
            console.log(item);
            this.productoAEditar = item
        },
        borrarProducto(item) {
            console.log(item);
            this.$swal({
                title: "¿Quieres eliminar",
                text: `${item.nombre}?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteToy(item.id)
                    this.$swal("Eliminado", `El producto ${item.nombre} ha sido eliminado`, "success");
                }
            });
        },

    },
};
</script>
