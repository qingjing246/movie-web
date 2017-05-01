/**
 * Created by admin on 2017/4/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state:{
    allinfo:""
  },
  getters:{
    allinfo:state=>state.allinfo
  },
  mutations:{
    submit(state,b){
      state.allinfo = b;
    }
  },
  actions:{
   btn(){

     alert("dasda")
   }
  }


})

export default store
