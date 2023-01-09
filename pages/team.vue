<template>
  <div>
    <div class="container">
      <row-one />
    </div>
    <footer-section/>
  </div>
</template>

<script>
import FooterSection from '~~/components/pages/team/FooterSection.vue';
import RowOne from "~~/components/pages/team/RowOne.vue";
export default {
  components: { RowOne, FooterSection },
};
</script>

<style>

</style>
