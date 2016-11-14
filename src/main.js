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
    { path: '/', component: Index },
    { path: '/food/:code', component: Food },
    { path: '/month/:number', component: Month },
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
