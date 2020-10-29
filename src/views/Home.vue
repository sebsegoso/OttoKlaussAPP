<template>
<div class="home">
    <h1>home</h1>
    <h3>Hola {{user.displayName}}</h3>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Home',
    components: {},
    title(){
      return "Otto Klauss - Juguetería"
    },
    computed: {
      ...mapState(['user'])
    }
}
</script>
