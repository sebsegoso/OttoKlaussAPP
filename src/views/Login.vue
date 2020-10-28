<template>
  <div>
    <h1>Login:</h1>
    <v-form v-model="valid" class="form">
      <v-container>
        <h3>Inicia sesión para acceder al sistema.</h3>
        <v-row>
          <!--iNPUT MAIL -->
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              type="email"
              required
            ></v-text-field>
          </v-col>
          <!--INPUT PASSWORD-->
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Contraseña"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <!--BUTTONS -->
          <v-col cols="12">
            <v-btn
              class="boton"
              elevation="10"
              color="primary"
              :disabled="disabledlogin"
              >Iniciar sesión</v-btn
            >
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn class="boton" elevation="5" color="error"
              >Iniciar con <i class="fab fa-google"></i> Google</v-btn
            >
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn class="boton" elevation="5">Crear cuenta</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  title() {
    return "Login | Otto Klauss";
  },
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail requerido",
      (v) => /.+@.+/.test(v) || "El formato del E-mail no es válido",
    ],
    password: "",
    show1: false,
    rules: {
      required: (value) => !!value || "Contraseña requerida",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  computed: {
    disabledlogin() {
      if (this.email.trim() == "" || this.password.trim() == "") return true;
      else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  background-color: #ccc;
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