<template>
    <div>      
        {{msg|dataFormat}}
        <div>价格:{{show|isNullOrEmpty}}</div>
        <div>状态:{{status|statusName}}</div>
    </div>
</template>
<script>
export default {
    name:'Console',
    data(){
        return{
           msg:"姓名" ,
           show:100,
           status:10
        }
    },

    filters:{
        dataFormat(msg){
            return msg+"乐坚坚"
        }
    }
}     
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";

</style>