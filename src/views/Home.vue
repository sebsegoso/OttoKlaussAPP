<template>
<div class="home">
    <h1>home</h1>
    <h3>Hola {{user}}</h3>

    <ul>
        <li v-for="juguete in juguetes" :key="juguete.id">{{juguete.data.nombre}}</li>
    </ul>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    name: 'Home',
    components: {},
    title() {
        return "Otto Klauss - Juguetería"
    },
    computed: {
        ...mapState(['user', 'juguetes'])
    }

}
</script>
