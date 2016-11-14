import Vue from 'vue';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h('Hi'),
    });
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Hi');
  });
});
