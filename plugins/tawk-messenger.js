import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TawkMessengerVue, {
    propertyId: "6439985c4247f20fefebb1d9",
    widgetId: "1gu0fmap5",
  });
});
