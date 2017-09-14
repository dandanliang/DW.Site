<template>
    <div class="cases">
        <anli v-for="anli in anlis" :anliWidth="anliWidth" :title="anli.title" :content="anli.content" :imgurl="anli.imgurl" :path="anli.path"></anli>
    </div>
</template>
<script>
import anli from "../components/anli";
export default {
    components: {
        anli
    },
    data() {
        return {
            anliWidth: 245,
            anlis: [
                {
                    title: "无锡市惠山区人民医院",
                    content: "无锡市惠山区人民医院弱电系统总承包商，负责全部弱电系统的设计、供货、安装、调试、维护及用户培训全系列服务。弱电部分超过十个子系统，包含有：综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海永慈康复医院",
                    content: "上海永慈康复医院弱电总包，综合布线系统、计算机网络系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、程控交换系统、病房呼叫系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "华山医院宝山北院",
                    content: "综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电视系统、程控交换系统、病房呼叫系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海公安高等专科学校",
                    content: "综合布线系统、数字程控电话交换系统、有线电视系统、会议系统、LED显示及信息引导系统、校园广播系统、闭路电视系统CATV、一卡通系统、智能后勤管理系统、报警系统机房工程、多媒体教室、电子阅览室、微机室。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海闵联开发大厦",
                    content: "上海闵联大厦弱电系统建设总承包，计算机网络系统、综合布线系统、智能一卡通管理系统、有线电视系统接收系统、综合安全保卫系统、公共广播及紧急广播系统、多媒体会议系统、大屏幕显示及多媒体信息查询系统、数字程控电话通讯系统、机房工程、弱电防雷及接地系统等。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海斐讯科技园区",
                    content: "上海斐讯科技园区弱电分包、综合布线系统、计算机网络系统、智能一卡通管理系统、有线电视系统接收系统、综合安全保卫系统、公共广播及紧急广播系统、多媒体会议系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "景德镇鹭金昌江府",
                    content: "[项目地点：江西景德镇]综合布线系统、车库管理系统、电梯控制系统、智能一卡通管理系统、综合安全保卫系统、公共广播及紧急广播系统、多媒体会议系统、大屏幕显示及多媒体信息查询系统、机房工程、弱电防雷及接地系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海临港新城皇冠假日酒店",
                    content: "上海临港新城皇冠假日酒店（五星级）楼宇设施集成管理系统、综合布线系统、信息网络系统、安全防范系统、多媒体系统、机房系统、紧急广播及背景音乐系统、卫星及有限电视系统等。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "安徽铜陵铜都国际大酒店",
                    content: "楼宇设施集成管理系统、综合布线系统、信息网络系统、安全防范系统、多媒体系统、机房系统、紧急广播及背景音乐系统、卫星及有限电视系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },

            ],
        };
    }
}
</script>

<style scoped>
.cases {
    width: 830px;
    margin-left: 20px;
}
</style>

