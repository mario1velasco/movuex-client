export class HttpService {
  static getBaseUrl () {
    return 'http://www.omdbapi.com/?s='
  }

  static get (url) {
    return window.fetch(url)
      .then(HttpService.getJSON)
  }

  static getJSON (response) {
    return response.json()
  }
}
