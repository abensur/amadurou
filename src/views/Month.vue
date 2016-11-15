<template>
  <div class="month">
    <innerHeader :h1="this.month"></innerHeader>

    <div class="good"
      v-for="g of good">
      <div class="good__image">
        <img :src="imageLink(g.image)" />
      </div>
      <div class="good__info">
        <h2>{{ g.name }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
</template>

<script>

import InnerHeader      from '../components/InnerHeader';
import { months, food } from '../data.json';

const imagePath         = '/static/foods/_$.svg';

export default {
  name: 'month',

  components: {
    InnerHeader,
  },

  computed: {
    month: function () {
      return months[this.$route.params.number];
    },

    good: function () {
      return food.filter(it => it[this.month] === 'Forte');
    },
  },

  methods: {
    imageLink: function (name) {
      return imagePath.replace('$', name);
    },
  },

  mounted() {
    console.log(this.good);
  },

  watch: {
    '$route'() {
      if (this.$route.params.number) {
        this.month = months[this.$route.params.number];
      }
    },
  },
};

</script>

<style scoped lang="stylus">

@import "../variables.styl"

.month
  view()
  flex-flow column

.good
  box-sizing border-box
  display flex
  flex-flow row wrap
  height 145px
  flex 0 145px
  padding $baseline
  width 100%

  &__image
    flex 0 70px
    position relative
    display flex
    flex-flow row wrap

    img
      width 100%
      margin auto

  &__info
    flex 1
    display flex
    flex-flow row wrap
    align-content center

    h2,p
      margin 0
      flex 0 100%

    h2
      font-size 20px
      color $green

    p
      font-size 11px


</style>
