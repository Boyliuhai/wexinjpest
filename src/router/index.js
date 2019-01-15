import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoute from './staticRoute'
import store from '../store'
import whiteList from './whiteList'
import commonList from './commonList'
import Cookies from 'js-cookie'


var permissionList = []//用户权限表

function initRoute(router){
  // alert(permissionList.length);
   return new Promise((resolve) => {
       if(permissionList.length == 0){
           console.log("没有权限数据，正在获取")
           store.dispatch('auth/getNavList').then(() => {
               store.dispatch('auth/getPermissionList').then((res) => {//生成权限表
                   console.log(JSON.stringify(res));
                   console.log("权限列表生成完毕")
                   permissionList = res
                   res.forEach(function(v){
                       let routeItem = router.match(v.path)
                       if(routeItem){
                           routeItem.meta.permission = v.permission ? v.permission : []
                           routeItem.meta.name = v.name
                           routeItem.meta.status =  routeItem.meta.keepAlive;
                       }
                   })
                   resolve()
               })
           })
       } else{
           console.log("已有权限数据")
           resolve()
       }
   })
}

Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes:staticRoute,
})


// 路由跳转前验证
router.beforeEach((to, from, next) => {
  //alert("跳一跳");
  //to.meta.keepAlive = to.meta.keepAlive
  // 开启进度条
 // ls.start();
  
  // 判断用户是否处于登录状态
  // debugger
//   console.log("当前cookie的托肯"+Cookies.get('token'));
console.log("当前cookie的托肯"+Cookies.get('token'));
console.log("路由跳转:"+to.path);
 // alert("跳一跳"+to.path);
 // alert(store.state.user.isLogin);
  if(store.state.user.isLogin)
  {
    //是否登录
  //if (Auth.isLogin()) {
      // 如果当前处于登录状态，并且跳转地址为login，则自动跳回系统首页
      // 这种情况出现在手动修改地址栏地址时
      if (to.path === '/login') 
      {
        console.log("to.path = " +to.path);
          next({path: "/home", replace: true})
      } else if(to.path.indexOf("/error") >= 0)
      {
          // 防止因重定向到error页面造成beforeEach死循环
          console.log('进入错误终止页面');
          next()
      } else if(commonList.indexOf(to.path) >= 0)
      {
          console.log("处于commonist中，允许访问");
          next()
      }else
      {
        console.log('调用initRoute');
          initRoute(router).then(() => {//调用initRoute函数
              let isPermission = false
              console.log("进入权限判断")

              permissionList.forEach((v) => {
                  // 判断跳转的页面是否在权限列表中
                  if(v.path == to.fullPath){
                    console.log(v.path+" 在权限表里");
                      isPermission = true
                  }
              })
              // 没有权限时跳转到401页面
              if(!isPermission){
                console.log('拒绝访问');
                  next({path: "/error/401", replace: true})
              } else {
                  next()
              }
          })
      }
  } 
  else 
  {
      // 如果是免登陆的页面则直接进入，否则跳转到登录页面
      if (whiteList.indexOf(to.path) >= 0) 
      {
          permissionList = [];
          console.log('该页面无需登录即可访问')
          next()
      }else 
      {
          permissionList = [];
          next({path: "/login", replace: true})
          // 如果store中有token，同时Cookie中没有登录状态
          if(store.state.user.token){
              Message({
                  message: '登录超时，请重新登录'
              })
          }
         // NProgress.done()
      }
  }
})

export default router


