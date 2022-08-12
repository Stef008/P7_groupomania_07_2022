<script>
import { url, headers } from "../services/fetch.js";

export default {
    name: "AddPost",
    data() {
        return {
            content: "",
            selectedFile: null
        }   
    },
    methods: {
        manageNewFile(e){
            this.selectedFile =  e.target.files[0];
        },
        submitPost(){
            const formData = new FormData()
            formData.append("content", this.content)
            formData.append("image", this.selectedFile)

            const options = {
                headers,
                method: "POST",
                body: formData,
            }

        fetch(url + "posts/", options)
        .then(res => {
            if(res.status === 200) { 
              return res.json()
            } else {
              throw new Error ("failled to fecth posts")
            }
        })  
        .then((res) => {
            this.$router.go()
        })
        .catch((error) => console.log("err:", error))
        }
    }
} 
</script>

<template>
    <div class="form-floating mt-3 ">
        <input class="form-control py-3" id="textarea" v-model="content"/>
    </div>
    <div class="d-flex">
        <label for="formFile" class="btn btn-secondary mt-1">Add Image</label>
        <span class="ms-3" v-if="selectedFile">{{ selectedFile.name }}</span>
        <input @change="manageNewFile" type="file" id="formFile" class="d-none"/>
        <button @click="submitPost" type="button" class="btn btn-danger mt-1 ms-auto">Add post</button>
    </div>

        <hr class="dropdown-divider mt-5 mb-3"/>
</template>

<style scoped>
.form-floating > div.form-control {  
    height: auto;
    min-height: 5rem;
}
.form-floating > input.form-control:empty:not(:focus)::before{
    content: "Your post here";
    color: #4e5166;
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
    color: #4e5166;
    font-weight: 500;

}
</style>