<template>
    <div class="school">
        <h2> 学校名:{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>学生名字{{studentname}}</h2>
    </div>
</template>
<script>
    export default{
        name:'School',
        data() {

            return{
                name:'端中fasdfasdf',
                address:'端州',
                studentname:''
            }
        },
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('School','Student 收到数据', data)
            })
        }
    }
</script>
<style>
    .school{
        background-color:skyblue;
    }
</style>

