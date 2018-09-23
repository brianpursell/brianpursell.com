<template>
  <nav class="navbar is-success">
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <div class="hamburger">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return  {
      title: 'brianpursell.com'
    }
  }
}
</script>