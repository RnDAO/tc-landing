<template>
  <div class="px-3 md:px-0">
    <div
      class="bg-white shadow-lg rounded-box py-12 p-6 md:pl-10 mt-[22rem] md:mt-[6rem]"
    >
      <div class="flex flex-col md:flex-row justify-between">
        <div class="space-y-6 md:w-6/12">
          <h3 class="text-2xl font-bold mt-5">
            Pick the best time to connect <br class="hidden md:block" />
            with your community
          </h3>
          <p class="text-base">
            Because attention is precious, schedule your events
            <br class="hidden md:flex" />
            and announcements for maximum engagement.
          </p>
        </div>
        <div>
          <img src="@/static/icons/heatmap.svg" alt="" />
        </div>
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
                className="mx-auto h-[72px] w-[72px] bg-background-slate rounded-full justify-center flex items-center"
              >
                <div class="w-[32px] h-[32px] relative top-1">
                  <img src="@/static/discord.svg" alt="" />
                </div>
              </div>
              <p>1. Connect your discord community</p>
            </li>
            <li>
              <div
                className="mx-auto h-[72px] w-[72px] bg-background-slate rounded-full justify-center flex items-center"
              >
                <div class="w-[32px] h-[32px] relative">
                  <img src="@/static/calendar.svg" alt="" />
                </div>
              </div>
              <p>2. Select time period and channels</p>
            </li>
            <li>
              <div
                className="mx-auto h-[72px] w-[72px] bg-background-slate rounded-full justify-center flex items-center"
              >
                <div class="w-[32px] h-[32px] relative top-0.5 left-0.5">
                  <img src="@/static/star.svg" alt="" />
                </div>
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
            class="mx-auto text-center font-bold"
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
