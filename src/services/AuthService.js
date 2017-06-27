import { HttpService } from './HttpService'
const env = process.env

export class AuthService {
  static get configuration () {
    return {
      baseURL: env.SERVER_URL
      // add here the default configuration, interceptors, etc
    }
  }

  static get http () {
    return HttpService
  }

  static isAuthorizedUser () {
    return Promise.resolve(true)
  }

  static requireAuth (to, from, next) {
    AuthService.isAuthorizedUser().then(authorizedUser => {
      if (!authorizedUser) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    })
  }

  static socialLogin () {
    return AuthService.http.get('/auth/twitter', {}, AuthService.configuration)
  }
}
