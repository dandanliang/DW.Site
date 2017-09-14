<template>
    <div class="footer">
        <div class="foot-link" style="padding:15px 0;">
            <div class="foot-center" style="position:relative">
                <div>
                    <ul>
                        <li v-for="foot in footlinks">
                            <router-link :to="foot.path">{{foot.title}}</router-link>
                        </li>
                    </ul>
                    <div style="clear:both"></div>
                </div>
                <div class="lineheight" style="margin-top:10px;">公司：上海斗文计算机系统集成工程有限公司</div>
                <div class="lineheight">地址：上海市 南京西路1717号会德丰国际广场 56楼5605室</div>
                <div class="lineheight">邮箱：qbm@dataware-system.com</div>
                <div class="lineheight">电话：
                    <b>021-31185118</b>
                </div>
                <div class="lineheight">传真：
                    <b>021-31185119</b>
                </div>
                <div style="float:right;position:absolute;right: 0;top: 0;margin-top: 15px;">
                    <img style="width:150px;margin-right:30px;" :src="ersrc" />
                    <img style="width:150px;" :src="erwxsrc" />
                </div>
            </div>
        </div>

        <div class="foot-info">
            <div class="foot-center">
                <span style="color:#939eab;">上海斗文计算机系统集成工程有限公司版权所有</span>
                <span style="color:#939eab;">沪公网安备 30000000000001号</span>
                <span>沪ICP备00000001号</span>
                <span>上海斗文计算机系统集成工程有限公司提供技术支持</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            footlinks: [
                { path: "/index", title: "首页" },
                { path: "/info/about", title: "公司介绍" },
                { path: "/solutionsk/itfw", title: "解决方案" },
                { path: "/success", title: "成功案例" },
                { path: "/joinus", title: "加入我们" },
                { path: "/contact", title: "联系我们" }
            ],
            ersrc: "./static/img/er.png",
            erwxsrc: "./static/img/er-weixin.png"
        };
    }
}
</script>
<style scoped>
.footer {
    clear: both;
}

.foot-link {
    background-color: #5c6f8a;
}

.foot-link ul {
    margin: 0;
    padding: 0;
}

.lineheight {
    font-size: 14px;
    line-height: 30px;
    color: #9da8b4;
}

.foot-link ul li {
    float: left;
    list-style-type: none;
    margin-right: 40px;
}

.foot-link ul li a:hover {
    color: white;
}

.foot-link ul li a {
    text-decoration: none;
    font-size: 14px;
    color: #bfcbd9;
}

.foot-info {
    background-color: #2a3648;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    color: #bfcbd9;
}

.foot-info span {
    margin-left: 5px;
}

.foot-center {
    margin: 0 auto;
    width: 1000px;
}
</style>
