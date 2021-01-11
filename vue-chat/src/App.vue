<template>
  <v-app>
   
     <my-header></my-header>
     <chat-board></chat-board>
 
  </v-app>
</template>

<script>
import ChatBoard from './components/ChatBoard.vue';
import MyHeader from './components/MyHeader.vue';


export default {
  name: 'App',

  components: {
    MyHeader,
    ChatBoard,
  },

  data: () => ({
    //
  }),
};
</script>
