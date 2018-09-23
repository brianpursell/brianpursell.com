import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slideoutOpen: false
  },
  mutations: {
    toggleSlideout(state) {
      state.slideoutOpen = !state.slideoutOpen;
    }
  },
  getters: {
    mainStyle: state => {
      let marginLeft = state.slideoutOpen ? "-14rem" : "0rem";
      let marginRight = state.slideoutOpen ? "14rem" : "0rem";

      return {
        "margin-left": marginLeft,
        "margin-right": marginRight
      };
    },
    slideoutStyle: state => {
      let width = state.slideoutOpen ? "14rem" : "0rem";
      return { width: width };
    },
    navbarStyle: state => {
      return {
        hamburger: true,
        "hamburger--collapse": true,
        "is-active": state.slideoutOpen
      };
    }
  }
});
