<script>

export default{
  name: "Navbar",
    data(){
      return {
        ifLogged: false
      }
    },
    created(){
      const token = localStorage.getItem("token")
      if (token != null){
        this.ifLogged = true
      }
    },
    methods: {
      logout(){
        localStorage.removeItem("token")
        this.$router.go()
      },
      login(){
        this.$router.go()
      }
  }
}  
</script>
<template>
  <div class="container">
    <header class="container-sm bg-white d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-4 mb-4 me-3">
      <img class="icon" width="300" height="70" role="img" aria-label="" src = "../../assets/icon-left-font.png" />
        <div class="col-md-3 text-center col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <button  @click="logout" v-if = "this.ifLogged" type="button" class="btn btn-outline-danger ">logout</button>
          <button @click="login" v-if = "!this.ifLogged" type="button" class="btn btn-outline-danger  me-2">Login</button>        
        </div>
    </header>
  </div>
</template>

<style scoped>

header{
  border-bottom: 1px solid #fd2d01 !important;
  position: fixed;
  width:100%;
  z-index: 1;
}
@media (max-width:358px){
  .icon{
    width: 200px;
    height: 45px;
  }
}

</style>