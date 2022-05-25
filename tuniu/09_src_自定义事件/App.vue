<template>
    <!--组件的结构-->
    <div class="app">
        <h2>hello!~~~</h2>
        <Student v-on:tuniu = "getStudentName"/>
        <hr/>
        <school :getSchoolName = "getSchoolName"/>
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

        methods:{
            getSchoolName(name){
                console.log(name + "---z")
            },
            getStudentName(name){
                console.log("自定义规格");
            }
        }

    }
</script>
<style>
    .app{
        background-color:gray;
    }
</style>
