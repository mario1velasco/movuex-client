import { AuthService } from '../../services'
export const socialLogin = ({commit}) => {
  AuthService.socialLogin().then(r => {
    console.log(r)
  })
}
