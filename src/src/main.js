// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import search from './components/search/search-info.vue'
import content from './components/container/content.vue'
import movies from './components/movies/movies.vue'
import tv from './components/tv/tv.vue'
import donghua from './components/donghua/donghua.vue'
import store from './store'

Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(VueRouter);

let app = Vue.extend(App);

const router =new VueRouter({
    routes:[
      {
      name:'search',
      path:'/api/search',
      component:search
      },
      {
        name:'content',
        path:'/',
        component:content
      },
      {
        name:'movies',
        path:'/api/movies',
        component:movies
      },
      {
        name:'tv',
        path:'/api/tv',
        component:tv
      },
      {
        name:'donghua',
        path:'/api/donghua',
        component:donghua
      }
      ]

});



new Vue({
  el: '#app',
  router:router,
  store,
  template: '<App/>',
  components: { App }
});
