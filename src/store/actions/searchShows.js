import { TVMazeApiService } from '../../services'
export const getShows = ({commit}) => {
  TVMazeApiService.shows().then(response => {
    commit('setShows', response)
  })
}
