import { HttpService } from './HttpService'
const env = process.env

export class TVMazeApiService {
  static endPoints = {
    search: '/search',
    shows: '/shows',
    show: '/show'
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
    const params = {q: criteria}
    const endPoint = TVMazeApiService.endPoints.search
    return TVMazeApiService.get(endPoint, params)
  }

  static getShow (showId) {
    return TVMazeApiService.get(`${TVMazeApiService.endPoints.show}/${showId}`)
  }

  static getShows () {
    return TVMazeApiService.get(TVMazeApiService.endPoints.shows)
  }

  static get (endPoint, params = {}) {
    return TVMazeApiService.http.get(endPoint, params, TVMazeApiService.configuration)
      .then(response => response.data)
  }
}
