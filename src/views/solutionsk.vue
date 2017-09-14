<template>
    <div class='solutionsk'>
        <div class="breadcrumb">
            <div>解决方案
                <span style="margin: 0 5px;">/</span>
                <span style="color: #bfcbd9;"> {{pathName}}</span>
            </div>
        </div>
        <div class="left">
            <left-fa></left-fa>
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
import leftFa from "../components/leftFa";
export default {
    components: {
        leftFa,
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

.solutionsk {
    width: 1000px;
    margin: 0 auto 20px auto;
}

.solutionsk .breadcrumb {
    margin: 20px 0;
    border-bottom: 1px solid #e5e5e5;
}

.solutionsk .breadcrumb div {
    line-height: 30px;
}


.solutionsk .left {
    float: left;
}

.solutionsk .right {
    float: left;
}
</style>
