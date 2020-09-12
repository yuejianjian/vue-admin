import { Login,Logout } from '@/api/login'
import {setToken, removeToken, removeUserName, setUserName, getUserName } from '@/utils/app'


const state ={
    name:" 乐坚坚",
    num:1,
    token:'',
    username:getUserName()||'',
}
const getters ={
    num(state){
        return state.num;
    }
}
const mutations ={
    toeadit(state){
        console.log(state);
        state.num =state.num +1;
    },
    tojian(state){
        console.log(state)
        state.num =state.num -1;
    },
    //存token
    SET_TOKEN(state,value){
        state.token =value;
    },
    SET_USERNAME(state,value){
        state.username  =value;
    },

}

const actions={
    yibu(context){
        //context.commit('tojian')
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
             
              resolve()
              context.commit('tojian')
          },2000)
       })     
    },
    login({commit},params){
        return new Promise((resolve,reject) =>{
            Login(params).then((response) =>{
                let data = response.data.data;
                setToken(data.token);
                setUserName(data.username);
                commit('SET_TOKEN',data.token);
                commit('SET_USERNAME',data.username);
                resolve(response)

            }).catch(err =>{
                reject(err)
            })
        })
    },
    logout({commit}){
        return new Promise((resolve,reject) =>{
            Logout().then(response =>{
                let data = response.data;
                removeToken();
                //removeUserName();
                commit('SET_TOKEN', '');
                commit('SET_USERNAME', '');
                resolve(data);
            })
        })
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}