<template>
    <!--组件的结构-->
    <!--组件的结构-->
    <div id = "root">
        <Test/>
        <Test2/>
        <Test3/>
    </div>
</template>

<script>
    //引入主键
    import Test from './components/Test'
    import Test2 from './components/Test2'
    import Test3 from './components/Test3'
    // <!--组件交互相关的代码-->
    export default {
        name: 'App',
        components:{Test,Test2,Test3}
    }
</script>
<style>


</style>