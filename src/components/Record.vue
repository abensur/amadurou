<template>
  <button
    class="record"
    v-bind:class="{ 'record--listening': recording }"
    v-on:click="getSpeech">
    <svg width="25" height="25" viewBox="0 0 25 25">
      <path d="M16 11c0 2.209-1.791 4-4 4s-4-1.791-4-4v-7c0-2.209 1.791-4 4-4s4 1.791 4 4v7zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z"/>
      <rect width="21" height="21" x="2" y="2" rx="3" ry="3" />
    </svg>
  </button>
</template>

<script>

import Fuse     from 'fuse.js';
import annyang  from 'annyang';
import { food } from '../data.json';

annyang.debug(true);
annyang.setLanguage('pt-BR');

export default {

  name: 'record',

  data: function () {
    return {
      recording: false,

      commands: {
        'início': () => {
          this.goTo({ name: '/' });
        },

        'hoje': () => {
          this.goTo({
            name: 'month',
            params: {
              number: (new Date()).getMonth(),
            },
          });
        },

        '(mostrar) *nome': (name) => {
          const matches = this.fuse.search(name);

          if (matches.length === 1) {
            this.goTo({
              name: 'food',
              params: {
                number: food.indexOf(matches[0]),
              },
            });
          } else {
            matches.map(it => console.log(`${it.name}?`));
          }
        },
      },

      fuseOptions: {
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        keys: [
          'name',
          'category',
        ],
      },
    };
  },

  watch: {
    recording: function () {
      annyang[this.recording ? 'start' : 'abort']();

      this.$emit('toggleRecording', this.recording);
    },
  },

  methods: {
    getSpeech: function () {
      this.recording = !this.recording;
    },
    goTo: function (path) {
      this.$router.push(path);
    },
  },

  mounted() {
    annyang.addCommands(this.commands);

    annyang.addCallback('resultMatch', () => {
      this.recording = false;
    });

    this.fuse = new Fuse(food, this.fuseOptions);
  },
};
</script>

<style scoped lang="stylus">

@import '../variables.styl';

.record
  flex 0 $record
  height $record
  width $record
  border-radius 100%
  border none
  box-shadow none
  margin auto
  background #000
  text-align center
  transition all 0.3s ease
  position relative

  &:focus
    outline none

  svg
    position relative
    top 1px

  rect
    display none
    fill $red

  path
    fill $white
    transition all 0.3s ease

  &--listening
    &::before,
    &::after
      background #000
      border-radius 100%
      content ''
      height 100%
      left 0
      position absolute
      top: 0
      width 100%
      z-index 2

    &::after
      background $red
      animation pulse 1s ease-out infinite;
      z-index 1

    svg
      z-index 2

    path
      display none

    rect
      display block

@keyframes pulse
  0%
    opacity 0
    transform scale(1.1, 1.1)
  50%
    opacity 0.3
  80%
    opacity 0
  100%
    opacity 0
    transform scale(1.5, 1.5)

</style>
