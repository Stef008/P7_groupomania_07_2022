<script>
import { url, headers } from "../services/fetch"
import axios from "axios"


function userLogin(email, password){
  const options ={
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }
  fetch(url + "auth/login", options)
    .then((res) => {
      if(res.ok)return res.json()
        res.text().then((err) => {
          const { error } = JSON.parse(err)
          this.error = error
          throw new Error(error)
      })
        throw new Error(JSON.stringify(res))
    })
    .then((res) => {
      createItemForReload()
      const token = res.token
      localStorage.setItem("token", token)
      this.$router.push("/home")
    })
    .catch((error) => {
      console.error( error )
    })
}

function createItemForReload() {
    localStorage.setItem("reload", Date.now());
}

export default {
  name: "LoginVue",
  data(){
  return {
     email: "",
     password: "",
     ctrlPassword: "",
     ctrlUserInvalid: false,
     error: null,
     loginForm: true
  }
},
  methods:{
    userLogin,
    formCtrl,
    changeForm(){
      this.loginForm = !this.loginForm
    },
  joinUp: async function(email,password, ctrlPassword) {
    const body= JSON.stringify({ 
      email, 
      password,
      ctrlPassword
    })
    const options ={
      method: 'POST',
      headers: {...headers,
        'Content-Type': 'application/json',
      }
    } 
    try {
      await axios.post(url + "auth/signup", body, options)
        this.$router.go()
    } catch (err) {
        const  error = err.response.data.error
          this.error = error
        throw new Error("Failed to signup:" + error)
      }
    }
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
    <form :class="this.ctrlUserInvalid ? 'error form' : ''">
    
      <img
        class="mb-4 d-block mx-auto"
        src="../../assets/logo-monochrome-pink.png"
        alt="Logo groupomania"
        width="60"
        height="60"/>

      <h1 class="h4 mb-3 fw-normal">
        {{this.loginForm ? "Please Sign in":"Please create your account"}}
      </h1>

      <div class="form-floating mb-1">
        <input
          type="email"
          class="form-control mb-1"
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
          class="form-control mb-1"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
          required="true"
          @invalid="formCtrl"/>
        <label for="floatingPassword">Password</label>
      </div>

      <div v-if="!loginForm" class="form-floating ">
        <input
          type="password"
          class="form-control mb-1"
          id="floatingCtrlPassword"
          placeholder="Comfirm Password"
          v-model="ctrlPassword"
          required="true"
          @invalid="formCtrl"/>
        <label for="floatingPassword">Confirm Password</label>
      </div>

      <div  v-if="ctrlUserInvalid" class="Error" >All fields are required</div>
      <div  v-if="!ctrlUserInvalid && error" class="Error" >{{ error }}</div>
      
      <button v-if="loginForm"
        class="w-100 btn btn-lg btn-danger" 
        type="submit" 
        @click.prevent="() => userLogin(this.email, this.password)"
        :disabled="ctrlUserInvalid">Sign in
      </button>
      <button v-else
        class="w-100 mt-3 btn btn-lg btn-danger" 
        type="submit" 
        @click.prevent="() => joinUp(this.email, this.password, this.ctrlPassword)"
        :disabled="ctrlUserInvalid">Join
      </button>      

      <p class="mt-2 mb-2" @click.prevent="changeForm">
        <a href="" class="link-danger">
          {{this.loginForm?"Create your account !":"Already an account ? Please logg in"}}
        </a>
      </p>
      <!-- <p class="mt-2 mb-1 text-muted">Email: {{ email }}</p>
      <p class="mb-1 text-muted">Password: {{ password }}</p>
      <p class="text-muted">Confirm Password: {{ ctrlPassword }}</p> -->

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


</style>
