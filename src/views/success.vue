<template>
    <div class="succees">
        <div class='conter'>

            <heading></heading>
            <div class='max clearfix' v-for='succee in succees'>
                <div class='img'><img :src="succee.imgUrl" alt="" style="width:390px;height:210px;"></div>
                <div class='txt'>
                    <p class='title-a'>{{succee.destination}}</p>
                    <p class='title-b'>{{succee.content}}</p>
                    <p class='txt-p'>{{succee.txt}}
                    </p>
                </div>
            </div>
            <!-- 下一页 -->
            <div class="number">
                <span class="disabled">首页</span>
                <span class="disabled">上一页</span>
                <span class="current">1</span>
                <span class="disabled">下一页</span>
                <span class="disabled">末页</span>
            </div>

        </div>
    </div>
</template>
<script>
import heading from "../components/heading";
import successa from "../components/successa";
export default {
    components: {
        heading,
        // successa
    }, data() {
        return {
            succees: [

                {
                    imgUrl: "static/img/anlis/03.jpg",
                    destination: "上海斐讯科技园区",
                    title: "",
                    content: "",
                    txt: "上海临港新城皇冠假日酒店（五星级）楼 宇设施集成管理系统、综合布线系统、信 息网络系统、安全防范系统、多媒体系统、 机房系统、紧急广播及背景音响系统、卫 星及有线电视系统等。"
                }, {
                    imgUrl: "static/img/anlis/01.jpg",
                    destination: "景德镇鹭金昌江符",
                    title: "",
                    content: "",
                    txt: "上海临港新城皇冠假日酒店（五星级）楼 宇设施集成管理系统、综合布线系统、信 息网络系统、安全防范系统、多媒体系统、 机房系统、紧急广播及背景音响系统、卫 星及有线电视系统等。"
                },
                {
                    imgUrl: "static/img/anlis/1.jpg",
                    destination: "无锡市惠山区人民医院海",
                    title: "",
                    content: "",
                    txt: "上海临港新城皇冠假日酒店（五星级）楼 宇设施集成管理系统、综合布线系统、信 息网络系统、安全防范系统、多媒体系统、 机房系统、紧急广播及背景音响系统、卫 星及有线电视系统等。"
                }
            ]
        }
    }

}
</script>
<style scoped>
.number {
    text-align: center;
    line-height: 50px;
}

.number .disabled {
    border-bottom: medium none;
    border-left: medium none;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 10px;
    background: none transparent scroll repeat 0 0;
    color: #666!important;
    font-size: 12px!important;
    border-top: medium none;
    border-right: medium none;
    padding-top: 6px;
    line-height: 17px;
    /* float: left; */
    height: 25px;
}

.number .current {
    display: inline-block;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin: 0 autol;
    text-align: center;
    background: #bfcbd9;
    line-height: 30px;
    color: white;
}

.clearfix::after {
    display: block;
    content: ".";
    clear: both;

    overflow: hidden;
    font-size: 0;
    height: 0;
}

.clearfix {
    zoom: 1;
}

.succees {
    width: 1000px;
    margin: auto;
}


.max {
    /* background-color: red; */
    width: 100%;
    margin-bottom: 15px;
    padding: 10px 0;
}


.conter .img {
    border: 1px solid #bfcbd9;
    text-align: center;
    margin: auto;
    width: 400px;
    padding: 5px 0;
    text-align: center;
    /* height: 240px; */
    float: left;
    margin-right: 30px;
    /* clear: both; */
}

.conter .img:hover {
    border: 1px solid #e07d71;
}

.conter .txt p {
    line-height: 22px;
}

.title-a,
.title-b {
    font-weight: bold;
}

.txt-p {
    line-height: 20px;
    /* font-weight: bold; */
    font-size: 14px;
}

.title-b {
    font-size: 14px;
}

.conter .img img {
    vertical-align: middle
}

.conter .txt {
    width: 500px;
    float: left;
}

.txt .title {
    font-size: 15px;
    color: #000;
}
</style>

