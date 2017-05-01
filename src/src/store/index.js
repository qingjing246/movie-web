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
    b:"111",
    searchinfo:{
      name:""

    }
  },
  getters:{
    getname:store=>store.a
  },
  mutations:{
    change:store=>store.aaa="99999"
  },
  actions:{
   btn : function ({dispath,state},name){
     //const payload = {name:name}
     state.b = name
     dispath("change", name)
     alert(state.a + name);
   },
    submit :function ({dispath,state},name){
      if (name === "") {

      } else {
        Vue.http.get('/api/search', {params: {name:name}}).then((response) => {
          response = response.body;
          if (response.errno === 0) {
            state.searchinfo.name = response.data;
            console.log(response.data.name);
          }
        })
      }

    }
  }

})

export default store
