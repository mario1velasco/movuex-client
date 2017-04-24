import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard/Dashboard'
import NotFound from '../components/NotFound/NotFound'
import Movie from '../components/Movie/Movie'
import MovieList from '../components/MovieList/MovieList'
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
          name: 'movieList',
          component: MovieList,
          props: route => {
            const { query } = route
            return query
          }
        },
        {
          path: '/film/:film',
          name: 'movie',
          components: {
            default: Movie,
            action: GoToDashboard
          },
          props: {
            default: true, // inject film as property
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
