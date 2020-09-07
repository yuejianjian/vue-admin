const state ={
    name:" 乐坚坚",
    num:1
}
const mutations ={
    toeadit(state){
        console.log(state);
        state.num =state.num +1;
    },
    tojian(state){
        console.log(state)
        state.num =state.num -1;
    }
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
      }
}

export default{
    state,
    mutations,
    actions
}