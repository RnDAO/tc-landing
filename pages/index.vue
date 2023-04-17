<template>
  <div>
    <div class="tc-homepage__header">
      <div class="container mx-auto">
        <row-one />
        <row-two />
        <row-three />
        <row-four />
      </div>
      <div>
        <row-five />
      </div>
    </div>
  </div>
</template>

<script setup>
import RowOne from "~/components/pages/homepage/rowOne.vue";
import RowTwo from "~/components/pages/homepage/rowTwo.vue";
import RowThree from "~/components/pages/homepage/rowThree.vue";
import RowFour from "~/components/pages/homepage/rowFour.vue";
import RowFive from "~/components/pages/homepage/rowFive.vue";
useHead({
  titleTemplate: "%s - TogetherCrew",
  titleTemplate: () => {
    return "Home | TogetherCrew";
  },
});
</script>

<style></style>
