<script>
import AddPost from "../components/addPost.vue";
import Card from "../layouts/card.vue";
import { url } from "../services/fetch.js";

export default {
    name: "HomeVue",
    components: {
        AddPost,
        Card
    },
    beforeCreate() {
        const token = localStorage.getItem("token")
        if (token == null){
            this.$router.push("/login")
        }
    },
    mounted(){
        const options = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
        fetch(url + "posts", options)
          .then(res => {
            if(res.status === 200) { 
              return res.json()
            } else {
              throw new Error ("failled to fecth posts")
            }
          })
          .then((res) => {
            const { email, posts} = res
              this.posts = posts
              this.email = email
          })
          .catch((err) => console.log("err:", err));
    },
    data() {
        return {
            posts: [],
            email: null
        }
    }
}
</script>
<template>
    <div v-if="email" class="container-lg">
        <div class="row">
            <div class="welcome-container col-lg-12">
                <h1 class="welcome text-center">Welcome to the blog {{ email }}</h1>
            </div>
        </div>
        <AddPost/>
        <li v-for="post in posts" class="list-group-item">
        <Card 
            :email="email"
            :user="post.user" 
            :content="post.content" 
            :url="post.url" 
            :commentarys="post.commentarys"/>
        </li>
    </div>  
</template>

<style scoped>
.container-lg {
    width: 75%
}
.welcome-container{
    margin-top: 8rem;
}
@media(max-width: 768px) {
  .welcome-container {
  margin-top: 11rem;
  }} 
h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4E5166;
    margin-block: .5rem;
}
</style>