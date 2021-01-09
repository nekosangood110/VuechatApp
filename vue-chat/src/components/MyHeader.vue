<template>
    <v-row class="a">
      <v-col
        v-for="(bar, i) in bars"
        :key="i"
      >
          <v-toolbar :color="bar.class" :dark="bar.dark">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
      </v-col>
    </v-row>
</template>


<script>
  export default {
    data: () => ({
      bars: [
        { class: '', dark: true }
      ]
    }),
  }
</script>