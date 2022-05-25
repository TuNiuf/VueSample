export default {
    install(Vue){
        //过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        //定义全局指令
        Vue.directive('fbind',{
            bind(element,binding){
                element.value = binding.value
            },

            inserted(element,binding){
                element.focus()
             }
        })
        //定义混合
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })
        //给VUE原型上添加方法
        Vue.prototype.hello = ()=>{
            alert('hello')
        }
    }
}

