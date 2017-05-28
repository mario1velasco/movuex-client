import { RealTimeService } from '../../services'
export const addVote = ({commit}, {id}) => {
  const service = RealTimeService.getInstance()
  service.addVote(id)
}
