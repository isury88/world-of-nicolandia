<template>
  <v-row>
    <v-col cols="5" class="text-center">
      <v-list>
        <v-list-item
          ><span class="text-left" style="width: 100px">Energy</span>
          <v-progress-linear value="100" class="ml-5"></v-progress-linear
        ></v-list-item>
        <v-list-item
          ><span class="text-left" style="width: 100px">Health</span>
          <v-progress-linear value="100" class="ml-5"></v-progress-linear
        ></v-list-item>
        <v-list-item
          ><span class="text-left" style="width: 100px">Happiness</span>
          <v-progress-linear value="100" class="ml-5"></v-progress-linear
        ></v-list-item>
      </v-list>
    </v-col>
    <v-col cols="4" class="text-center">
      <v-icon size="18">mdi-currency-gbp</v-icon> 300
    </v-col>
    <v-col cols="3" class="text-center">
      <v-list>
        <v-list-item
          ><v-icon v-if="user.gender === 'girl'" size="18" class="mr-5"
            >mdi-human-female</v-icon
          >
          <v-icon v-else size="18" class="mr-5">mdi-human-male</v-icon>
          {{ user.name }}</v-list-item
        >
        <v-list-item
          ><v-icon size="18" class="mr-5">mdi-calendar-clock</v-icon>Day:
          {{ user.day }}</v-list-item
        >
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Stats',
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style lang="scss" scoped></style>
