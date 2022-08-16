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
            const { email, posts, like} = res
              this.posts = posts
              this.userLogged = email
              this.userLikes = like.liked
          })
          .catch((err) => console.log("err:", err));
    },
    beforeUpdate() {
        if (localStorage.getItem('reload')) {
            this.$router.go()
            localStorage.removeItem('reload');
        }
    },
    data() {
        return {
            posts: [],
            userLogged: null
        }
    }
}
</script>
<template>
    <div v-if="userLogged" class="container-lg">
        <div class="row">
            <div class="welcome-container col-lg-12">
                <h1 class="welcome text-center">Welcome to the blog {{ userLogged }}</h1>
            </div>
        </div>
        <AddPost/>
        <span v-if="posts.length === 0" class="ouups">Ouups..There are no posts to display !! But, you can create one.</span>
        <li v-for="post in posts" class="list-group-item">
        <Card 
            :likes="post.like.liked"
            :userLogged="userLogged"
            :user="post.user.email" 
            :content="post.content" 
            :url="post.url" 
            :commentarys="post.commentarys"
            :id="post.id"
/>
        </li>
    </div>  
</template>

<style scoped>
.ouups {
    color: #4E5166
}
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