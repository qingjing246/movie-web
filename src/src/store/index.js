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
    aaa:"222",
    searchname:'',
    searchinfo:[]
  },
  getters:{
    getname:store=>store.a
  },
  mutations:{
    clear (state){
      state.searchinfo = '';
    }
  },
  actions:{
    submit :function ({dispath,state},name){
      store.commit('clear');
      if (name === "") {
      } else {
        Vue.http.get('/api/search', {params: {name:name}}).then((response) => {
          response = response.body;
          if (response.errno === 0) {
            state.searchinfo = response.data;
            state.searchname = name;
          }
        })
      }

    }
  }

})

export default store
