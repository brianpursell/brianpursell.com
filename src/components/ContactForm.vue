<template>
  <form name="contact" method="POST" action="http://localhost:3000/contact" netlify>
    <label>Email</label>
    <input type="text" name="email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <div data-netlify-recaptcha></div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>