import { ShowsService } from '../../services'
export const getShow = ({commit}, id) => {
  ShowsService.getShow(id).then(response => {
    commit('setCurrentShow', response)
  })
}
