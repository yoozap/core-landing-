import Vue from 'vue'
import Vuex from 'vuex'
import items from '@/items.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: null,
    navMenu: items.navigation,
    community: items.community,
    faq: items.faq,
    wiki: items.wiki,
    blog: items.blog,
    communityNum: 0,
    statistic: items.statistic,
    start: false,
    tabs: items.framework,
    success: false,
    cases: items.cases,
    techTabs: items.technology,
    sideMenu: true,
    research: items.research
  },
  getters: {
    getSideMenuState: (state) => state.sideMenu,
  },
  mutations: {
    setMenuStatus (state, data) {
      state.activeMenu = data
    },
    setCommunity (state, num) {
      state.communityNum = num
    },
    setStart (state, test) {
      state.start = test
    },
    setSuccess (state, success) {
      state.success = success
    },
    setSideMenuState(state, modalType) {
      state.sideMenu = modalType;
    }
  },
  actions: {
  },
  modules: {
  }
})
