<template>
  <div class="p-3">
    <div
      class="bg-white shadow-lg rounded-box py-12 p-6 mt-[15rem] md:pl-10 md:mt[2rem]"
      data-aos="fade-up"
    >
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="space-y-6">
          <h3 class="text-2xl font-bold">
            Pick the best time to connect <br class="hidden md:block" />
            with your community
          </h3>
          <p class="text-base">
            Because attention is precious, schedule your events
            <br class="hidden md:block" />
            and announcements for maximum engagement.
          </p>
        </div>
        <img src="@/static/icons/heatmap.svg" alt="" />
      </div>
      <div class="text-center space-y-12">
        <h5 class="text-md md:text-xl">
          Discover when is your community most active
        </h5>
        <client-only>
          <ul
            class="md:w-8/12 mx-auto space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-between"
          >
            <li>
              <div
                className="mx-auto h-16 w-16 bg-background-slate rounded-full justify-center flex items-center"
              >
                <img src="@/static/discord.svg" alt="" />
              </div>
              <p>1. Connect your discord community</p>
            </li>
            <li>
              <div
                className="mx-auto h-16 w-16 bg-background-slate rounded-full justify-center flex items-center"
              >
                <img src="@/static/calendar.svg" alt="" />
              </div>
              <p>2. Select time period and channels</p>
            </li>
            <li>
              <div
                className="mx-auto h-16 w-16 bg-background-slate rounded-full justify-center flex items-center"
              >
                <img src="@/static/star.svg" alt="" />
              </div>
              <p>3. Pick the best time for your event</p>
            </li>
          </ul>
        </client-only>
        <div class="space-y-3 mt-8">
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
          <tc-button
            label="Schedule a Demo"
            class="mx-auto text-center"
            custom-classes="h-[48px] w-[240px]"
            button-type="transparent"
            v-on="{
              click: () => {
                redirectToCalendar();
              },
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

function redirectToCalendar() {
  location.replace(config.public.calendarUrl);
}
function redirectToDashboard() {
  location.replace(config.public.dashboardUrl);
}
</script>

<style></style>
