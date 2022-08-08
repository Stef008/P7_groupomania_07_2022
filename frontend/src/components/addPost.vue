<script>

export default {
    name: "AddPost",
} 
</script>

<template>
    <div class="form-floating mt-3 ">
        <div contenteditable  class="form-control py-3" id="textarea"/></div>
    <div class="d-flex">
        <label for="formFile" class="btn btn-secondary mt-1">Add Image</label>
        <span class="ms-3"></span>
        <input type="file" id="formFile" class="d-none"/>
        <button type="button" class="btn btn-danger mt-1 ms-auto">Add post</button>
    </div>

        <hr class="dropdown-divider mt-5 mb-5"/>
</template>

<style scoped>
.form-control {
      margin-top: 10rem;

}
@media(max-width: 768px) {
  .form-control {
  margin-top: 12rem;
  }}
.form-floating > div.form-control {  
    height: auto;
    min-height: 5rem;
}
.form-floating > div.form-control:empty:not(:focus)::before{
    content: "Your post here";
    color: #a0a0a0;
}
hr {
    border-bottom: 1px solid #fd2d0161; 
    box-shadow: 0px 5px 15px 1px #FD2D01;
}
label{
    display: grid;
    place-content: center;
}
span{
    padding: 0.6rem;

}
</style>