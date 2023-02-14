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
  titleTemplate: "%s - ToghetherCrew",
  titleTemplate: () => {
    return "Team | ToghetherCrew";
  },
});
const team = ref("");
onMounted(async () => {
  const { data: weatherdata, pending } = await useAsyncData("weatherdata", () =>
    $fetch(
      `https://api.notion.com/v1/databases/fb857b3358d74559a8fa70528a39dec6/query`,
      {
        method: "post",
        headers: {
          Authorization: "secret_aMZqZwPB648QMjue9STo3aAEx1LahPALmo7iis1kX9G",
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
        },
      }
    )
  ).catch((e) => {
    console.log(e);
  });
});
</script>

<style></style>
