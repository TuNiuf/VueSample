<template>
    <!--组件的结构-->
    <div>
        <Student/>
        <hr/>
        <school/>
    </div>
</template>

<script>
    //引入主键
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

