import Vuex from 'vuex'

const createStore = ()=>{
  return new Vuex.Store({
    state:{
      page:{currentPage: 1, pageSize: 5, pageCount: 0}
    },
    mutations:{
      increment (state){
        state.counter++
      }
    }
  })
}
export default createStore
