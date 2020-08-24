<template>
    <div id="header-wrap">      
        顶部区域
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            
        }
    },


}     
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap{
    position: fixed;
    top:0;
    right:0;
    height:$layoutHeader;
    background-color:#fff;
    left:$navMenu;
}
</style>