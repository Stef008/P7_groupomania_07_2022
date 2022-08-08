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
</style>

