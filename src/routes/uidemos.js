/**
 * 工单系统路由配置
 *
 * @author  hucw
 * @created 2017-06-14
 */
export default [
  {
    path: '/ui',
    name: 'ui',
    meta: {
      requireAuth: false
    },
    component: function (resolve) {
      require(['@/components/uidemos/index'], resolve);
    }
  },
  {
    path: '/ui/buttons',
    name: 'ui-buttons',
    meta: {
      requireAuth: false
    },
    component: function (resolve) {
      require(['@/components/uidemos/buttons'], resolve);
    }
  },
  {
    path: '/ui/forms',
    name: 'ui-forms',
    meta: {
      requireAuth: false
    },
    component: function (resolve) {
      require(['@/components/uidemos/forms'], resolve);
    }
  },
  {
    path: '/ui/cell',
    name: 'ui-cell',
    meta: {
      requireAuth: false
    },
    component: function (resolve) {
      require(['@/components/uidemos/cell'], resolve);
    }
  }
]
