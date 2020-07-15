import Vue from 'vue'
import router from 'vue-router'
import Landing from '../../components/Landing'
Vue.use(router)
export default new router({
    routes: [
        {
            component: Landing,
            path:'/'
        }
    ]
})
