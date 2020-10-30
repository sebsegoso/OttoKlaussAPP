<template>
<div>
    <h1>Login:</h1>
    <v-form v-model="valid" class="form">
        <v-container>
            <h3>
                <v-icon dark>mdi-login</v-icon> Inicia sesión para acceder al
                sistema.
            </h3>
            <v-row>
                <!--iNPUT MAIL -->
                <v-col cols="12" sm="6">
                    <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" type="email" dark required></v-text-field>
                </v-col>
                <!--INPUT PASSWORD-->
                <v-col cols="12" sm="6">
                    <v-text-field v-model="user.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" dark :rules="[rules.required]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Contraseña" @click:append="show1 = !show1"></v-text-field>
                </v-col>
                <!--BUTTONS -->
                <v-col cols="12">
                    <v-btn class="boton" elevation="10" color="success" dark :disabled="disabledlogin" @click="signIn">Iniciar sesión</v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-btn class="boton" elevation="5" color="error" @click="signInWithGoogle"><i class="fab fa-google"></i>| Iniciar con Google</v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-btn class="boton" elevation="5">Regístrate</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";
export default {
    name: "Login",
    title() {
        return "Login | Otto Klauss";
    },
    data: () => ({
        valid: false,
        user: {
            email: "",
            password: "",
        },
        emailRules: [
            (v) => !!v || "Correo electrónico requerido",
            (v) => /.+@.+/.test(v) || "El correo electrónico ingresado no es válido",
        ],
        show1: false,
        rules: {
            required: (value) => !!value || "Contraseña requerida",
        },
    }),
    computed: {
        ...mapState("Auth", ["mensajePrueba"]),
        disabledlogin() {
            if (this.user.email.trim() == "" || this.user.password.trim() == "")
                return true;
            else return false;
        },
    },
    methods: {
        ...mapActions("Auth", ["signInWithGoogle", "signInWithEmailAndPass"]),
        signIn() {
            this.signInWithEmailAndPass(this.user);
        },
    },
};
</script>

<style lang="scss" scoped>
.form {
    background-color: #000;
    color: #fff;
    border-radius: 15px;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
}

.boton {
    width: 100%;
}

.fa-google {
    padding: 0 0.7rem;
}
</style>
