<template>
    <!--组件的结构-->
    <div>
        <Student name="张三" sex = "女" :age="18"/>
    </div>
</template>

<script>
    //引入主键
    import Student from './components/Student.vue'
    // <!--组件交互相关的代码-->
    export default {
        name: 'App',
        components:{
            Student
        },

    }
</script>

