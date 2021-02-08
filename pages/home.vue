<template>
  <div>
    <stats />
    <v-row>
      <v-btn class="text-right" to="start">MAP</v-btn>
      <h1>HOME</h1>
      <v-btn class="ma-5" @click="updateDay">go to next day</v-btn>
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
  methods: {
    updateDay() {
      this.$store.commit('UPDATE_DAY')
    },
  },
}
</script>

<style lang="scss" scoped></style>
