<template>
    <div>
        <img src="../assets/benner03.jpg" class="img">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
        <span class="login" @click="login">返回登入</span>
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
                type: 'input',
                modelKey: 'username',
                label: '用户名',
                props: {
                  placeholder: '请输入用户名',
                },
                rules: {
                  required: true,
                  type:'string',
                  min:6,
                  max:12,
                },
                trigger: 'blur',
                messages:{
                    required:'用户名不能为空',
                    min:'请输入6-12位正确用户名',
                    max:'请输入6-12位正确用户名',
                }
                },{
                type: 'input',
                modelKey: 'password',
                label: '密码',
                props: {
                  placeholder: '请输入密码',
                  type:'password',
                  eye:{
                      open:false,
                  }
                },
                rules: {
                  required: true,
                  min:6,
                  max:12,
                },
                trigger: 'blur',
                messages:{
                    required:'密码不能为空',
                    min:'请输入6-12位密码',
                    max:'请输入6-12位密码',
                }
                },{
                    type: 'submit',
                    label: '注册',
                }
                ],
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault();
            this.$http.get('/app/getPost',{params:this.model}).then(function(res) {
                console.log(res.success);
            })
        },
        login(){
            this.$router.push({path:'/'})
        }
    },
}
</script>
<style lang="stylus" scoped>
    .img
        width 100%
        height 150px
    .login
        float left 
        padding-left 4%
        font-size 14px
</style>