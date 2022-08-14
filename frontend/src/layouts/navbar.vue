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
      <img class="bi" width="300" height="70" role="img" aria-label="" src = "../../assets/icon-left-font.png" />
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

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>