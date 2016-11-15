<template>
  <div id="app"
       class="app"
       v-bind:class="{ 'app--recording': recording }"
      >
      <main class="app__main">
        <router-view></router-view>
      </main>
      <footer class="app__button">
        <record v-on:toggleRecording="toggleRecording"></record>
      </footer>
    </div>
</template>

<script>
import Record from './components/Record';

export default {

  name: 'app',

  components: {
    Record,
  },

  data: function () {
    return {
      recording: false,
    };
  },

  methods: {
    toggleRecording: function (rec) {
      this.recording = rec;
    },
  },
};

</script>

<style lang="stylus">

@import "variables.styl"

html, body
  box-sizing border-box
  height 100%
  width 100%
  margin 0

  *, *::before, *::after
    box-sizing inherit

.app
  font-family "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 100%
  width 100%
  position relative
  text-align center
  margin 0 auto

  &__main
    position absolute
    width 100%
    top 0
    bottom $record + ($baseline * 2)

    > div
      position absolute
      left 0
      top 0

  &__button
    position fixed
    background #fff
    display flex
    flex-flow row wrap
    height $record + ($baseline * 2)
    bottom 0
    width 100%

</style>
