import { tvmaze } from 'tvmaze-zucchinidev'

export class TVMazeApiService {
  static parseResponse ({body}) {
    return body
  }

  constructor (tvmazeClient = tvmaze.createClient()) {
    this.client = tvmazeClient
  }

  searchShows (criteria) {
    return this.client.search(criteria)
      .then(TVMazeApiService.parseResponse)
      .then(shows => shows.filter(s => s.show.image !== null).map(s => s.show))
  }

  getShow (showId) {
    return this.client.show(showId).then(TVMazeApiService.parseResponse)
  }

  shows () {
    return this.client.shows().then(TVMazeApiService.parseResponse)
  }
}
