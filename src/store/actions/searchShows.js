import { ShowsService } from '../../services'
export const searchShows = ({commit}, criteria) => {
  ShowsService.searchShows(criteria).then(response => {
    commit('setShows', response)
  })
}
