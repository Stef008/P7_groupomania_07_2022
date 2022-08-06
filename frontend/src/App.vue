<script>
import Navbar from "./components/navbar.vue"

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

<style></style>

