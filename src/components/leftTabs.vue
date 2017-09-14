<template>
    <el-menu theme="light" ref="tabs" @select="handleSelect" :default-active="activeIndex" :router="true" class="el-menu-demo" mode="vertical">
        <el-menu-item v-for="tab in tabs" class="menu-right" style="width:150px;text-align: center;" :index="tab.path">{{tab.title}}</el-menu-item>
    </el-menu>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: "1",
            tabs: [
                { title: "关于斗文", path: "/info/about" },
                { title: "企业文化", path: "/info/culture" },
                { title: "组织结构", path: "/info/structure" },
                { title: "资质证书", path: "/info/certificate" },
                { title: "合作伙伴", path: "/info/partners" },
                { title: "服务客户", path: "/info/fwkh" }
            ]
        };
    },
    mounted() {
        this.updatePath();
    },

    methods: {
        handleSelect(key, keyPath) {
            this.updatePath(keyPath);
        },
        updatePath(keyPath) {
            let _tabs = this.$refs.tabs.$children;
            for (let i = 0, l = _tabs.length; i < l; i++) {
                let temp = _tabs[i];
                if (keyPath) {
                    if (temp.index === keyPath[0]) {
                        temp.$el.classList.add("is-active");
                    } else {
                        temp.$el.classList.remove("is-active");
                    }
                } else {
                    if (this.$route.path === temp.index) {
                        temp.$el.classList.add("is-active");
                    } else {
                        temp.$el.classList.remove("is-active");
                    }
                }

            }
        }
    }
}
</script>
<style scoped>
/* .menu-right {} */
</style>
