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
@import url('https://fonts.googleapis.com/css2? family= Lato:ital,wght@0,300;0,400;0,700;0,900;1,700 & display=swap');

* {
  font-family: 'Lato', sans-serif;
  
}

</style>


