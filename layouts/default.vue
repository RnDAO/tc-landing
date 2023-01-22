<template>
  <div>
    <tc-top-menu class="hidden md:block" />
    <tc-top-menu-xs class="block md:hidden"/>
    <slot />
    <tc-footer />
  </div>
</template>

<script>
import TcTopMenu from "~/components/layouts/tc_topMenu.vue";
import TcTopMenuXs from "~/components/layouts/tc_topMenuXs.vue";
import TcFooter from "~~/components/layouts/tc_footer.vue";
export default {
  components: { TcTopMenu, TcFooter, TcTopMenuXs },
};
</script>

<style></style>
