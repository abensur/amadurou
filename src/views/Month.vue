<template>
  <div class="month">
    <innerHeader :h1="this.month"></innerHeader>
  </div>
</template>

<script>

import InnerHeader  from '../components/InnerHeader';
import { months }     from '../data.json';

export default {
  name: 'month',

  components: {
    InnerHeader,
  },

  data: function () {
    return {
      month: months[this.$route.params.number],
    };
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

</style>
