<template>
    <!--组件的结构-->
    <div class="app">
        <h2>hello!~~~</h2>
        <school/>
        <student/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    // <!--组件交互相关的代码-->
    export default {
        name: 'App',
        components:{
            Student,
            School,
        },

    }
</script>
<style>
    .app{
        background-color:gray;
    }
</style>
