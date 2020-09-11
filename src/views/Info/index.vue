<template>
    <div>      
        信息列表 
        <div  @click="toadd" style="margin:10px;">增加</div>
        <div  @click="jian" style="margin:10px;">减少</div>
        <div  @click="yibu" style="margin:10px;">异步</div>
        <div>{{num}}</div>
    </div>
</template>
<script>
export default {
    name:'Info',
    data(){
        return{
            
        }
    },
     computed:{
        num(){
            console.log(this.$store.getters.num);
            return this.$store.getters.num;
        }
    },
     methods:{
        toadd(){
            console.log(this.$store)
            this.$store.commit('toeadit');
            console.log(this.$store.state);
            //this.num =this.$store.state.app.num;
        },
        jian(){
             this.$store.commit('tojian');
             //this.num =this.$store.state.app.num;
        },
        yibu(){
            this.$store.dispatch('yibu');
            console.log(this.$store.state.app.num);
             //this.num =this.$store.state.app.num;
        }
    }

}     
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";

</style>