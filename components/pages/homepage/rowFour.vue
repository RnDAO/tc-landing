<template>
  <div
    class="flex flex-col md:flex-row justify-between md:mt-14 p-3 md:p-0"
    data-aos="fade-up"
  >
    <div>
      <h6 class="text-2xl text-left font-bold md:my-8">Don't like waiting?</h6>
      <p class="text-base">
        Join us now as an early-adopter community and receive
        <br class="hidden md:block" />
        a detailed Community Health Report!
      </p>
      <tc-button
        label="Schedule a Demo"
        class="mt-3"
        custom-classes="h-[48px] w-full md:w-[240px]"
        v-on="{
          click: () => {
            redirectToCalendar();
          },
        }"
      />
      <div class="space-y-4 mt-8 md:mt-12 comma md:w-5/6">
        <p class="text-base font-bold">
          With the Community Health Report, we understood the overall feeling of
          our members towards our community. It helped us recognize the
          different
        </p>
        <p class="text-base font-bold">
          kinds of interactions and uncover hidden problems. Thanks to all the
          provided insights we could take the necessary actions.
        </p>
      </div>
      <div class="flex flex-row mt-4 w-2/3 md:w-full relative -top-8">
        <p class="text-sm">Incandenza, Community Guild & Core Contributor at</p>
        <img src="@/static/icons/aragorn-sm.svg" alt="" />
      </div>
    </div>
    <img
      class="hidden md:block"
      src="@/static/icons/dashboard-overview.svg"
      alt=""
    />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

function redirectToCalendar() {
  location.replace(config.public.calendarUrl);
}
</script>

<style></style>
