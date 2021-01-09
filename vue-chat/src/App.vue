<template>
<v-app>

    <MyHeader />
    <ChatBoard />
    

</v-app>
</template>

<script>
import ChatBoard from './components/ChatBoard';
import MyHeader from './components/MyHeader';

export default {
  name: 'App',

  components: {
    ChatBoard,
    MyHeader
  },

  data: () => ({
    //
  }),
};
</script>
