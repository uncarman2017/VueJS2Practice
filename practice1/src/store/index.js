import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import state from './state'
import ajax from '../config/ajax'


Vue.use(Vuex)

export default new Vuex.Store({
	state,
	actions,
	mutations
})