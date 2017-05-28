export class AuthService {

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
}
