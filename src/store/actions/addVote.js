import { RealTimeService } from '../../services'
export const addVote = ({commit}, {showId}) => {
  const service = RealTimeService.getInstance()
  service.addVote(showId)
}
