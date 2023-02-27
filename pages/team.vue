<template>
  <div class="tc-gray-gradient_bg">
    <div class="container">
      <row-one :team="team" />
    </div>
    <footer-section class="mt-12" />
  </div>
</template>

<script setup>
import FooterSection from "~~/components/pages/team/footerSection.vue";
import RowOne from "~~/components/pages/team/rowOne.vue";

useHead({
  titleTemplate: "%s - ToghetherCrew",
  titleTemplate: () => {
    return "Team | ToghetherCrew";
  },
});
let team = [];
const config = useRuntimeConfig();

const response = await useAsyncData("response", () =>
  $fetch(`${config.public.baseUrl}/notion/databases`)
);
team = response.data._rawValue;
</script>

<style></style>
