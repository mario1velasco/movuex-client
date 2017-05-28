import { TVMazeApiService } from '../../services'
export const getShow = ({commit}, id) => {
  TVMazeApiService.getShow(id).then(response => {
    commit('setCurrentShow', response)
  })
}
