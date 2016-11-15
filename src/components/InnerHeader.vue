<template>
  <header class="innerHeader">
    <h2>amadurou?</h2>
    <h1>{{ this.h1 }}</h1>
  </header>
</template>

<script>

export default {
  name: 'innerHeader',

  props: {
    h1: String,
  },
};

</script>

<style scoped lang="stylus">

@import '../variables.styl';

header
  display flex
  height $baseline * 4
  flex-flow: row wrap
  width 100%

  h2
    font-size 16px
    font-weight bold
    line-height 0.75
    height 15px
    width 100%
    margin $baseline auto 0

  h1
    margin auto auto 0
    line-height 0.75
    letter-spacing -2px
    transition font-size 0.25s
    font-size 40px

</style>
