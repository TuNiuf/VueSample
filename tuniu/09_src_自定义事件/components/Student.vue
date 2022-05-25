<template>
    <div class="student">
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}} </h2>
        <h2>学校性别：{{sex}}</h2>
        <button @click = "sendStudentName">给APP发送名字</button>
    </div>
</template>
<script>
    export default{
        name:'Student',
        data() {
            return{
                msg:'土牛年纪不大',
                name:'张三',
                sex:'male'
            }
        },
        methods:{
            sendStudentName(){
                this.$emit('tuniu',this.name)
            }
        }
    }
</script>

<style>
    .student{
        background-color:pink;
    }
</style>

