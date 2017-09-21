<template>
    <div class="index">
        <el-carousel :interval="interval" height="450px" arrow="always">
            <el-carousel-item v-for="item in carousels" :key="item">
                <img :src="item.url" :alt="item.title">
            </el-carousel-item>
        </el-carousel>
        <div class="index-center">
            <!-- aboutUs开始部分 -->
            <div class="aboutUs">
                <div class="abText">
                    <heading>关于斗文</heading>
                    <div class="mc al">
                        <p style='width:50%;float:left;margin-right:20px;'>
                            上海斗文计算机系统集成工程有限公司，始建于 2001 年，作为一家专业的系统集成商，始终致力于计算机、网络产品及智能化产品在中国市场的销售及系统集成服务。公司本着客户至上的服务宗旨，凭借着一流的专业人才、一流的产品方案，一流的技术和一流的服务，竭诚向各行业客户提供综合性的解决方案，凭借多年的行业背景，奠定了良好的客户基础，并具有强大的技术优势和经济实力。

                        </p>
                        <img src="/static/roll/dw.jpg" class='qyimg' alt="">

                        <p>——建筑智能化弱电工程领域：建筑智能化弱电工程咨询、总设计、项目管理、总集成、总承包、项目实施和维护等业务。其中，建筑智能化弱电工程涵盖：智能化办公大楼、智能化商务写字楼、智能化小区、智能培训中心、智能化商场等；
                        </p>
                        <p>——计算机信息系统领域：作为专业的系统集成商，斗文公司客户遍布金融、文教卫生、新闻媒介、交通运输及外商在华企业等不同行业，从产品、设计、实施和运维服务提供完整的网络安全解决方案；
                        </p>
                        <p>——IT外包服务领域：利用自身最优秀的IT专业化资源以及核心竞争力，来完善客户的信息化建设工作，始终以节约信息化成本、提高数字化质量和企业工作效率为终极目标，不断增强客户对外环境的应变能力。IT外包服务包括以下内容：信息化规划（咨询）、设备和软件选型、网络系统和应用软件系统建设、整个系统网络的日常维护管理和升级等。 斗文公司在经历了十多年的运营之后，形成了稳定、合理的组织架构，拥有各种特长的员工和弱电工程、计算机硬件、集成服务等方面的专家和技术人员以及优秀的管理人员。斗文公司的团队氛围是团结、合作、积极、进取的。公司与每一位员工一起携手创造共同的明天。
                        </p>
                    </div>

                </div>
                <!-- aboutUs结束部分 -->
            </div>
            <!-- 典型案例开始符 -->
            <heading>解决方案</heading>
            <div class="jjfa">
                <div class="slns">
                    <sln v-for="sln in slns" :title="sln.title" :path="sln.path"></sln>
                </div>
            </div>

            <div style="clear:both"></div>
            <!-- 典型案例结束符 -->
            <heading>典型案例</heading>
            <div class="jjfa">
                <div class="anlis">
                    <anli :anliWidth="anliWidth" v-for="anli in anlis" :address='anli.address' :title="anli.title" :content="anli.content" :imgurl="anli.imgurl" :path="anli.path"></anli>
                </div>

            </div>
            <div class='boxmore'>
                <router-link to="/cases" class='more'>查看更多</router-link>
            </div>
            <div style="clear:both"></div>
            <heading>合作伙伴</heading>
            <roll></roll>
        </div>
    </div>
