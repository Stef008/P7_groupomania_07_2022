<script>

export default{
    name: "Post",
   
}

</script>

<template>

    <div class="card mb-3 mt-3 m-auto ">
        <div class="card-header">
            <img
                src="../../assets/logo-monochrome-black.png"
                class="mt-2 card-img-bottom logo"
                alt="Logo"
            />
            <i class="bi bi-x-circle delete"></i>
            
          

        </div>
   
        <img class="card-img-bottom" src="https://picsum.photos/400/200"/>
  <div class="card-body">
            <p class="card-text"></p>
            <div class="d-flex justify-content-between " >
                <p class="me-auto  card-text">
                    <small class="text-muted"></small> 
                </p> <button class="p-1 like">
                    <i class="bi bi-hand-thumbs-up" color="green"></i>
                    </button>
                <button class="dislike ">
                    <i class="bi bi-hand-thumbs-down" color="red"></i>
                </button>
            </div>
            <div class="d-flex gap-3">
                <img
                src="../../assets/logo-monochrome-pink.png"
                class="rounded-circle-input"
                alt="Logo"
            />
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Leave a comment" 
                    aria-label="Leave a comment" 
                >
                <button 
                    type="button" 
                    class="btn btn-secondary ms-auto rounded-pill" 
                    >Submit
                </button>
            </div>
        </div>

        </div>
</template>
<style scoped>
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
.delete{
    margin-left: auto;
    font-size: 1.5rem;
}
.delete:hover{
    color: #FD2D01;
}
.delete:hover, 
.like:hover, 
.dislike:hover{
    cursor: pointer;
    transform: scale(1.3);
}
.like{
    color: green;
}
.dislike{
    color: red;
}
.like, .dislike{
    border: none ; 
    background-color: inherit;
    font-size: 1.5rem;
}
.rounded-circle-input{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.5rem;
}
</style>