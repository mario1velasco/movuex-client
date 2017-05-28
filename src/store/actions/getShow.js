import { TVMazeApiService } from '../../services'
export const getShows = ({commit}) => {
  TVMazeApiService.getShows().then(response => {
    commit('setShows', response)
  })
}
