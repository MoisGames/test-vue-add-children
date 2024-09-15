import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state () {
        return {
            personalArray: {}, //Здесь хранятся данные о пользователе
            childrenArray: [{}], // А здесь данные о его детях
            count: 0,
        }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    getters: {
        getDataPersonal: state => {
            return state.personalArray
        },
        getDataChildren: state => {
          return state.childrenArray
        }
    },
    namespaced: true
  })
export default store
createApp(App).use(router).use(store).mount('#app')
