<template>
  <nav class="navbar is-success">
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <div class="hamburger">
      <button 
        @click="$store.commit('toggleSlideout')" 
        v-bind:class="$store.getters.navbarStyle" 
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return  {
      title: 'Brian Pursell'
    }
  }
}
</script>