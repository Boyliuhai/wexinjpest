const Layout = resolve => require(['../components/home'],resolve);


const staticRoute = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/test',
    component: resolve => require(['../components/test/test.vue'], resolve),
    meta: { title: '测试页面',keepAlive: true}     
  },
  {
    path:'/login',
    component: resolve => require(['../components/HelloWorld.vue'],resolve),
    meta:{title: '登录',keepAlive:true}
    //resolve是干什么用的
  },
  {
    path:'/home',
    component:Layout,
    component: resolve => require(['../components/home'],resolve),
    meta: { title: '首页' ,keepAlive:false},
    children:[
    ]
  },
  {
    path:'/CheckProject',
    component: resolve => require(['../components/Project/CheckProject.vue'], resolve),
    meta: { title: '项目管理' },
    children:[
    ]
  },
  {
    path:'/SelectProject',
    component: resolve => require(['../components/Project/SelectProject.vue'], resolve),
    meta: { title: '项目选择' },
    children:[
    ]
  },
  {
    path:'/selectbreak',
    component: resolve => require(['../components/selectbreak'], resolve),
    meta: { title: '违章管理' },
    children:[
    ]
  },
  {
    path:'/wuzichaxun',
    component: resolve => require(['../components/wuzichaxun'], resolve),
    meta: { title: '物资管理' },
    children:[
    ]
  },
  {
    path:'/zhanbanhui',
    component: resolve => require(['../components/zhanbanhui'], resolve),
    meta: { title: '站班会1' },
    children:[
    ]
  },
  {
    path:'/zhanbanhui1',
    component: resolve => require(['../components/zhanbanhui1'], resolve),
    meta: { title: '站班会2' },
    children:[
    ]
  },
  {
    path:'/zhanbanhui2',
    component: resolve => require(['../components/zhanbanhui2'], resolve),
    meta: { title: '站班会3' },
    children:[
    ]
  },
  {
    path:'/job',
    component: resolve => require(['../components/job'], resolve),
    meta: { title: '作业管理' },
    children:[
    ]
  },
  {
    path:'/quality',
    component: resolve => require(['../components/quality'], resolve),
    meta: { title: '质量控制' },
    children:[
    ]
  },
  {
    path:'/quality1',
    component: resolve => require(['../components/quality1'], resolve),
    meta: { title: '质量控制1' },
    children:[
    ]
  },
  {
    path:'/instrument',
    component: resolve => require(['../components/instrument'], resolve),
    meta: { title: '工器具管理' },
    children:[
    ]
  },
  {
    path: '/error',
    component: resolve => require(['../components/error'],resolve),
     meta: { title: 'error',keepAlive: true},
    children: [
        {
            path: '401',
            component:resolve => require(['../components/error/401'],resolve),
            meta: { title: 'error401',keepAlive: true}
        },
       {
            path: '403',
            component:resolve => require(['../components/error/403'],resolve)
        },
        {
            path: '404',
            component:resolve => require(['../components/error/404'],resolve),
            meta: { title: 'error401',keepAlive: true}
        },
       {
            path: '500',
            component:resolve => require(['../components/error/500'],resolve)
        },
      ]
    },
    {
      path: '*',
      redirect: '/error/404'
    },
]

export default staticRoute
