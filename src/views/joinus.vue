<template>
    <div class='joinus'>
        <h1>公司招聘信息</h1>
        <div style="padding:20px 0 20px 0px;">
            <!-- div-left开始符 -->
            <div class='joinus-div'>
                <!-- spost开始符 -->
                <div class="spost div-left" v-for='tab in tabs'>
                    <heading>
                        <span style="color: rgb(0,51,102)">
                            <strong>{{tab.title}}</strong>
                        </span>
                    </heading>
                    <div>
                        <strong>{{tab.position}}</strong>
                    </div>
                    <div>{{tab.body}}</div>
                    <div>工作要求：{{tab.demand}}</div>
                    <p>联系方式：021-31185118人事部</p>
                    <p>&nbsp;</p>
                </div>
                <!-- spost结束符 -->
            </div>
            <!-- div-left结束符 -->
            <!-- div-left开始符 -->
        </div>
    </div>
</template>
<script>
import heading from "../components/heading";
export default {
    components: {
        heading,
    },
    data() {
        return {
            tabs: [
                {
                    title: "弱电设计工程师",
                    body: "项目前期方案、图纸设计及标书（主要完成技术部分，接到任务后进行项目调研，合理安排进度与配合人员，按时完成设计图纸和方案设计，必要时去用户方绍方案设计内容-PPT文件）",
                    position: "职位描述：",
                    demand: "满三年以上，有责任心，上进心，人品端正，适应出差"

                }, {
                    title: "ui设计师",
                    body: "项目前期方案、图纸设计及标书（主要完成技术部分，接到任务后进行项目调研，合理安排进度与配合人员，按时完成设计图纸和方案设计，必要时去用户方绍方案设计内容-PPT文件）",
                    position: "职位描述：",
                    demand: "满三年以上，有责任心，上进心，人品端正，适应出差"

                }, {
                    title: "后台工程师",
                    body: "项目前期方案、图纸设计及标书（主要完成技术部分，接到任务后进行项目调研，合理安排进度与配合人员，按时完成设计图纸和方案设计，必要时去用户方绍方案设计内容-PPT文件）",
                    position: "职位描述：",
                    demand: "满三年以上，有责任心，上进心，人品端正，适应出差"

                }, {
                    title: "web前端工程师",
                    body: "项目前期方案、图纸设计及标书（主要完成技术部分，接到任务后进行项目调研，合理安排进度与配合人员，按时完成设计图纸和方案设计，必要时去用户方绍方案设计内容-PPT文件）",
                    position: "职位描述：",
                    demand: "满三年以上，有责任心，上进心，人品端正，适应出差"

                }]
        }
    }, created() {
        //  debugger;
    }

}
</script>

<style>
.joinus {
    width: 1000px;
    margin: auto;
}

.div-left {
    float: left;
}

.joinus div.spost {
    line-height: 20px;
    width: 450px;
    padding: 0 25px;
}

.joinus :hover.spost {
    background-color: #e3e3e3;
}



.joinus div {
    font-size: 14px;
    line-height: 30px;
}

.w-min {
    background: #e5e5e5;
    float: left;
    margin-right: 20px;
}
</style>

