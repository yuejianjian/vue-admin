<template>
    <div id="main-wrap">
        <router-view />
       <!-- <div  @click="toadd">增加</div>
       <div  @click="jian">减少</div>
       <div  @click="yibu">异步</div>
        <div>{{num}}</div> -->
    </div>
    
</template>
<script>
export default {
    name:'Main',
    data(){
        return{
            num:0,
        }
    },
    methods:{
        // toadd(){
        //     console.log(this.$store)
        //     this.$store.commit('toeadit');
        //     this.num =this.$store.state.num;
        // },
        // jian(){
        //      this.$store.commit('tojian');
        //      this.num =this.$store.state.num;
        // },
        // yibu(){
        //     this.$store.dispatch('yibu');
        //      this.num =this.$store.state.num;
        // }
    }
}     
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap{
    position: fixed;
    left:$navMenu;
    top:$layoutHeader;
    width:100%;
    height:100%;
    background-color:#fff;
    border: 30px solid #f7f7f7;
}
</style>