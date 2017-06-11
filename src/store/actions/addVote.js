import { ShowsService } from '../../services'
export const addVote = ({commit}, {showId}) => {
  ShowsService
    .addVote(showId)
    .then(data => {
      commit('showVotes', data)
    })
}
