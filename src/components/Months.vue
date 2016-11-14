<template>
  <div class="months">

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
      this.gradientStyle.background = `-webkit-linear-gradient(top,${
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
  position fixed
  top 0
  bottom 0
  right 0
  height 100vh
  width $baseline
  z-index 2
  display flex
  flex-flow column wrap

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
    left 2px

    strong
      color: #000
      font-size 11px
      line-height 12px

</style>
