<script>
export default {
    name:"Commentary",
}
</script>
<template>
<div class="d-flex">
   <img
        src="../../assets/logo-monochrome-pink.png"
        class="card-img-top rounded-circle"
        alt="Logo"/> 
    <div class="d-flex flex-column remark  ms-3 ps-3 p-1">    
        <p>YOYO</p>
        <p>Whaou Super !</p>
    </div>
</div>
</template>

<style scoped>
.remark {
    background-color: #FFD7D7;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 10px;

}

div img {
    width:30px;
    height:30px;
    margin-top: 1rem;
}

.d-flex p {
    margin-bottom: 0;
    margin-top: 2px
}
.d-flex p:nth-child(1){
    font-weight: 500;
}
</style>