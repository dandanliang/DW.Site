<template>
    <div class="info">
        <div class="breadcrumb">
            <div>公司介绍
                <span style="margin: 0 5px;">/</span>
                <span style="color: #bfcbd9;"> {{pathName}}</span>
            </div>
        </div>
        <div class="left">
            <left-tabs></left-tabs>
        </div>
        <div class="right">
            <transition name="bounce">
                <router-view></router-view>
            </transition>
        </div>
        <div style="clear:both"></div>
    </div>
</template>
<script>
import leftTabs from "../components/leftTabs";
export default {
    components: {
        leftTabs
    },
    data() {
        return {

        };
    },
    computed: {
        pathName() {
            return this.$route.name;
        }
    }
}
</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    /* animation: bounce-in .5s inherit; */
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

.info {
    width: 1000px;
    margin: 0 auto 20px auto;
}

.info .breadcrumb {
    margin: 20px 0;
    border-bottom: 1px solid #e5e5e5;
}

.info .breadcrumb div {
    line-height: 30px;
}


.info .left {
    float: left;
}

.info .right {
    float: left;
}
</style>
