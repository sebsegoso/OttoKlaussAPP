<template>
<v-app id="inspire">
    <Navbar />

    <v-main>
        <router-view id="main_view"></router-view>
    </v-main>
</v-app>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";
import Navbar from "./components/Navbar";

export default {
    name: "App",
    title() {
        return "Otto Klauss - Juguetería";
    },

    components: {
        Navbar,
    },

    data: () => ({
        //
    }),
    methods: {
        ...mapActions(["getToys", "probanding"]),
    },
    created() {
        this.getToys();
    },
};
</script>

<style lang="scss">
body {
    min-height: 100vh;

}

#inspire {
    background-color: #e1ad01;
}

#main_view {
    padding: 3%;
}
</style>
