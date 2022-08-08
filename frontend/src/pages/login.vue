<script>

function ctrlUserId(email, password){
  console.log({email, password})

  if (email !== "stef@gmail.com") throw new Error("Email is not correct")
  if (password !== "123456") throw new Error("Password is not correct")

  const token = "token very secret"
  localStorage.setItem("token", token)
}

export default {
  name: "LoginVue",
  data(){
  return {
     email: "stef@gmail.com",
     password: "123456"
  }
},
  methods:{
    ctrlUserId
  }
}

</script>

<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <img
        class="mb-4 d-block mx-auto"
        src="../../assets/logo-monochrome-pink.png"
        alt=""
        width="60"
        height="60"
      />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating mb-1">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating ">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      
      <button 
        class="w-100 btn btn-lg btn-danger" 
        type="submit" 
        @click.prevent="() => ctrlUserId(this.email, this.password) ">Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">Email: {{ email }}</p>
      <p class="mt-5 mb-3 text-muted">Password: {{ password }}</p>
    </form>
  </main>
</template>

<style>
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
  /* background-color: #f5f5f5; */
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
