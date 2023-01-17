<template>
    <div class="calendly-inline-widget" data-url="https://calendly.com/nimatorabiv/rndao-meeting" style="min-width:320px;height:730px;"></div>
  </template>
      
  <script>
  export default {
    mounted () {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
      document.head.appendChild(recaptchaScript)
    }
  }
  </script>