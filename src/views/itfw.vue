<template>
    <div class='itfw'>
        <div class='conenter'>
            <!-- <div class='title'>运维服务</div> -->
            <p>
                <strong>运维服务</strong>由于技术复杂，对专业水平要求非常高，斗文凭借品牌优势、技术优势、资金优势和人才优势向客户提供基于服务级别协议（SLA）的高质量的运维服务。 <img src='/static/img/jjfa/it/1.jpg'><br/> 斗文根据服务内容提供维保服务，及时处理故障，针对故障问题做分析并提供问题解决方案：</p>
            <!-- <ol>
                                            <li>备件支持</li>
                                            <li>硬件设备保修服务</li>
                                            <li>软件升级服务</li>
                                            <li> 设备迁移支持；</li>
                                            <li> 设备安装服务；</li>
                                            <li>系统和硬件故障诊断服务(包含远程技术支持、电话技术支持、现场支持)； </li>
                                            <li> 辅助故障定位服务(包含必要的远程技术支持、电话技术支持、现场支持)； </li>
                                            <li> 巡检服务，有规范的书面说明以及后续建议； </li>
                                            <li> 辅助技术评估，系统整合咨询； </li>
                                            <li>灾难恢复计划演练支持； </li>
                                            <li>技术资料分享、交流服务； </li>
                                        </ol> -->

            <p class=''>- 备件支持；</p>
            <p>- 硬件设备保修服务；</p>
            <p>- 软件升级服务； </p>
            <p>- 设备迁移支持；</p>
            <p>- 设备安装服务；</p>
            <p>- 系统和硬件故障诊断服务(包含远程技术支持、电话技术支持、现场支持)；</p>
            <p>- 辅助故障定位服务(包含必要的远程技术支持、电话技术支持、现场支持)；</p>
            <p>- 巡检服务，有规范的书面说明以及后续建议；</p>
            <p>- 辅助技术评估，系统整合咨询；</p>
            <p>- 灾难恢复计划演练支持； </p>
            <p>- 技术资料分享、交流服务；</p>
            <p>
                <strong>档案管理：</strong>维保设备资料建档，资料变更维护，维护历史建档，故障处理报告，巡检报告；年度维修报告。 斗文已经开发了一套基于计算机管理的服务流程，确保服务的每一步骤均在良好的控管之下：
            </p>
        </div>
    </div>
</template>
<script>
// import sln from "../components/sln";
import leftFa from "../components/leftFa";
export default {
    components: {
        // sln,
        leftFa
    },
    data() {
        return {
            slns: [{
                title: "医院智能化",
                imgurl: "/static/img/hospital.png",
                path: "/sln/hospital"
            }, {
                title: "学校智能化",
                imgurl: "/static/img/school.png",
                path: "/sln/school"
            }, {
                title: "楼宇智能化",
                imgurl: "/static/img/building.png",
                path: "/sln/building"
            }, {
                title: "小区智能化",
                imgurl: "/static/img/buildings.png",
                path: "/sln/buildings"
            }, {
                title: "商业智能化",
                imgurl: "/static/img/commercial.png",
                path: "/sln/commercial"
            }, {
                title: "学校智能化",
                imgurl: "/static/img/school.png",
                path: "/sln/school"
            }, {
                title: "楼宇智能化",
                imgurl: "/static/img/building.png",
                path: "/sln/building"
            }, {
                title: "小区智能化",
                imgurl: "/static/img/buildings.png",
                path: "/sln/buildings"
            }, {
                title: "商业智能化",
                imgurl: "/static/img/commercial.png",
                path: "/sln/commercial"
            }, {
                title: "学校智能化",
                imgurl: "/static/img/school.png",
                path: "/sln/school"
            }, {
                title: "楼宇智能化",
                imgurl: "/static/img/building.png",
                path: "/sln/building"
            }, {
                title: "小区智能化",
                imgurl: "/static/img/buildings.png",
                path: "/sln/buildings"
            }, {
                title: "商业智能化",
                imgurl: "/static/img/commercial.png",
                path: "/sln/commercial"
            }, {
                title: "学校智能化",
                imgurl: "/static/img/school.png",
                path: "/sln/school"
            }, {
                title: "楼宇智能化",
                imgurl: "/static/img/building.png",
                path: "/sln/building"
            }, {
                title: "小区智能化",
                imgurl: "/static/img/buildings.png",
                path: "/sln/buildings"
            }, {
                title: "商业智能化",
                imgurl: "/static/img/commercial.png",
                path: "/sln/commercial"
            }, {
                title: "学校智能化",
                imgurl: "/static/img/school.png",
                path: "/sln/school"
            }, {
                title: "楼宇智能化",
                imgurl: "/static/img/building.png",
                path: "/sln/building"
            }, {
                title: "小区智能化",
                imgurl: "/static/img/buildings.png",
                path: "/sln/buildings"
            }, {
                title: "商业智能化",
                imgurl: "/static/img/commercial.png",
                path: "/sln/commercial"
            }],
        };
    }
}
</script>
<style scoped>
.conenter {
    width: 830px;
    margin-left: 20px;
}

.title {
    font-size: 16px;
    line-height: 30px;
    font-weight: bolder;
}

p {
    line-height: 30px;
    font-size: 14px;
    text-index: 2em;
}













/* .conenter ol li {
    padding: 0;
    margin: 0;
} */
</style>
