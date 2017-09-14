<template>
    <div class="jjcg">
        <div class="breadcrumb">
            <div>斗文系统
                <span style="margin: 0 5px;">/</span>
                <span style="color: #bfcbd9;"> {{pathName}}</span>
            </div>
        </div>
        <div class="left">
            <left-jjcg></left-jjcg>
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
import leftJjcg from "../components/leftJjcg";
export default {
    components: {
        leftJjcg
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

.jjcg {
    width: 1000px;
    margin: 0 auto 20px auto;
}

.jjcg .breadcrumb {
    margin: 20px 0;
    border-bottom: 1px solid #e5e5e5;
}

.jjcg .breadcrumb div {
    line-height: 30px;
}


.jjcg .left {
    float: left;
}

.jjcg .right {
    float: left;
}
</style>
