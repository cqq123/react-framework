export default [
  {
    name: '首页',
    path: '/home',
    iconCode: 'e639',
    component: require('pages/Home').default,
    // list: [
    //   {
    //     name: 'sub',
    //     path: '/:id',
    //     component: require('pages/Resources').default,
    //   },
    // ],
  },
  {
    name: '设置',
    path: '/setting',
    iconCode: 'e603',
    component: require('pages/Set').default,
  },
];
