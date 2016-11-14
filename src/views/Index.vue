<template>
  <div class="index">
    <header>
      <h1>amadurou?</h1>
    </header>
    <footer>
      <div class="index__subtitle">
        <h2>DIGA ALGO!</h2>
      </div>
      <div class="index__description">
        <p>Experimente perguntar sobre algum alimento ou simplesmente diga hoje.</p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'index',

};

</script>

<style scoped lang="stylus">

@import "../variables.styl"

.index
  height 100%
  display flex
  flex-flow column wrap
  text-align center

  header
    flex 1
    display flex
    background-image url('../assets/bg.png')
    background-size cover
    background-color $bege
    background-position 0 40%
    padding 0 $baseline

  footer
    flex: 0 $baseline * 5
    display flex
    flex-flow column wrap
    padding 0 $baseline

  &__subtitle
    flex 0 $baseline * 2
    display flex

  &__description
    flex 1
    display flex

  h1
    margin auto auto 0
    width 100%
    transition font-size 0.2s ease-out
    font-weight 700
    line-height 0.75
    color: #fff
    letter-spacing -4px
    text-indent: -4px
    font-size 50px

  h2
    font-size $baseline
    font-weight 400
    line-height 0.8
    margin auto auto 0

  p
    font-size 13px
    line-height 1.5
    font-weight 300
    margin 13px auto 0

</style>
