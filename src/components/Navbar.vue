<template>
  <v-navigation-drawer app class="pt-4" color="black lighten-3" mini-variant>
    <v-avatar
      v-for="n in 6"
      :key="n"
      :color="`grey ${n === 1 ? 'darken' : 'lighten'}-1`"
      :size="n === 1 ? 36 : 20"
      class="d-block text-center mx-auto mb-9"
    ></v-avatar>

    <template v-slot:append>
      <v-avatar
        color="grey lighten"
        size="36"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
</style>