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
import RowFive from "~/components/pages/homepage/row_five.vue";
import RowFour from "~/components/pages/homepage/row_four.vue";
import RowOne from "~/components/pages/homepage/row_one.vue";
import RowThree from "~/components/pages/homepage/row_three.vue";
import RowTwo from "~/components/pages/homepage/row_two.vue";
useHead({
  titleTemplate: "%s - ToghetherCrew",
  titleTemplate: () => {
    return "Home | ToghetherCrew";
  },
});
</script>

<style></style>
