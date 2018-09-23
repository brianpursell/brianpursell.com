<template>
    <button id="scroll-to-top" v-bind:style="ScrollToTopStyle">
      <font-awesome-icon @click="smoothScroll" icon="angle-up" size="3x" color="white" />
    </button>
</template>

<script>
import { smoothScroll } from '../methods/index';
export default {
  name: 'ScrollToTop',
  data: () => {
    return {
      ScrollToTopStyle: {
        outline: 'none',
        opacity: 0
      }
    }
  },
  methods: {
    smoothScroll
  },
  created () {
    window.addEventListener('scroll', () => {
      this.ScrollToTopStyle.opacity =  window.scrollY > 250 ? 1 : 0;
    });
  }
}
</script>