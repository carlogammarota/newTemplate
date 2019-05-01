import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);


export default new Vuex.Store({
	plugins: [createPersistedState()],
	state: {
		auth: {
			user: null
		}
	},
	mutations: {
		UPDATE(state, payload) {
			state.auth.user = payload;
		}
	},
	actions: {
		updateStore({ commit }, payload) {
			console.log("Actions", payload)
			commit('UPDATE', payload);
		}
	},
	getters: {
		getUser: state => state.auth.user
	},
	modules: {

	}
});
