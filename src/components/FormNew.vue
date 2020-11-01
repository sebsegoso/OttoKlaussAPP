<template>
<div>
    <v-text-field label="Código" v-model="newProducto.codigo" required outlined></v-text-field>
    <v-text-field label="Nombre" v-model="newProducto.nombre" required outlined></v-text-field>
    <v-text-field label="Stock" v-model="newProducto.stock" required outlined></v-text-field>
    <v-text-field label="Precio" v-model="newProducto.precio" required outlined></v-text-field>

    <v-btn color="success" :disabled="disabledBoton" @click="agregarProducto()">
        <v-icon>mdi-plus</v-icon> Agregar
    </v-btn>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    data() {
        return {
            newProducto: {
                codigo: "A00",
                nombre: "",
                stock: "",
                precio: "",
            },
        };
    },
    methods: {
        ...mapActions(["addToy"]),
        agregarProducto() {
            this.$swal({
                title: "¿Quieres agregar el siguiente producto?",
                text: `
                Nombre: ${this.newProducto.nombre}
                | Código: ${this.newProducto.codigo}
                | Stock: ${this.newProducto.stock}
                | Precio: ${this.newProducto.precio}
                `,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.addToy(this.newProducto);
                    this.$swal(
                        "Producto agregado",
                        `El producto ${this.newProducto.nombre} ha sido agregado`,
                        "success"
                    );
                    this.clear()
                }
            });
        },
        clear() {
            this.newProducto.codigo = "";
            this.newProducto.nombre = "";
            this.newProducto.stock = "";
            this.newProducto.precio = "";
        },
    },
    computed: {
        ...mapGetters(["juguetesData"]),
        disabledBoton() {
            if (
                this.newProducto.codigo === "" ||
                this.newProducto.nombre === "" ||
                this.newProducto.stock === "" ||
                this.newProducto.precio === ""
            )
                return true;
            else return false;
        },
        matchCode() {},
    },
};
</script>
