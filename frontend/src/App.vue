<script>
import Navbar from "./layouts/navbar.vue"

export default {
  name:"App",
  components:{
    Navbar,
  }
}
</script>
<template>
<Navbar/>
<router-view/> 
</template>

<style>
#app{
  /* background-color:  #4E5166; */
    /* background-color:  #FFD7D7; */
background-color: #f5f5f5;
}
</style>

