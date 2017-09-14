<template>
    <div class="anli" @click="goPath">
        <img :src="imgurl" :style="imgStyle" :alt="title">
        <div class="body" :style="bodyStyle">
            <div class="title">{{title}}</div>
            <div class="content">
                <strong>项目内容：</strong><br/>{{content}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgurl: "",
        anliWidth: {
            type: Number,
            default: 300
        },
        title: "",
        path: "",
        content: ""
    },
    computed: {
        imgStyle() {
            return { height: "200px", width: this.anliWidth + 'px' };
        },
        bodyStyle() {
            return { width: (this.anliWidth - 10) + 'px' };
        }
    },
    methods: {
        goPath() {
            //this.$router.push({ path: this.path });
        }
    }
}
</script>

<style scoped>
.anli {
    float: left;
    /* border: 1px solid #e5e5e5; */
    padding: 10px;
    margin: 5px;
    position: relative;
}


.anli .body {
    background-color: black;
    opacity: .5;
    z-index: 2;
    position: absolute;
    bottom: 14px;
    /* width: 290px; */
    left: 10px;
    padding-left: 10px;
    color: white;
}

.anli:hover .body {
    opacity: .85!important;
    height: 200px;
    width: 245px;
}

.anli .body .title {
    line-height: 42px;
    font-size: 17px;
    font-weight: bold;
}

.anli .body .content {
    display: none;
    font-size: 13px;
    padding-bottom: 10px;
}

.anli:hover .body .content {
    display: block!important;
}
</style>
