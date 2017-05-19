import { HttpService } from './HttpService'

export class TVMazeApiService {
  static get http () {
    return HttpService
  }

  static getFilms (criteria) {
    return TVMazeApiService.http.get(TVMazeApiService.getUrl(criteria))
  }

  static getUrl (criteria) {
    return `${TVMazeApiService.http.getBaseUrl()}${criteria}`
  }
}
