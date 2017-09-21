<template>
    <div class='contact'>

        <div style="padding:20px 0 20px 0px;">

            <div>
                <span>
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站：</span>www.dataware-system.com</span>
            </div>
            <div>
                <span>
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱：</span>qbm@dataware-system.com</span>
            </div>
            <div>
                <span>
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话：</span>021-31185118</span>
            </div>
            <div>
                <span>
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传真：</span>021-31185119</span>
            </div>
        </div>
        <div style="width:1000px;height:550px;">
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency='yes' style="width:1000px;height:550px;margin:0 auto;overflow: hidden;" src="/static/map.html"></iframe>
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

        }
    }

}
</script>

<style>
.div-left {
    float: left;
}

.contact div.spost {
    line-height: 20px;
    width: 450px;
    padding: 0 25px;
}

.contact :hover.spost {
    background-color: #e3e3e3;
}

.contact {

    width: 1000px;
    margin: auto;
}

.contact div {
    font-size: 14px;
    line-height: 30px;
}

.w-min {
    background: #e5e5e5;
    float: left;
    margin-right: 20px;
}
</style>

