<template>
    <div>
        <LayoutHeader />
        <LayoutMain />
        <LayoutNav/>
    </div>
</template>

<script>
import LayoutNav from './Components/Nav'
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
export default {
    name:'Layout',
    components:{ LayoutNav, LayoutHeader,LayoutMain},
    data(){
        return{
            
        }
    },

} 
</script>

<style scoped>

</style>