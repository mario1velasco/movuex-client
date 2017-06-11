import { ShowsService } from '../../services'
export const addNote = ({commit}, {note, showId}) => {
  ShowsService
    .addNote(showId, note)
    .then(data => {
      commit('updateNotes', data)
    })
}
