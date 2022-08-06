<script>

export default{
    name: "Navbar",
}
</script>
<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <router-link
          to="/home" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img class="bi me-5" width="300" height="70" role="img" aria-label="" src = "../../assets/icon-left-font.png" />
        </router-link>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/home" class="nav-link px-2 link-danger">Home</router-link></li>
      </ul>

      <div class="col-md-3 text-end">
        <router-link to="/login"><button type="button" class="btn btn-outline-danger me-2">Login</button></router-link>
        <router-link to="/login"><button type="button" class="btn btn-danger">Sign-up</button></router-link>
      </div>
    </header>
  </div>
</template>

<style scoped>
    header{
        border-bottom: 1px solid #fd2d01 !important;
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