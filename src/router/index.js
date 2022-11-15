import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue';
// 私有路由表
const privateRoutes = [
  {
    path: '/user',
    name: 'user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: '用户管理',
      icon: 'el-icon-user'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: '用户管理',
          // icon: 'el-icon-user'
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'userRole',
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: '角色管理',
          // icon: 'el-icon-user'
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: '权限管理',
          // icon: 'el-icon-user'
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info/index.vue'),
        meta: {
          title: '用户信息',
        }
      },
      {
        path: '/user/import',
        name: 'userImport',
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: '用户导入',
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: '文章管理',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('@/views/article-ranking/index.vue'),
        meta: {
          title: '文章排行',
          icon: 'el-icon-document'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('@/views/article-detail/index.vue'),
        meta: {
          title: '文章详情',
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: '文章创建',
          icon: 'el-icon-document'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: '文章编辑',
        }
      }
    ]
  }
]
const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/LoginIndex.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '../layout/index.vue'),
    children: [
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '../views/profile/index.vue'),
        meta: {
          title: '个人中心',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import(/* webpackChunkName: "profile" */ '../views/error-page/404.vue'),
      },
      {
        path: '/401',
        name: '401',
        component: () => import(/* webpackChunkName: "profile" */ '../views/error-page/401.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
