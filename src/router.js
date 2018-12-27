const routers = [
    {
        path: '/',
        meta: {
            title: '经销商首页'
        },
        component: (resolve) => require(['./views/aindex'], resolve),
        //component: (resolve) => require(['./components/HelloFromVux'], resolve),
        // children: [
        //     {
        //         // 当 /user/:id/profile 匹配成功，
        //         // UserProfile 会被渲染在 User 的 <router-view> 中
        //         path: '/',
        //         meta: {
        //             title: '欢迎页'
        //         },
        //         component: (resolve) => require(['./components/Hello'], resolve)
        //     },
            
        // ]
    },
    {
        path: '/ordermenu',
        meta: {
            title: 'B2B商城订单'
        },
        component: (resolve) => require(['./views/ordermenu'], resolve),
    },
    {
        path: '/orderlist',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/orderlist'], resolve),
    },
    {
        path: '/orderdetail',
        meta: {
            title: '订单详情'
        },
        component: (resolve) => require(['./views/orderdetail'], resolve),
    },
    {
        path: '/billlist',
        meta: {
            title: '账单查询'
        },
        component: (resolve) => require(['./views/billlist'], resolve),
    },

    {
        path: '/aindex',
        meta: {
            title: '账单查询'
        },
        component: (resolve) => require(['./views/aindex'], resolve),
    },
    {
        path: '/contentDetail',
        meta: {
            title: 'B2B商城订单'
        },
        component: (resolve) => require(['./views/contentDetail'], resolve),
    },
    {
        path: '/testTemplate',
        meta: {
            title: 'B2B商城订单'
        },
        component: (resolve) => require(['./views/tab2Page/testTemplate'], resolve),
    },
];
export default routers;