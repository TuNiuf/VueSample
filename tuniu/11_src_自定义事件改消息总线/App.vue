<template>
    <!--组件的结构-->
    <!--组件的结构-->
    <div id = "root">
        <div class = "todo-container">
            <div class = "todo-wrap">
                <MyHeader :receive ="receive"/>
                <MyList :todos="todos" :checkTodo = "checkTodo" :deleteTodo = "deleteTodo"/>
                <MyFooter :todos="todos" :checkAllTodo = "checkAllTodo" :clearAllTodo = "clearAllTodo"/>
            </div>
        </div>

    </div>
</template>

<script>
    //引入主键
    import MyHeader from './components/MyHeader'
    import MyFooter from './components/MyFooter'
    import MyList from './components/MyList'
    // <!--组件交互相关的代码-->
    export default {
        name: 'App',
        components:{MyHeader,MyFooter,MyList
        },
        data(){
            return {
                todos:JSON.parse(localStorage.getItem('todos'))||[]
            }
        },
        methods:{
            receive(todoObject){
                this.todos.unshift(todoObject)
            },
            checkTodo(id){
                this.todos.forEach((todo) => {
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            deleteTodo(id){
                this.todos = this.todos.filter(todo=>todo.id !== id)
            },
            checkAllTodo(done){
                this.todos.forEach((todo) =>{
                    todo.done = done
                })
            },
            clearAllTodo(){
                this.todos = this.todos.filter((todo) =>{
                    return !todo.done
                })
            }
        },
        watch:{
            todos(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        },
        mounted(){
            this.$bus.$on('checkTodo',this.checkTodo)
            this.$bus.$on('deleteTodo',this.deleteTodo)
        },
        beforeDestroy(){
            this.$bus.$off('checkTodo')
            this.$bus.$off('deleteTodo')
        }
    }
</script>
<style>
    .app{
        background-color:gray;
    }
</style>
