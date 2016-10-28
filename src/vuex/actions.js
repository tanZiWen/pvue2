import api from '../api'
import * as types from './mutation-types'

export const test = ({ commit }) => {
  api.getTestData().then(response => {
    if(!response.ok) {
      return;
    }
    var data = response.body
    commit(types.TEST, { data })
  })
}
