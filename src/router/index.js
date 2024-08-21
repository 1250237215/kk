import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '/Users/liangjiantao/Desktop/1874/src/pages/TestPage.vue'; // 确保路径和文件名一致

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: TestPage // 临时测试组件
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
