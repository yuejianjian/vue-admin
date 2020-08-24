<template>
    <div id="nav-wrap">
        <h1 class="logo"><img src="../../../assets/logo.png" alt=""></h1>
        <el-menu
        :default-active="defalutActive"
        class="el-menu-vertical-demo"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        >
        <template v-for="(item,index) in menunav">
            <el-submenu index="1" :key="index">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.meta.name}}</span>
                </template>
                <el-menu-item-group v-for="(items,indexs) in item.children" :key="indexs">             
                    <el-menu-item index="1-1">{{items.meta.name}}</el-menu-item>              
                </el-menu-item-group>           
            </el-submenu>
        </template>
       
        </el-menu>
    </div>
</template>
<script>
export default {
    name:'Nav',
    data(){
        return{
            menunav:[],
            
        }
    },
    computed: {
        defalutActive(){
          console.log(this.$route);
          return this.$route;
        }
    },
    mounted(){
        this.menunav =this.$router.options.routes;
        console.log( this.menunav );
    },
    methods:{
      
    }
}     
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
.logo {
  text-align: center;
  img { 
    margin: 28px auto 25px;
    width: 92px;   
  }
}
#nav-wrap{
    position: fixed;
    top:0;
    left:0px;
    width:$navMenu;
    height: 100vh;
    background-color: #344a5f;
}
</style>