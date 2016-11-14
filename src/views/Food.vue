<template>
  <div class="food">
    <innerHeader :h1="this.name"></innerHeader>

    <div class="food__image">
      <img :src="imageLink" />
    </div>

    <footer>
      <div class="subtitle">
        <h2 v-bind:class="status">{{ now }}</h2>
      </div>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vel debitis explicabo, odit doloremque officiis perspiciatis reiciendis veritatis, non saepe delectus dicta quas rem nesciunt. Iusto officia facere hic non.</p>
      </div>
    </footer>

    <months :data="food[this.$route.params.code]"></months>
  </div>
</template>

<script>

import moment       from 'moment';
import Months       from '../components/Months';
import InnerHeader  from '../components/InnerHeader';
import { food }     from '../data.json';

const imagePath     = '/static/foods/_$.svg';

export default {
  name: 'food',

  components: {
    Months,
    InnerHeader,
  },

  data: function () {
    const item = food[this.$route.params.code];

    return {
      food: food,
      name: item.name,
      imageLink: imagePath.replace('$', item.image),
    };
  },

  computed: {
    now: function () {
      return moment(new Date()).format('MMMM');
    },
    status: function () {
      return food[this.$route.params.code][this.now];
    },
  },

  watch: {
    '$route'() {
      if (this.$route.params.code) {
        const item = food[this.$route.params.code];

        this.name = item.name;
        this.status = item[this.now];
        this.imageLink = imagePath.replace('$', item.image);
      }
    },
  },
};

</script>

<style scoped lang="stylus">

@import "../variables.styl"

.food
  view()

  &__image
    flex 1
    display flex
    flex-flow row wrap

    img
      flex 0
      height auto
      margin auto

  footer
    flex: 0 $baseline * 5
    display flex
    flex-flow column wrap
    padding 0 $baseline

    .subtitle
      flex 0 $baseline * 2
      display flex

    .description
      flex 1
      display flex
      overflow hidden

    h2
      font-size 16px
      font-weight 600
      line-height 0.8
      margin auto auto 0

      &.Fraco
        color $red

      &.Regular
        color $yellow

      &.Forte
        color $green
    p
      font-size 13px
      line-height 1.5
      font-weight 300
      margin 13px auto 0

</style>
