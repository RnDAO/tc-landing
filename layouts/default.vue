<template>
  <div>
    <tc-top-menu class="hidden md:block" />
    <tc-top-menu-xs class="block md:hidden"/>
    <slot />
    <tc-footer />
  </div>
</template>

<script>
import TcTopMenu from "~/components/layouts/TcTopMenu.vue";
import TcTopMenuXs from "~/components/layouts/TcTopMenuXs.vue";
import TcFooter from "~~/components/layouts/TcFooter.vue";
export default {
  components: { TcTopMenu, TcFooter, TcTopMenuXs },
};
</script>

<style></style>
