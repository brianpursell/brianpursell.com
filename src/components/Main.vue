<template>
  <div class="main" v-bind:style="$store.getters.mainStyle">
    <Navbar />
    <section class="full-section with-nav is-primary"></section>
    <section id="grey" class="full-section is-secondary"></section>
    <section id="green" class="full-section is-success"></section>
    <section id="red" class="full-section">
      <ContactForm />
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