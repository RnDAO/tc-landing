<template>
  <div>
    <tc-top-menu class="hidden md:block" />
    <tc-top-menu-xs class="block md:hidden" />
    <slot />
    <tc-footer />
  </div>
</template>

<script>
import TcTopMenu from "~/components/layouts/tcTopMenu.vue";
import TcTopMenuXs from "~/components/layouts/tcTopMenuXs.vue";
import TcFooter from "~~/components/layouts/tcFooter.vue";
export default {
  components: { TcTopMenu, TcFooter, TcTopMenuXs },
};
</script>

<style></style>
