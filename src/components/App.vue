<template>
  <div id="app">
    <Slideout />
    <Main />
    <ScrollToTop />
  </div>
</template>

<script>
import sassStyles from '../sass/main.scss';
import Main from './Main';
import Slideout from './Slideout';
import ScrollToTop from './ScrollToTop';

export default {
  name: 'app',
  components: {
    Main,
    Slideout,
    ScrollToTop
  }
}
</script>