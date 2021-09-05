<template>
   <div>政策
     <div style="width:2000px;height:200px"> {{username}}</div>
   </div>
</template>

<script>

export default {

  data() {
    return {
      username:window.sessionStorage.getItem('username')

    };
  },
  created() {

  },
  computed: {

  },

  methods: {
  },
};
</script>
<style scoped>

</style>
