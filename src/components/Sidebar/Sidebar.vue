<template>
  <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li v-for="(item, index) in menuItems">
        <router-link :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'" v-if="item.path"
                     @click.native="toggle(index, item)">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </router-link>
        <a :aria-expanded="isExpanded(item)" v-else @click="toggle(index, item)">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>

        <expanding v-if="item.children && item.children.length">
          <ul v-show="isExpanded(item)">
            <li v-for="subItem in item.children" v-if="subItem.path">
              <router-link :to="generatePath(item, subItem)">
                {{ subItem.meta && subItem.meta.label || subItem.name }}
              </router-link>
            </li>
          </ul>
        </expanding>
      </li>
    </ul>
    <history></history>
    <social-sidebar></social-sidebar>
  </aside>
</template>

<script>
  import Expanding from 'vue-bulma-expanding'
  import History from '../History/History'
  import SocialSidebar from './SocialSidebar/SocialSidebar'

  export default {
    components: {
      SocialSidebar,
      History,
      Expanding
    },

    props: {
      show: Boolean,
      menuItems: {
        required: true,
        type: Array
      }
    },

    data () {
      return {
        isReady: false
      }
    },

    mounted () {
      let route = this.$route
      if (route.name) {
        this.isReady = true
        this.shouldExpandMatchItem(route)
      }
    },

    methods: {
      isExpanded (item) {
        return item.meta.expanded
      },

      toggle (index, item) {
        this.expandMenu({
          index: index,
          expanded: !item.meta.expanded
        })
      },

      shouldExpandMatchItem (route) {
        let matched = route.matched
        let lastMatched = matched[matched.length - 1]
        let parent = lastMatched.parent || lastMatched
        const isParent = parent === lastMatched

        if (isParent) {
          const p = this.findParentFromMenu(route)
          if (p) {
            parent = p
          }
        }

        if ('expanded' in parent.meta && !isParent) {
          this.expandMenu({
            item: parent,
            expanded: true
          })
        }
      },

      generatePath (item, subItem) {
        return `${item.component ? item.path + '/' : ''}${subItem.path}`
      },

      findParentFromMenu (route) {
        for (let i = 0, l = this.menuItems.length; i < l; i++) {
          const item = this.menuItems[i]
          const k = item.children && item.children.length
          if (k) {
            for (let j = 0; j < k; j++) {
              if (item.children[j].name === route.name) {
                return item
              }
            }
          }
        }
      }
    },

    watch: {
      $route (route) {
        this.isReady = true
        this.shouldExpandMatchItem(route)
      }
    }

  }
</script>

<style lang="scss" src="./Sidebar.scss"></style>
