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

<script>
import RowFive from "~/components/pages/homepage/RowFive.vue";
import RowFour from "~/components/pages/homepage/RowFour.vue";
import RowOne from "~/components/pages/homepage/RowOne.vue";
import RowThree from "~/components/pages/homepage/RowThree.vue";
import RowTwo from "~/components/pages/homepage/RowTwo.vue";
export default {
  components: { RowOne, RowTwo, RowThree, RowFour, RowFive },
};
</script>

<style>

</style>
