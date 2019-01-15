import Cookies from 'js-cookie'

const state = {
    // 用户名
    name: '',
    loginName:'',
    isLogin:false,
    contractld:'',
}
const actions = {
    setContractld:({commit}, data) => {
        state.contractld = data;
    }
}
const mutations = {
    login:(state, data) => {
        console.log("login ---");
        state.name = data.name;
        state.loginName = data.loginName;
        state.isLogin = true;
    },
    setName: (state, data) => {
       // if(data){
         //   Cookies.set('userName', encodeURIComponent(data))
        //} else {
            //Cookies.remove('userName')
       // }
        state.name = data;
    },
    setContractld:(state, data) => {
        state.contractld = data;
    },
    setLoginName: (state, data) => {
        //if(data){
          //  Cookies.set('loginName', encodeURIComponent(data))
       // } else {
        //    Cookies.remove('loginName')
       // }
        state.loginName = data;
    },
    removeCookie:(state)=>{
        Cookies.remove('loginName');
        Cookies.remove('isLogin');
        Cookies.remove('token');//将token写到cookie里面去
        Cookies.remove('userName');
    },
    setLoginStatue: (state) => {
        state.isLogin = true;
        //验证通过
    },
    removeLogin: (state) => {
        state.isLogin = false;
    },
    isLogin:(state) =>{
        return state.isLogin;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}