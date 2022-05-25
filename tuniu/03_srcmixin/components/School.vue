<template>
    <div>
        <h2 @click = "showName">学校名称：{{name}} </h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>
<script>
    import {mixin} from '../mixin.js'
    export default{
        name:'School',
        data() {
            return{
                name:'端中',
                address:'端州'
            }
        },
        mixins:[mixin]
    }
</script>

