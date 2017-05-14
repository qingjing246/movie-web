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
  state: {
    search: {},
    all: 10,
    movie_info: {},
    searchname: '',
    searchinfo: '',
    placeholder: '请输入片名/导演/演员',
    abc:''
  },
  getters: {},
  mutations: {
  },
  actions: {
    submit: function ({dispath, state}, name) {
      state.searchinfo = '';
      state.abc ='';
      Vue.http.get('/api/search', {params: {name: name}}).then((response) => {
        response = response.body;
        console.log(response.errno);
        if (response.errno === 0) {
          state.searchinfo = response.data;
          state.searchname = name;
        }else if(response.errno == 'undefined'){
          state.abc = 'undefined';
        }
      })
    },
    getinfo: function ({dispath, state}, id) {
      state.searchinfo = {};
      state.abc ='';
      Vue.http.get('/api/info', {params: {id: id}}).then((response) => {
        response = response.body;
        console.log(response);
        if (response.errno === 0) {
          state.searchinfo = response.data;
        }else if(response.errno == 'undefined'){
          state.abc = 'undefined';
        }
      })
    },
    getname: function ({dispath, state}, name) {
      state.searchinfo = {};
      state.abc ='';
      Vue.http.get('/api/info', {params: {name: name}}).then((response) => {
        console.log(response);
        response = response.body;
        if (response.errno === 0) {
          state.searchinfo = response.data;
        }else if(response.errno == 'undefined'){
          state.abc = 'undefined';
        }
      })
    },
    movies: function ({dispath, state}, movie_info) {
      state.search = '';
      Vue.http.get('/api/movies', {
        params: {
          datatype: movie_info[0],
          type: movie_info[1],
          adder: movie_info[2],
          time: movie_info[3],
          jb: movie_info[4],
          page: movie_info[5]
        }
      }).then((response) => {
        response = response.body;
        if (response.errno === 0) {
          state.search = response.data;
          state.all = Math.ceil(response.all / 18);
          console.log(state.search);
        }
      });
    }


  }

})

export default store
