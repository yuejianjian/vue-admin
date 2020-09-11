<template>
    <div id="main-wrap">
        <router-view />
    </div>
    
</template>
<script>
export default {
    name:'Main',
    data(){
        return{
            
        }
    },
    computed:{
       
    },
    methods:{
      
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