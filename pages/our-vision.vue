<template>
  <div class="tc-our-vision__header min-h-screen">
    <div class="container pt-2 pb-12">
      <row-one />
      <main-section />
    </div>
    <row-five />
  </div>
</template>

<script>
import RowFive from "~~/components/pages/homepage/RowFive.vue";
import MainSection from "~~/components/pages/ourVision/MainSection.vue";
import RowOne from "~~/components/pages/ourVision/RowOne.vue";
export default {
  components: { RowOne, MainSection, RowFive },
};
</script>

<style></style>
