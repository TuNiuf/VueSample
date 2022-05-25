<template>
    <div class = "demo">
        <h2>学校名称：{{name}} </h2>
        <h2>学校地址：{{address}}</h2>
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

    }
</script>

<style>
    .demo{
        background:orange;
    }
</style>

