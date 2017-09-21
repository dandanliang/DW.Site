import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import about from '@/views/about'
import contact from '@/views/contact'
import cases from '@/views/cases'
import solutions from '@/views/solutions'
import culture from '@/views/culture'
import structure from '@/views/structure'
import certificate from '@/views/certificate'
import partners from '@/views/partners'
import fwkh from '@/views/fwkh'
import info from '@/views/info'

import jjcg from '@/views/jjcg'
import solutionsk from '@/views/solutionsk'
import itfw from '@/views/itfw'
import znh from '@/views/znh'
import system from '@/views/system'
import datacenter from '@/views/datacenter'
// 智能化
import hospital from '@/views/hospital'
import schools from '@/views/schools'
import buildings from '@/views/buildings'
import smalls from '@/views/smalls'
import business from '@/views/business'
// 成功案例
import success from '@/views/success'
// 加入我们
import joinus from '@/views/joinus'




Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/index',
            name: 'index',
            component: index
        }, {
            path: "/joinus",
            name: "joinus",
            component: joinus
        },
        {
            path: '/info',
            name: 'info',
            component: info,
            children: [{
                    path: '/',
                    redirect: "about"
                },
                {
                    path: 'partners',
                    "name": "合作伙伴",
                    component: partners
                }, {
                    path: 'fwkh',
                    "name": "服务客户",
                    component: fwkh
                }, {
                    path: 'certificate',
                    "name": "资质证书",
                    component: certificate
                }, {
                    path: 'structure',
                    "name": "组织结构",
                    component: structure
                },
                {
                    path: 'culture',
                    "name": "企业文化",
                    component: culture
                },
                {
                    path: 'about',
                    "name": "关于斗文",
                    component: about
                }
            ]
        }, {
            path: '/contact',
            name: 'contact',
            component: contact
        }, {
            path: "/solutionsk",
            name: "solutionsk",
            component: solutionsk,
            children: [{
                    path: "/",
                    redirect: "solutionsk"
                }, {
                    path: "itfw",
                    name: "IT外包服务",
                    component: itfw
                },
                {
                    path: "znh",
                    name: "建筑智能化",
                    component: znh
                },

                {
                    path: "datacenter",
                    name: "解决方案提供商",
                    component: datacenter
                }, {
                    path: "system",
                    name: "信息系统集成",
                    component: system
                }
            ]
        }, {
            path: "/success",
            name: "success",
            component: success,
            // children: [{
            //     path: "/",
            //     redirect: "cases"
            // }, {
            //     path: "",
            //     redirect: "cases"
            // }]


        }
        // {
        //     path: "znh",
        //     name: "建筑智能化",
        //     component: znh,
        //     children: [{
        //             path: "/",
        //             name: "hospital ",
        //             redirect: "hospital"
        //         },
        //         // {
        //         //         path: "/",
        //         //         name: "hospital ",
        //         //         component: hospital
        //         //     },
        //         {
        //             path: "schools",
        //             name: "schools",
        //             component: schools
        //         }, {
        //             path: "buildings",
        //             name: "楼宇智能化",
        //             component: buildings
        //         }, {
        //             path: "smalls",
        //             name: "小区智能化",
        //             component: smalls
        //         }, {
        //             path: "business",
        //             name: "商业智能化",
        //             component: business
        //         }
        //     ]
        // },
    ]
})