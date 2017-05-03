/**
 * Created by admin on 2017/4/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)


const store = new Vuex.Store({
  state:{
    movie_info:{},
    searchname:'',
    searchinfo:{
      type:Object
    },
    placeholder:'请输入片名'
  },
  getters:{

  },
  mutations:{
    clear (state){
      state.searchinfo = '';
    }
  },
  actions:{
    submit :function ({dispath,state},name){
      Vue.http.get('/api/search', {params: {name:name}}).then((response) => {
        response = response.body;
        if (response.errno === 0) {
          state.searchinfo = response.data;
          state.searchname = name;
        }
      })
    },
    getinfo :function ({dispath,state},id){
      Vue.http.get('/api/info',{params: {id:id}}).then((response) => {
       response = response.body;
       if (response.errno === 0) {
         state.searchinfo =response.data;
       }
       })

    }


  }

})

export default store
