<template>
  <div class="px-3 md:px-0">
    <div
      class="md:w-7/12 mx-auto space-y-10 md:space-y-14 relative top-[20rem] md:top-[3rem] px-3"
    >
      <h1 class="text-3xl md:text-4xl font-bold text-center">
        Community health insights <br class="hidden md:block" />
        for Web 3
      </h1>
      <p class="text-left text-sm md:text-center md:text-base">
        A new type of organization needs a new types of data analytics. We have
        assembled a team of <b>data scientists</b> and <b>Web 3 veterans</b> to
        empower community leaders with deep, actionable insights
      </p>
      <div class="space-y-2 md:space-y-4">
        <div class="space-y-2 md:space-y-4">
          <p class="text-left text-sm md:text-center md:text-base">
            While the team is busy building a suite of tools...
          </p>
          <p class="text-left text-sm md:text-center md:font-bold md:text-xl">
            We have a small appetizer feature to get you started!
          </p>
        </div>
        <tc-button
          label="Try now"
          class="mx-auto text-center"
          custom-classes="h-[48px] w-full md:w-[240px]"
          v-on="{
            click: () => {
              redirectToDashboard();
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
function redirectToDashboard() {
  location.replace(config.public.dashboardUrl);
}
</script>

<style></style>
