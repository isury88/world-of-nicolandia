<template>
  <div>
    <stats />

    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row justify="center" align="center">
      <v-card class="mt-5">
        <v-card-title>NICOLANDIA</v-card-title>
      </v-card>
    </v-row>
    <v-row justify="center" align="center">
      <v-card class="mt-5" width="100%">
        <v-card-text>
          <v-btn to="home">Home</v-btn>
          <v-btn to="vehicleShop">Vehicle Shop</v-btn>
          <v-btn to="shop">Shop</v-btn>
          <v-btn to="jobs">Jobs</v-btn>
          <v-btn to="school">School</v-btn>
          <v-btn to="library">Library</v-btn>
          <v-btn to="gym">Gym</v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Stats from '~/components/statistics'

export default {
  components: {
    Stats,
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>
