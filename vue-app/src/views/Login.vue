<template>
    <div>
        <img src="../assets/imgs01.jpg" class="img">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
        <span class="wangJi">忘记密码</span>
        <span class="post" @click="post">注册账号</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey: 'username',
                        label: '用户名',
                        props: {
                        placeholder: '请输入用户名',
                        },
                        rules:{
                            required: true,
                            type:'string',
                        },
                        trigger:'blur',
                        messages:{
                            required:'用户名不能为空',
                        }
                    },
                    {
                        type:'input',
                        modelKey: 'password',
                        label: '密码',
                        props: {
                        placeholder: '请输入密码',
                        type:'password',
                        eye:{
                                open:false
                            }
                        },
                        rules:{
                            required: true,
                        },
                        trigger:'blur',
                        messages:{
                            required:'密码不能为空',
                        }
                    },
                    {
                        type:'submit',
                        label: '登入',
                    }

                ]
            }

        }
    },
    methods:{
       async submitHandler(e){
            e.preventDefault();
            try {
                const res =await this.$http.get('/app/login',{params:this.model})
                console.log(res);
                if(res.succes==1){
                    this.$store.commit('setToken',res.token);
                    localStorage.setItem('token',res.token);
                    alert(res.mgs);
                    if(this.$route.query.red){
                        this.$router.push(this.$route.query.red)
                    }else{
                        this.$router.push('/botnav/index')
                    }
                    
                }else{
                    alert(res.mgs)
                }
            } catch (error) {
                alert(error)
            }
        },
        post(){
            this.$router.push({path:'/post'})
        }
    },
}
</script>
<style lang="stylus">
    .img
        width 100%
        height 150px
    .wangJi
        float left 
        padding-left 4%
        font-size 14px
    .post
        float right  
        padding-right 4%
        font-size 14px
</style>