<template>
    <div class = "test">
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}} </h2>
        <h2>学校性别：{{sex}}</h2>
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

    }
</script>

<style scoped>
    .test{
        background:skyblue;
    }
</style>