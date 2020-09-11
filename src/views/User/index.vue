<template>
    <div>      
        用户列表
        {{num}}
    </div>
</template>
<script>
export default {
    name:'User',
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