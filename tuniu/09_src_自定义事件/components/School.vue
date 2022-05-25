<template>
    <div class="school">
        <h2> 学校名:{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click = "sendShoolName">按我给父亲传输名字</button>
    </div>
</template>
<script>
    export default{
        name:'School',
        data() {

            return{
                name:'端中fasdfasdf',
                address:'端州'
            }
        },
        props:['getSchoolName'],
        methods:{
            sendShoolName(){
               return this.getSchoolName(this.name)
            }
        }
    }
</script>
<style>
    .school{
        background-color:skyblue;
    }
</style>

