import router from './router'
import store from './store'
import axios from 'axios'

//http全局拦截
//token放在请求的header上面带回去给后端
export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        conflg=>{
            if(store.state.token){
                conflg.headers.token = store.state.token;
            }
            return conflg;
        }
    )
    //每次请求返回的值都是先经过拦截器
    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                const data = response.data;
                if(data.succes==0){
                    store.commit('setToken','');
                    localStorage.removeItem('token');
                    router.replace({path:'/login'})
                }
                return data;
            }
            return response;
        }
    )

}