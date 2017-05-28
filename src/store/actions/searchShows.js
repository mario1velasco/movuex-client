import { TVMazeApiService } from '../../services'
export const searchShows = ({commit}, criteria) => {
  TVMazeApiService.searchShows(criteria).then(response => {
    commit('setShows', response)
  })
}
