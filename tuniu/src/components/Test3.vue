<template>
   <div>
       <button @click = "isShow = !isShow">显示/隐藏</button>
<!--1.单个元素       -->
<!--       <transition name = "hello">-->
<!--           <h1 v-show = "isShow" >你好啊2！</h1>-->
<!--       </transition>-->
       <transition-group
               appear
               name = "animate__animated animate__bounce"
       >
           <h1 v-show = "!isShow" key = "1">你好啊3！</h1>
           <h1 v-show = "isShow" key = "2">tuniu3！</h1>
       </transition-group>

   </div>

</template>

<script>
    import 'animate.css'
    export default {
        name:'Test',
        data(){
            return{
                isShow: true
            }
        },

    }
</script>

<style scoped>
    h1{
        background-color: orange;
    }



</style>