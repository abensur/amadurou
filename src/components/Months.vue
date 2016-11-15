<template>
  <div
    class="months"
    v-bind:class="{ 'months--horizontal': horizontal }"
    >
    <div
      class="gradient"
      v-bind:style="gradientStyle"></div>

    <div
      class="month"
      v-for="month of months">

      <div v-if="month === currentMonth">
        <strong>{{ month }}</strong>
      </div>

      <div v-else>
        {{ month.slice(0, 3) }}
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';
import {
  months as monthsNames,
  colors,
} from '../data.json';

export default {
  name: 'months',

  props: {
    data: Object,
    horizontal: Boolean,
  },

  data: function () {
    return {
      currentMonth: moment(new Date()).format('MMMM'),
      months: monthsNames.reverse(),
      colors: colors,
      gradientStyle: {
        background: '',
      },
    };
  },

  watch: {
    '$route'() { this.updateGradient(); },
  },

  methods: {
    updateGradient: function () {
      const orient = this.horizontal ? 'left' : 'top';
      this.gradientStyle.background = `-webkit-linear-gradient(${orient},${
        this.months.map(month => this.colors[this.data[month]])
      }`;
    },
  },

  mounted() {
    this.updateGradient();
  },
};

</script>

<style scoped lang="stylus">

@import '../variables.styl';

.months
  bottom 0
  display flex
  flex-flow column wrap
  height 100vh
  position absolute
  right 0
  top 0
  width $baseline
  z-index 3

  .gradient
    position absolute
    top 0
    bottom 0
    right 0
    width ($baseline / 4)

  .month
    flex 1 auto
    font-size 10px
    writing-mode vertical-rl
    transform rotate(180deg)
    position relative
    color: $black
    left 1px

    strong
      color: #000
      font-size 11px
      line-height 12px
      text-decoration underline

  &--horizontal
    bottom 0
    left 0
    top auto
    height $baseline
    width 100vw
    z-index 0

    .gradient
      height ($baseline / 4)
      width 100%
      top auto
      bottom 0

    .month
      transform none
      writing-mode initial

</style>
