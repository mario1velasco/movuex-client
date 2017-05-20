import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard/Dashboard'
import NotFound from '../components/NotFound/NotFound'
import ShowContainer from '../containers/ShowContainer'
import ShowListContainer from '../containers/ShowListContainer'
import GoToDashboard from '../components/GoToDashboard/GoToDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard,
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
        }
      ]
    },
    {
      path: '/not-found',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ]
})
