import axios from '@/util/ajax'
import global from '@/global/gloabl.js'
import Cookies from 'js-cookie'
import Auth from '@/util/auth'
const LOGIN_URL = global.SERVER_URL+'user/login';
const REQUEST_NAVLILIST_URL = global.SERVER_URL+'user/getViewMenu';

const state = {
    token:'',
    navList:[]//菜单
}
const mutations={
    setNavList:(state,data)=>{
        console.log('调用setnavlist')
        state.navList = data;
        //设置初始默认的子菜单
    },

    setToken:(state,data)=>{
        if(data){
            Auth.setToken(data)//util中d
            Auth.setLoginStatus()
        }else{
            Auth.removeToken()
            Auth.removeLoginStatus()
        }
        state.token = data
    }
}

const actions={
    loginByEmail({ commit },userInfo){
        console.log("loginByEmail的参数:"+userInfo.userName);
        return new Promise((resolve)=>{
            axios({
                url:LOGIN_URL,
                method:'post',
                data:{
                    ...userInfo
                }
            }).then(res=>{
                console.log("loginByEmail回应 == "+res.status)
                if(res.status == '0'){
                    console.log(res.body.token);
                    commit('setToken',res.body.token);
                    commit('user/login',{name:res.body.name,loginName:userInfo.userName},{root:true});
                }
                resolve(res)//相当于传回去login页面
            });
        });
    },
    //登出
    logout({commit}) {
        return new Promise((resolve) => {
            console.log('退出');
            commit('setToken', '')
            commit('user/setName', '', { root: true })
            commit('user/removeCookie', '', { root: true })
            commit('tagNav/removeTagNav', '', {root: true})
            commit('user/removeLogin', '', { root: true })
            resolve()
        })
    },

      /**
     * 获取菜单
     * @param {*} store 
     */
    getNavList(store){
        const { commit ,dispatch,state,rootSate} = store //未来子模块之间传递数据
        return new Promise((resolve) =>{
            console.log("getNavlist调用");
            axios({
                url: REQUEST_NAVLILIST_URL,
                method: 'post',
                data: ''
            }).then((res) =>{
                commit("setNavList",res.body.page);
                resolve(res);
                return true;
            })
        })
    },

    // 将菜单列表扁平化形成权限列表
    getPermissionList({state}){
        return new Promise((resolve) =>{
        //     let permissionList = []
        //     // 将菜单数据扁平化为一级
        //     console.log("permissionList调用");
        //     console.log("permissionList的state.navList.length= "+state.navList.length);
        //    function flatNavList(arr){
        //         for(let v of arr){
        //             if(v.child && v.child.length){
        //                 flatNavList(v.child)
        //             } else{
        //                 permissionList.push(v)
        //             }
        //         }
        //     }

        //     flatNavList(state.navList)
        //     console.log("permissionList" + permissionList.length)
           // resolve(permissionList)

        //    console.log(JSON.stringify(state.navList));
        //     console.log("你好");
           
            let txt =[];
        //   for(x in state.navList.page)
        //   {
        //       txt = txt +state.navList.page[x];
        //   }
      txt = state.navList.page;
            console.log(JSON.stringify(txt));

           resolve(state.navList)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}