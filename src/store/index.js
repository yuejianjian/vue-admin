import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:" 乐坚坚",
    num:1
  },
  mutations: {
    toeadit(state){
      console.log(state);
      state.num =state.num +1;
    },
    tojian(state){
      state.num =state.num -1;
    }
  },
  actions: {
    yibu(context){
      context.commit('tojian')
    //   return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         context.commit('tojian')
    //         resolve()
    //     },2000)
    //  })     
    }
  },
  modules: {}
});
