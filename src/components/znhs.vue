<template>
    <div class="anli" @click="goPath">
        <div class='left'>
            <img :src="imgurl" :style="imgStyle" :alt="title">
        </div>
        <div class="body right" :style="bodyStyle">
            <div class="title">{{title}}</div>
            <div class="content">
                <strong>项目内容：</strong><br/>{{content}}</div>
        </div>
        <div class='txt'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgurl: "",
        anliWidth: {
            type: Number,
            default: 200
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
.txt {
    padding: 0 10px;
}

.left {
    float: left;
}

.anli {
    float: left;
    /* border: 1px solid #e5e5e5; */
    padding: 10px;
    margin: 5px;
    position: relative;
    /* margin-right: 20px; */
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


/* .anli:hover .body {
    opacity: .85!important;
    height: 200px;
    width: 245px;
} */

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







/* .anli:hover .body .content {
    display: block!important;
} */
</style>
