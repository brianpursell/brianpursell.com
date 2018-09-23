module.exports = {
  smoothScroll: function(e) {
    e.preventDefault();
    let target;

    if (this.$store.state.slideoutOpen) {
      this.$store.commit("toggleSlideout");
    }

    if (e.target.hash) {
      let id = e.target.hash.slice(1);
      target = document.getElementById(id).offsetTop;
    }

    window.scrollTo({
      top: target || 0,
      behavior: "smooth"
    });
  }
};
