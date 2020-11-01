<template>
<v-card dark>
    <v-container>
        <h2>
            <v-icon>mdi-pencil</v-icon> Editar producto
        </h2>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Código" v-model="producto.codigo" required outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Nombre" v-model="producto.nombre" required outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Stock" v-model="producto.stock" required outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Precio" v-model="producto.precio" required outlined></v-text-field>
            </v-col>
        </v-row>

        <v-card-actions>
            <v-spacer></v-spacer>
            <!--<v-btn color="warning" :disabled="disabledBoton" @click="clear()">
                Limpiar formulario
            </v-btn>-->

            <v-btn color="success" :disabled="disabledBoton" @click="agregarProducto()">
                <v-icon>mdi-pencil</v-icon> Confirmar edición
            </v-btn>
        </v-card-actions>
    </v-container>
</v-card>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    name: "Edit",
    props: ["producto"],
    data() {
        return {};
    },
    methods: {
        ...mapActions(["editToy"]),
        agregarProducto() {
            this.$swal({
                title: "Confirmar edición",
                text: `
                Nombre: ${this.producto.nombre}
                | Código: ${this.producto.codigo}
                | Stock: ${this.producto.stock}
                | Precio: ${this.producto.precio}
                `,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.editToy(this.producto)
                    this.$swal(
                        "Producto agregado",
                        `El producto ${this.producto.nombre} ha sido editado`,
                        "success"
                    );
                    this.$emit('cerrar')
                }
            });
        },
        clear() {
            this.producto.codigo = "";
            this.producto.nombre = "";
            this.producto.stock = "";
            this.producto.precio = "";
        },
    },
    computed: {
        disabledBoton() {
            if (
                this.producto.codigo === "" ||
                this.producto.nombre === "" ||
                this.producto.stock === "" ||
                this.producto.precio === ""
            )
                return true;
            else return false;
        },
    },
};
</script>
