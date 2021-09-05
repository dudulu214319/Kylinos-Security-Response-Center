<template>
   <div class="divp">
    
     <div class="div2">
        <div class="div1">
       
      

     </div>

     </div>
     <!-- <div class="div3">
        111111111

     </div> -->
     <span class="span1">222</span>
     
   </div>
</template>

<script>

export default {

  data() {
    return {
      name:'12121212dfndsfvnkdmv'

    };
  },
  created() {
    console.log(33333333333)

  },
  mounted(){
    console.log(22222222222)
  },
  computed: {

  },

  methods: {
    
  },
};
</script>
<style scoped>
.div1{
  width: 100px;
  height: 100px;
  background: red;
  /* margin: 30px auto ; */
  /* margin:30px auto; */

}
.div2{
   width: 200px;
  height: 200px;
  background: green;
}
.div3{
  width: 300px;
  height: 300px;
  background: blue;
  /* line-height: 300px; */
  padding: 20px 0px;
}
.divp{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  height: 100%;
}
.span1{
  margin:30px 0px 
}

</style>
