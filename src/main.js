import Vue        from 'vue';
import VueRouter  from 'vue-router';
import moment     from 'moment';
import App        from './App';
import Index      from './views/Index';
import Food       from './views/Food';
import Month      from './views/Month';

moment.locale('pt-BR');

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'index', component: Index },
    { path: '/food/:number', name: 'food', component: Food },
    { path: '/month/:number', name: 'month', component: Month },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
