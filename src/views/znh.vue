<template>
    <div class='znh'>
        <!-- <p>&nbsp;&nbsp;&nbsp;&nbsp;建筑智能化</p> -->
        <div class='aa'>
            <div class="jjfa">
                <div class="anlis right30">
                    <znhs :anliWidth="anliWidth" v-for="anli in anlis" :address='anli.address' :title="anli.title" :content="anli.content" :imgurl="anli.imgurl" :path="anli.path">
                        <div v-for='conter in conters'>
                            <div class='introduce'>{{conter.title}}</div>
                            <p></p>
                        </div>
                    </znhs>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
import znhs from "../components/znhs";
export default {
    components: {
        znhs
    },
    data() {
        return {
            anlis: [
                {
                    title: "医院智能化",
                    address: "江苏无锡",
                    // content: "无锡市惠山区人民医院弱电系统总承包商，负责全部弱电系统的设计、供货、安装、调试、维护及用户培训全系列服务。弱电部分超过十个子系统，包含有：综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                }, {
                    title: "学校智能化",
                    address: "江苏无锡",
                    // content: "随着科技的不断发展，国家对教育的重视程度的日益提升，学校设施智能化的要求也提上了一个台阶，当今是信息时代，随着电脑多媒体技术和网络技术的发展，信息技术对教育的影响和冲击已悄然兴起，人们普遍认识到将智能技术用于教学，将极大地促进教育发展和改善教学模式。因此，学校建筑智能化又有了新的定位。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                }, {
                    title: "楼宇智能化",
                    address: "江苏无锡",
                    // content: "智能大厦是通过对建筑物的结构、系统、服务和管理，以及运行之间的内在联系，以最优化的设计，提供一个投资合理又拥有高效率的优雅舒适、便利快捷、高速安全的环境空间。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                }, {
                    title: "小区智能化",
                    address: "江苏无锡",
                    // content: "无锡市惠山区人民医院弱电系统总承包商，负责全部弱电系统的设计、供货、安装、调试、维护及用户培训全系列服务。弱电部分超过十个子系统，包含有：综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                }, {
                    title: "商业智能化",
                    address: "江苏无锡",
                    // content: "无锡市惠山区人民医院弱电系统总承包商，负责全部弱电系统的设计、供货、安装、调试、维护及用户培训全系列服务。弱电部分超过十个子系统，包含有：综合布线系统、计算机网络系统、楼宇设备控制管理系统、综合安防系统、大屏幕显示及多媒体查询系统、背景音乐及公共广播系统、卫星接收及有线电。",
                    imgurl: "/static/img/anlis/1.jpg",
                    path: "/anlis/1"
                },





            ],
            conters: [
                {
                    title: "随着医院建筑在我国的蓬勃发展，营造良好的设施、优雅的就医环境、提供优质的医疗服务已成为医院运营必不可少的手段。智能化的医院建设的目的正是为了满足上述需求，将目前国内外先进的计算机技术、通信技术、网络技术、信息技术、自动化控制技术、办公自动化技术等运用在医院中，在提供温馨、舒适的就医和工作环境的前提下，减少管理人员、降低能量消耗、实现安全可靠运行、提高服务的响应速度，使建成后的医院高效、稳定的运营。在医院设计的要求中，要实现医疗现代化、建筑智能化、病房家庭化、其核心是建筑智能化，没有建筑智能化，就难以实现医疗现代化和病房家庭化。",
                }
            ]
        }

    }

}
</script>
<style scoped>
.introduce {
    /* margin: 10px 10px 0 10px; */
    /* background-color: red; */
    font-size: 14px;
    margin-left: 220px;
}

.right30 {
    margin-right: 30px;
}

.znh {
    width: 830px;
    /* margin-left: 20px; */
    height: 300px;
    /* padding: 20px 0; */
}

.znh .center p {
    font-size: 14px;
    color: #333;
}
</style>

