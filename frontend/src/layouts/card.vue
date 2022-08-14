<script>
import Commentary from "../layouts/commentary.vue";
import {url, headers} from "../services/fetch.js";

export default{
    name: "Card",
    components: {
        Commentary,
    },
    props: ["user", "content", "url", "commentarys","id", "userLogged"],
    data() {
        return {
            newCommentary: null,
        }
    },
    methods: {
        addCommentary(e) {
            const options = {
                headers: {...headers, 'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                    commentary: this.newCommentary
                })    
            }
            fetch(url + "posts/" + this.$props.id, options)
              
            .then(res => {
                if(res.status === 200) { 
                    return res.json()
                    } else {
                      throw new Error("failled to fecth posts")
                    }
                })  
                .then((res) => {
                    this.$router.go()
                })
                .catch((err) => console.log("err:", err))
        },
        deletePost(){
            const options = {
                headers: {...headers, 'Content-Type': 'application/json'},
                method: "DELETE",
            }
            fetch(url + "posts/" + this.$props.id, options)
                        
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else {
                throw new Error("failed to delete post")  
                }
            })
            .then((res) => {
                this.$router.go()
            })
            .catch((error) => console.log("error:", error))
        }
   }
}

</script>

<template>

    <div class="card mb-3 mt-3 m-auto ">
        <div class="card-header ">
            <i class="bi bi-person-circle"></i>
            <span>{{ user }}</span>
            <i v-if="userLogged === user || userLogged === 'stef@gmail.com'" @click="deletePost" class="bi bi-x-circle delete"></i>
        </div>
        <img class="card-img-bottom" v-if="url" :src="url"/>
    <div class="card-body">
        <p class="card-text"></p>
        
        <div class="card-post d-flex justify-content-between " >
            <div class="me-auto card-text">{{ content }}</div>
                <i class="like bi bi-hand-thumbs-up me-1"></i>
                <!-- <i class="liked bi bi-hand-thumbs-up-fill"></i> -->
                <i class="dislike bi bi-hand-thumbs-down mt-1"></i>
                <!-- <i class="disliked bi bi-hand-thumbs-down-fill"></i> -->
        </div>
        <div v-for="commentary in commentarys">
        <commentary :user="commentary.user.email" :content="commentary.content"/>
        </div>
        <div class="d-flex gap-3">
            <img src="../../assets/logo-monochrome-black.png"
                 class="rounded-circle-input"
                 alt="Logo"
            />
            <input type="text" 
                   class="form-control" 
                   placeholder="Leave a comment" 
                   aria-label="Leave a comment" 
                   v-model="newCommentary"
            >
            <button type="button" 
                    class="btn btn-secondary ms-auto rounded-pill" 
                    @click="addCommentary">Submit
            </button>
        </div>
    </div>
</div>

</template>

<style scoped>
.card-post{
    margin:1rem;
}
.card-text{
    margin: rem;
    font-weight: 500;
    font-size: 20px;
    color:#4E5166
}
@media (min-width: 768px) {
.card {
  width: 80%;
    }
}
 .card-header img {
    width: 40px;
}
.card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.bi-person-circle{
    width:2rem;
    font-size: 2rem;
    color: #4E5166;
}
.bi-person-circle::before {
    background-color: #FFD7D7;
    border-radius: 50%;
}
.delete{
    margin-left: auto;
    font-size: 1.5rem;
    color:#4E5166
}
.delete:hover{
    color: #FD2D01;
}
.like, .liked, .dislike, .disliked {
    font-size: 1.5rem;
    color:#4E5166
}
.delete:hover, 
.disliked:hover, 
.dislike:hover{
    cursor: pointer;
    transform: scale(1.3);
    color: #FD2D01;
}
.liked:hover,
.like:hover{
    cursor: pointer;
    transform: scale(1.3);
    color: green;
}
.rounded-circle-input{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.5rem;
}

</style>