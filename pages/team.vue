<template>
  <div>
    <div class="container">
      <row-one />
    </div>
    <footer-section />
  </div>
</template>

<script setup>
import FooterSection from "~~/components/pages/team/FooterSection.vue";
import RowOne from "~~/components/pages/team/RowOne.vue";
useHead({
  titleTemplate: "%s - ToghetherCrew",
  titleTemplate: () => {
    return "Team | ToghetherCrew";
  },
});
</script>

<style></style>