</template>
<script>
import roll from "../components/roll";
import sln from "../components/sln";
import anli from "../components/anli";
import heading from "../components/heading";
export default {
    components: {
        roll,
        sln,
        anli,
        heading
    },
    data() {
        return {
            anliWidth: 300,
            interval: 3000,
            anlis: [
                {
                    title: "无锡市惠山区人民医院",
                    address: "江苏无锡",
                    content: "无锡市惠山区人民医院弱电系统总承包商，负责全部弱电系统的设计、供货、安装、调试、维护及用户培训全系列服务。弱电部分超过十个子系统，包含有：综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海永慈康复医院",
                    "heading": "中国上海",
                    content: "上海永慈康复医院弱电总包，综合布线系统、计算机网络系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、程控交换系统、病房呼叫系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "华山医院宝山北院",
                    "heading": "中国上海",
                    content: "综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电视系统、程控交换系统、病房呼叫系统。综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电视系统、程控交换系统、病房呼叫系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海公安高等专科学校",
                    "heading": "中国上海",
                    content: "综合布线系统、数字程控电话交换系统、有线电视系统、会议系统、LED显示及信息引导系统、校园广播系统、闭路电视系统CATV、一卡通系统、智能后勤管理系统、报警系统机房工程、多媒体教室、电子阅览室、微机室。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海闵联开发大厦",
                    "heading": "中国上海",
                    content: "上海闵联大厦弱电系统建设总承包，计算机网络系统、综合布线系统、智能一卡通管理系统、有线电视系统接收系统、综合安全保卫系统、公共广播及紧急广播系统、多媒体会议系统、大屏幕显示及多媒体信息查询系统、数字程控电话通讯系统、机房工程、弱电防雷及接地系统等。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },
                {
                    title: "上海斐讯科技园区",
                    content: "上海斐讯科技园区弱电分包、综合布线系统、计算机网络系统、智能一卡通管理系统、有线电视系统接收系统、综合安全保卫系统、公共广播及紧急广播系统、多媒体会议系统。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                }
            ],
            slns: [{
                title: "IT专业外包",
                // imgurl: "/static/img/hospital.png",
                path: "solutionsk/itfw"
            },
            {
                title: "建筑智能系统",
                // imgurl: "/static/img/school.png",
                path: "solutionsk/znh"
            }, {
                title: "待添加标题",
                // imgurl: "/static/img/building.png",
                // path: "/sln/building"
                path: "/solutionsk/datacenter"
            }, {
                title: "信息系统集成",
                // imgurl: "/static/img/buildings.png",
                path: "/sln/buildings"
            },
                //  {
                //     title: "商业智能化",
                //     imgurl: "/static/img/commercial.png",
                //     path: "/sln/commercial"
                // }



            ],
            carousels: [
                {
                    url: "./static/img/banner1.jpg",
                    title: "title1",
                    desc: "desc1"
                },
                {
                    url: "./static/img/banner2.jpg",
                    title: "title2",
                    desc: "desc2"
                },
                {
                    url: "./static/img/banner3.jpg",
                    title: "title3",
                    desc: "desc3"
                },
                {
                    url: "./static/img/banner4.jpg",
                    title: "title4",
                    desc: "desc4"
                }
            ],
            tabs: [{
                url: './static/img/culture1.jpg',
                title: '无锡市惠山区人民医院',
                text: "无锡市惠山区人民医院"
            }, {
                url: './static/img/culture1.jpg',
                title: '智能学校',
                text: "内容啦"
            }, {
                url: './static/img/culture1.jpg',
                title: '智能学校',
                text: "内容啦"
            }]
        };

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style scoped>
.qyimg {
    width: 300px;
    float:right;
}

.boxmore {
    text-align: center;
    /* margin-top: 30px; */
}

.more {

    color: #324157;
    text-decoration: none;
    border: 2px solid #324157;
    padding: 3px 25px;
    display: inline-block;
    margin: 10px;
    font-size: 20px;
}

.more:hover {
    /* opacity: ; */
    background: #324157;
    color: white;
    cursor: pointer;
}



.index-center {
    margin: 0 auto 20px auto;
    width: 1000px;
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

.w {
    width: 1000px;
    clear: both;
    /* background-color: red; */
}

.fl {
    float: left;
}

.solutions.fl2 {
    margin-left: 100px;
}

.fr {
    float: right;
}

.content {

    height: 600px;
    /* width: 100%; */
}

.content h3 {
    font-size: 18px;
    color: #2b2b2b;
    /* font-weight: normal; */
    height: 30px;
    line-height: 30px;
    text-align: center;
}

.max-solutions {
    width: 100%;
}

.content .solutions {
    width: 300px;
    height: 200px;
    background: red;
    /* float: left; */
    /* margin-right: 10px; */
    /* box-flex: 1; */
}

.content .solutions .img {
    width: 100%;
    height: 128px;
    background: blue;
}

.solutions.txt p {
    background: blue;
    opacity: 0.5;
    text-align: center;
}





.content .al-more {
    width: 120px;
    margin: 50px auto;
}

.content .al-more a {
    width: 120px;
    height: 42px;
    border: dotted 1px #00DFB9;
    /*border: dotted 1px red;*/
    font: 26px microsoft yahei;
    padding-top: 5px;
    color: #00DFB9;
    margin: 0 auto;
    text-align: center;
    position: absolute;
}

.content .al-more a:hover {
    color: #fff;
    background-color: #00DFB9;
}

.aboutUs {
    font-family: "Î¢ÈíÑÅºÚ", Arial;
}

.aboutUs .abText {
    width: 1000px;
    /* height: 294px; */
    margin: auto;
}

.aboutUs .abText .mt h1 {
    display: inline;
    font-weight: bold;
    padding-right: 35px;
    margin-right: 5px;
    font-size: 30px;
    color: #00dfb9;
    /* background: url(../images/tit7.png) right center no-repeat; */
}

.aboutUs .abText .mt span {
    font: bold 24px "Times New Roman";
    color: #adadad;
}

.aboutUs .abText .mc {
    width: 1000px;
    font-size: 14px;
    color: #666;
    margin: 50px 0;
}

.aboutUs .abText .mc p {
    text-indent: 2em;
}
</style>
