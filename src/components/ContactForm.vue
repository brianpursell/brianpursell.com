<template>
  <form name="contact" method="POST" action="/" netlify>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" name="email">
      </div>
    </div>
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" name="message"></textarea>
      </div>
    </div>
    <div data-netlify-recaptcha></div>
    <div class="control">
      <button class="button is-primary" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>