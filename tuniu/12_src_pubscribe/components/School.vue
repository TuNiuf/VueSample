<template>
    <div class="school">
        <h2> 学校名:{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>学生名字{{studentname}}</h2>
    </div>
</template>
<script>
    import pubsub from 'pubsub-js'
    export default{
        name:'School',
        data() {

            return{
                name:'端中fasdfasdf',
                address:'端州',
                studentname:'',
            }
        },
        methods:{
            demo(msg,data){
                console.log('hello 收到+' + data)
            }
        },
        mounted(){
            this.pubId = pubsub.subscribe('hello',this.demo)
            console.log(this.pubId)
        },
        beforeDestroy(){
            publish.unsubscribe(this.pubId)
        }
    }
</script>
<style>
    .school{
        background-color:skyblue;
    }
</style>

