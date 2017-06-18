import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import App from '../App/App.vue'
import NotFound from '../components/NotFound/NotFound.vue'
import ShowContainer from '../containers/ShowContainer.vue'
import ProfileContainer from '../containers/ProfileContainer.vue'
import ShowListContainer from '../containers/ShowListContainer.vue'
import GoToDashboard from '../components/GoToDashboard/GoToDashboard.vue'
import Login from '../components/Login/Login.vue'
import { AuthService } from '../services'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      beforeEnter: AuthService.requireAuth,
      children: [
        {
          path: '',
          component: Dashboard,
          props: route => {
            const { query } = route
            return query
          },
          children: [
            {
              path: '',
              name: 'showList',
              component: ShowListContainer,
              props: route => {
                const { query } = route
                return query
              }
            },
            {
              path: '/show/:showId',
              name: 'show',
              components: {
                default: ShowContainer,
                action: GoToDashboard
              },
              props: {
                default: true, // inject show as property
                action: route => {
                  console.log(route)
                }
              }
            },
            {
              path: '/user/profile',
              name: 'user-profile',
              components: ProfileContainer
            }
          ]
        }
      ]
    },
    {
      path: '/not-found',
      name: '404',
      component: NotFound
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ]
})
