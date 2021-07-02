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
    resources: items.resources,
    wiki: items.wiki,
    blog: items.blog,
    communityNum: 0,
    statistic: items.statistic,
    start: false,
    tabs: items.framework,
    success: false,
    pageSuccess: false,
    cases: items.cases,
    techTabs: items.technology,
    sideMenu: true,
    research: items.research,
    video: false,
    academy: items.academy,
    firstTopic: null,
    secondTopic: null,
    token: localStorage.getItem('token') || null
  },
  getters: {
    getSideMenuState: (state) => state.sideMenu,
  },
  mutations: {
    setSecondTopic (state, data) {
      state.secondTopic = data
    },
    setFirstTopic (state, data) {
      state.firstTopic = data
    },
    setToken (state, data) {
      state.token = data
    },
    setVideo (state, data) {
      state.video = data
    },
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
      setPageSuccess (state, success) {
          state.pageSuccess = success
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
