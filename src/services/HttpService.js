import axios from 'axios'

export class HttpService {
  static all (requests) {
    return axios.all(requests).then(axios.spread((...args) => {
      return args.map(value => {
        const {data, config} = value
        return {
          data,
          config
        }
      })
    }))
  }

  static get (url, params, config) {
    return axios
      .get(url, {params, ...HttpService.getConfiguration(config)})
      .then(HttpService.format)
  }

  static post (url, params, config) {
    params = HttpService.getMergedParams(params)
    return axios
      .post(url, params, config)
      .then(HttpService.format)
  }

  static getConfiguration (config) {
    return {
      ...config
      // add here the default configuration, interceptors, etc
      // the config object will be overwritten!!!
    }
  }

  static format ({data, config}) {
    return {
      data,
      config
    }
  }
}
