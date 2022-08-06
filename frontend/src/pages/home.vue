<script>
import AddPost from "../components/addPost.vue";
import Card from "../layouts/card.vue";

export default {
    name: "HomeVue",
    components: {
        AddPost,
        Card
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
        <Card/>
        <Card/>
        <Card/>
    </div>  
</template>

<style scoped>
.container-lg {
    width: 75%
}
h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4E5166;
    margin-block: .5rem;
}
</style>