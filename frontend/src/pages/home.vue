<script>
import AddPost from "../components/addPost.vue";
import Post from "../components/post.vue";

export default {
    name: "HomeVue",
    components: {
        AddPost,
        Post
    },
}
</script>
<template>
    <div class="container-lg">
        <div class="row">
            <div class="col-lg-12">
            </div>
        </div>
        <AddPost/>
        <Post/>
        <post/>
        <post/>
    </div>  
</template>

<style scoped>
h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4E5166;
    margin-block: .5rem;
}
</style>