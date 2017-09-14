<template>
    <div class="abImage" ref="abImage">
        <ul>
            <li v-for="roll in rolls"><img style="height:100px;width:150px;background-color:white;" :src="roll.imgurl" :title="roll.title" :alt="roll.title" /></li>
        </ul>
        <div ref="arr" class="arr">
            <a href="javascript:;" class="left" ref="left"></a>
            <a href="javascript:;" class="right" ref="right"></a>
        </div>
    </div>
</template>
<script>
import jquery from "jquery";
export default {
    data() {
        return {
            pic: 0,
            duration: 800,
            rolls: [
                { imgurl: "./static/hb/1.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/2.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/3.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/4.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/5.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/6.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/7.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/8.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/9.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/10.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/11.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/12.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/13.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/14.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/15.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/16.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/17.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/18.jpg", title: "合作伙伴" },
                { imgurl: "./static/hb/1.png", title: "合作伙伴" },
                { imgurl: "./static/hb/2.png", title: "合作伙伴" },
                { imgurl: "./static/hb/3.png", title: "合作伙伴" },
                { imgurl: "./static/hb/4.png", title: "合作伙伴" },
                { imgurl: "./static/hb/5.png", title: "合作伙伴" }
            ]
        };
    },
    mounted() {

        //获取显示图片的层
        let abImage = this.$refs.abImage;
        //获取ul
        let ul = abImage.children[0];
        //获取ul中所有的li
        let lis = ul.children;
        //显示图片的宽度
        let imgWidth = lis[0].offsetWidth + 6;
        //获取焦点层
        let arr = this.$refs.arr;
        //获取left和right
        let left = this.$refs.left;
        let right = this.$refs.right;
        let pic = this.pic;//该变量配合左右按键使用

        //因为要做无缝连接,所以把ul中的前5个li克隆追加到ul中
        ul.appendChild(ul.children[0].cloneNode(true));
        ul.appendChild(ul.children[1].cloneNode(true));
        ul.appendChild(ul.children[2].cloneNode(true));
        ul.appendChild(ul.children[3].cloneNode(true));
        ul.appendChild(ul.children[4].cloneNode(true));
        let timeId = null;
        timeId = setInterval(rightHandle, 1000);
        abImage.onmouseover = function() {
            jquery.Animation(arr, { "opacity": 1 }, { duration: this.duration });
            clearInterval(timeId);
        };
        abImage.onmouseout = function() {
            jquery.Animation(arr, { "opacity": 0 }, { duration: this.duration });
            timeId = setInterval(rightHandle, 1000);
        };


        //设置鼠标点击右边的按钮
        right.onclick = rightHandle;
        function rightHandle() {
            if (pic == lis.length - 5) {
                //假的5张换成真的5张
                pic = 0;
                ul.style.left = "0px";
            }
            pic++;
            jquery.Animation(ul, { "left": -pic * imgWidth }, { duration: this.duration });
        };
        left.onclick = leftHandle;
        function leftHandle() {
            if (pic == 0) {
                pic = lis.length - 5;
                ul.style.left = -(lis.length - 5) * imgWidth + "px";
            }
            pic--;
            jquery.Animation(ul, { "left": -pic * imgWidth }, { duration: this.duration });
        }
    },
    created() {

    }
}
</script>
<style scoped>
ul {
    margin: 0;
    padding: 0;
}

.abImage {
    width: 1000px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
}

.abImage ul {
    width: 397400px;
    position: absolute;
}

.abImage li {
    margin-right: 1px;
    float: left;
    list-style: none;
    margin-right: 6px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
}

.abImage li img {
    width: 100%;
    height: 100%;
}

.abImage .arr {
    width: 1000px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -25px;
    opacity: 0;
}

.abImage .arr a {
    width: 50px;
    height: 50px;
    position: absolute;
    /*opacity:0.5;*/
}

.abImage .arr .left {
    background: url(/static/roll/icon39.png) center no-repeat;
    left: 10px;
    top: 50%;
    margin-top: -25px;
}

.abImage .arr .right {
    background: url(/static/roll/icon40.png) center no-repeat;
    right: 10px;
    top: 50%;
    margin-top: -25px;
}
</style>
