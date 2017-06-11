import { HttpService } from './HttpService'
const env = process.env

export class ShowsService {
  static endPoints = {
    search: '/shows/search',
    shows: '/shows',
    votes: '/shows/votes',
    notes: '/shows/notes'
  }

  static get configuration () {
    return {
      baseURL: env.API_URL
      // add here the default configuration, interceptors, etc
    }
  }

  static all (requests) {
    return HttpService.all(requests)
  }

  static get http () {
    return HttpService
  }

  static searchShows (criteria) {
    if (criteria !== '') {
      const params = {q: criteria}
      const endPoint = ShowsService.endPoints.search
      return ShowsService.get(endPoint, params)
    } else {
      return ShowsService.getShows()
    }
  }

  static getShow (showId) {
    return ShowsService.get(`${ShowsService.endPoints.shows}/${showId}`)
  }

  static getShows () {
    return ShowsService.get(ShowsService.endPoints.shows)
  }

  static addVote (showId) {
    const endPoint = `${ShowsService.endPoints.votes}/${showId}`
    return ShowsService
      .patch(endPoint)
  }

  static addNote (showId, note) {
    const endPoint = `${ShowsService.endPoints.notes}/${showId}`
    return ShowsService
      .patch(endPoint, note)
  }

  static patch (endPoint, params = {}) {
    return ShowsService
      .http
      .patch(endPoint, params, ShowsService.configuration)
      .then(({data}) => data)
  }

  static get (endPoint, params = {}) {
    return ShowsService.http.get(endPoint, params, ShowsService.configuration)
      .then(({data}) => data)
  }
}
