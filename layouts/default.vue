<template>
  <div>
    <tc-top-menu />
    <slot />
    <tc-footer />
  </div>
</template>

<script>
import TcTopMenu from "~/components/layouts/TcTopMenu.vue";
import TcFooter from "~~/components/layouts/TcFooter.vue";
export default {
  components: { TcTopMenu, TcFooter },
};
</script>

<style></style>
