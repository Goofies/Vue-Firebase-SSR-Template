import { api } from '../api/index.js'

export default {
  getTrueFacts ({ commit }) {
    return api.database().ref('trueFacts').once('value')
      .then(snap => {
        commit('setTrueFacts', snap.val())
      })
  }
}