const state = {
  user: {
    gender: 'unknown',
    name: 'Choose your name',
    day: 1,
  },
}

const mutations = {
  UPDATE_USERNAME(state, value) {
    state.user.name = value
  },
  UPDATE_GENDER(state, value) {
    state.user.gender = value
  },
  UPDATE_DAY(state) {
    state.user.day++
  },
}

const actions = {}

const getters = {
  getGender: (state) => {
    return state.user.gender
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
