import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home/Home.vue'
import Broadcast from '../pages/broadcast/Broadcast.vue'
import Group from '../pages/group/Group.vue'
import Audio from '../pages/audio/Audio.vue'
import Mine from '../pages/mine/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
     {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
     {
      path: '/group',
      name: 'Group',
      component: Group
    },
     {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
     {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
