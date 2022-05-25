<template>
    <!--组件的结构-->
    <div>
        <h2 v-text="msg" ref = "title"></h2>
        <button @click = "showDom">点我显示上方dom</button>
        <school></school>
    </div>
</template>

<script>
    //引入主键
    import School from './components/School.vue'
    // <!--组件交互相关的代码-->
    export default {
        name: 'App',
        data() {
            return {
                msg: '欢迎学习VUE'
            }
        methods:{
            showDom(){
                console.log(this.$refs.title)
            }
        },
        components:{
            School,
        }

    }
</script>

