<template>
  <div class="tc-our-vision_bg min-h-screen">
    <div class="tc-our-vision__header" data-aos="fade-up">
      <div class="container px-3 md:px-0 pt-4 pb-12">
        <row-one />
        <main-section />
      </div>
      <row-five />
    </div>
  </div>
</template>

<script setup>
import RowFive from "~~/components/pages/homepage/rowFive.vue";
import MainSection from "~/components/pages/ourVision/mainSection.vue";
import RowOne from "~~/components/pages/ourVision/rowOne.vue";
useHead({
  titleTemplate: "%s - TogetherCrew",
  titleTemplate: () => {
    return "Our vision | TogetherCrew";
  },
});
</script>

<style></style>
