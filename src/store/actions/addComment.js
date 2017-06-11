import { RealTimeService } from '../../services'
export const addComment = ({commit}, data) => {
  const service = new RealTimeService()
  service.addComment(data)
}
