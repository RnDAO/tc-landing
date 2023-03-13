<template>
  <div class="tc-gray-gradient_bg">
    <div class="container">
      <row-one />
    </div>
    <footer-section class="mt-12" />
  </div>
</template>

<script setup>
import FooterSection from "~~/components/pages/team/footerSection.vue";
import RowOne from "~~/components/pages/team/rowOne.vue";
useHead({
  titleTemplate: "%s - TogetherCrew",
  titleTemplate: () => {
    return "Team | TogetherCrew";
  },
});
</script>

<style></style>
