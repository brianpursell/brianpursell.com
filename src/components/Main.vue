<template>
  <div class="main" v-bind:style="$store.getters.mainStyle">
    <Navbar />
    <section class="full-section is-secondary">
      <h1 style="margin:0;padding-top:25%;font-size:60px;text-align:center;">Coming Soon</h1>
    </section>
  </div>
</template>

<script>
import Navbar from './Navbar';
import ContactForm from './ContactForm';

export default {
  name: 'Main',
  components: {
    Navbar,
    ContactForm
  }
}
</script>