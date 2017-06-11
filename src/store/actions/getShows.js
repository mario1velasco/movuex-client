import { ShowsService } from '../../services'
export const getShows = ({commit}) => {
  ShowsService.getShows().then(response => {
    commit('setShows', response)
  })
}
