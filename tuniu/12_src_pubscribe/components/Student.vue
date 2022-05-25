<template>
    <div class="student">
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}} </h2>
        <h2>学校性别：{{sex}}</h2>
        <button @click = "sendStudentName">把学生名给school</button>
    </div>
</template>
<script>
    import pubsub from 'pubsub-js'
    export default{
        name:'Student',
        data() {
            return{
                msg:'土牛年纪不大',
                name:'张三',
                sex:'male'
            }
        },
        mounted(){
        },
        methods:{
            sendStudentName(){
                pubsub.publish('hello','6666')
            }
        },
        beforeDestroy(){

        }
    }
</script>

<style>
    .student{
        background-color:pink;
    }
</style>

