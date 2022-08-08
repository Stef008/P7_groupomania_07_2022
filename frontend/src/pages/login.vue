<script>

function ctrlUserId(email, password){
  console.log({email, password})

  if (email !== "stef@gmail.com") throw new Error("Email is not correct")
  if (password !== "123456") throw new Error("Password is not correct")

  const token = "token very secret"
  localStorage.setItem("token", token)
  this.$router.push("/home")
}

export default {
  name: "LoginVue",
  data(){
  return {
     email: "stef@gmail.com",
     password: "123456",
     ctrlUserInvalid: false,
     error: null
  }
},
  methods:{
    ctrlUserId,
    formCtrl
  },
  watch:{
    username(value) {
      this.error = null
      return value === "" ? this.formCtrl(false) : this.formCtrl(true)
    },
    password(value) {
      this.error = null
      return value === "" ? this.formCtrl(false) : this.formCtrl(true)
    }
  }
}

function formCtrl(ctrl){
  this.ctrlUserInvalid = !ctrl
}

</script>

<template>
  <main class="form-signin w-100 m-auto">
    <form :class="this.ctrlUserInvalid ? 'error form' : false">
    
      <img
        class="mb-4 d-block mx-auto"
        src="../../assets/logo-monochrome-pink.png"
        alt=""
        width="60"
        height="60"/>

      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating mb-1">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="email"
          required="true"
          @invalid="formCtrl"/>
        <label for="floatingInput">Email address</label>
      </div>
      
      <div class="form-floating ">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
          required="true"
          @invalid="formCtrl"/>
        <label for="floatingPassword">Password</label>
      </div>

      <div  v-if="ctrlUserInvalid" class="Error" >All fields are required</div>
      <div  v-if="!ctrlUserInvalid && error" class="Error" >{{error}}</div>
      
      <button 
        class="w-100 btn btn-lg btn-danger" 
        type="submit" 
        @click.prevent="() => ctrlUserId(this.email, this.password)"
        :disabled="ctrlUserInvalid">Sign in
      </button>

      <p class="mt-5 mb-3 text-muted">Email: {{ email }}</p>
      <p class="mt-5 mb-3 text-muted">Password: {{ password }}</p>

    </form>
  </main>
</template>

<style>

input:invalid{
  border: 1px solid #FD2D01;
}
.Error {
  color: #FD2D01;
  margin-bottom: 1rem;;
}
form{
  margin-top: 8rem;
}
@media(max-width: 768px) {
  form {
  margin-top: 10rem;
  }}

body {
  align-items: center;
  padding-bottom: 40px;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
