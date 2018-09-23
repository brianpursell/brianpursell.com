<template>
  <div class="slideout-menu" v-bind:style="$store.getters.slideoutStyle">
    <ul>
      <li>
        <a href="#grey" v-on:click="smoothScroll">grey</a>
      </li>
      <li>
        <a href="#green" v-on:click="smoothScroll">green</a>
      </li>
      <li>
        <a href="#yellow" v-on:click="smoothScroll">yellow</a>
      </li>
      <li>
        <a href="#red" v-on:click="smoothScroll">red</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { smoothScroll } from '../methods/index';

export default {
  name: 'Slideout',
  methods: {
    smoothScroll
  }
}
</script>