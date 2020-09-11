<template>
    <div>      
        信息分类
        {{num}}
    </div>
</template>
<script>
export default {
    name:'category',
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

}     
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";

</style>