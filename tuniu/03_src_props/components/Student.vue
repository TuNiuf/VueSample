<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}} </h2>
        <h2>学校性别：{{sex}}</h2>
        <h2>学校年龄：{{age}}</h2>
    </div>
</template>
<script>
    export default{
        name:'Student',
        data() {
            return{
                msg:'土牛年纪不大',
            }
        },
        // props:['name','age','sex'] //简单接收
        /*接收的同时限制*/
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number,
        // }
        props:{
            name:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                default:99
            },
            sex:{
                type:String,
                required:true
            }
        }

    }
</script>

