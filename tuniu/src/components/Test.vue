<template>
   <div>
       <button @click = "isShow = !isShow">显示/隐藏</button>
       <!--1.原声js的写法-->
<!--       <h1 v-show = "isShow" tuniu = "tuniu" class = "come">你好啊！</h1>-->
       <!--2.如果带上名字-->
<!--       <transition name = "hello"></transition>-->
       <transition name = "hello">
           <h1 v-show = "isShow" >你好啊！</h1>
       </transition>

   </div>

</template>

<script>
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
    /*1.原生css的写法*/
    /*.come{*/
    /*    animation: tuniu 1s;*/
    /*}*/
    /*.go{*/
    /*    animation: tuniu 1s reverse;*/
    /*}*/
    /*2这里应该改成.hello-enter-active .v-enter-active不写代表全部*/
    .hello-enter-active{
        animation: tuniu 1s;
    }

    .hello-leave-active{
        animation: tuniu 1s reverse;
    }

    @keyframes tuniu{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>