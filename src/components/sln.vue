<template>
    <div class="sln" @click="gopage">
        <!-- <img :src="imgurl" :alt="title"> -->
        <div>{{title}}</div>
    </div>
</template>
<script>
export default {
    props: {
        title: "",
        imgurl: "",
        path: ''
    },
    methods: {
        gopage() {
            this.$router.push({ path: this.path });
        }
    }
}
</script>

<style>
.sln {
    float: left;
    text-align: center;
    /* line-height: 60px;
    padding: 10px 20px; */
    cursor: pointer;
    width: 200px;
    height: 200px;
    top: 50%;
    /* margin: 10px 20px 10px 0; */
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    display: flex;
    /* margin-right: 35px; */
    margin-right: 47px;
}


.sln div {
    margin-top: 50px;
    margin-left: 50px;
}














/* .sln div {
    flex: 1;
} */

.sln:hover {
    background-color: #d1dbe5;
}

.sln img {
    margin: 0 5px;
    float: left;
    height: 40px;
    display: block;
    vertical-align: middle;
}

.sln div {
    line-height: 40px;
    float: left;
}

.sln div:hover {
    color: #20a0ff;
}
</style>
