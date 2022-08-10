<script>
import Commentary from "../layouts/commentary.vue";
export default{
    name: "Card",
    components: {
        Commentary,
    },
    props: ["user", "content", "url"]
   
}

</script>

<template>

    <div class="card mb-3 mt-3 m-auto ">
        <div class="card-header ">
            <i class="bi bi-person-circle"></i>
            <span>{{ user }}</span>
            <i class="bi bi-x-circle delete"></i>
        </div>
        <img class="card-img-bottom" :src="url"/>
    <div class="card-body">
        <p class="card-text"></p>
        
        <div class="card-post d-flex justify-content-between " >
            <div class="me-auto card-text">{{ content }}</div>
                <i class="like bi bi-hand-thumbs-up"></i>
                <!-- <i class="liked bi bi-hand-thumbs-up-fill"></i> -->
                <i class="dislike bi bi-hand-thumbs-down mt-1"></i>
                <!-- <i class="disliked bi bi-hand-thumbs-down-fill"></i> -->
            
        </div>
        <commentary/>
        <div class="d-flex gap-3">
            <img src="../../assets/logo-monochrome-black.png"
                 class="rounded-circle-input"
                 alt="Logo"
            />
            <input type="text" 
                   class="form-control" 
                   placeholder="Leave a comment" 
                   aria-label="Leave a comment" 
            >
            <button type="button" 
                    class="btn btn-secondary ms-auto rounded-pill" 
                    >Submit
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