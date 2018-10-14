<template>
  <div class="slideout-menu is-secondary" v-bind:style="$store.getters.slideoutStyle">
    <ul>
      <li>
        <a href="#grey" v-on:click="smoothScroll">About</a>
      </li>
      <li>
        <a href="#green" v-on:click="smoothScroll">Projects</a>
      </li>
      <li>
        <a href="#red" v-on:click="smoothScroll">Contact</a>
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