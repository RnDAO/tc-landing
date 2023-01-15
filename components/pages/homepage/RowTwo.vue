<template>
  <div class="bg-white shadow-lg rounded-box py-12 pl-10 mt-[11rem]" data-aos="fade-up">
    <div class="flex flex-row justify-between items-center">
      <div class="space-y-6">
        <h3 class="text-2xl font-bold">
          Pick the best time to connect <br />
          with your community
        </h3>
        <p class="text-base">
          Because attention is precious, schedule your events <br />
          and announcements for maximum engagement.
        </p>
      </div>
      <img src="@/static/icons/heatmap.svg" alt="" />
    </div>
    <div class="text-center space-y-12">
      <h5 class="text-xl font-bold">
        Discover when is your community most active
      </h5>
      <ul class="w-8/12 mx-auto space-x-4 flex flex-row justify-between">
        <li>
          <div class="h-12 w-12 mx-auto bg-background-slate p-8 rounded-full text-center">
            <font-awesome-icon icon="fa-brands fa-discord" />
          </div>
          <p>1. Connect your discord community</p>
        </li>
        <li>
          <div class="h-12 w-12 mx-auto bg-background-slate p-8 rounded-full text-center">
            <font-awesome-icon icon="fa-calendar" />
          </div>
          <p>2. Select time period and channels</p>
        </li>
        <li>
          <div class="h-12 w-12 mx-auto bg-background-slate p-8 rounded-full text-center">
            <font-awesome-icon icon="fa-star" />

          </div>
          <p>3. Pick the best time for your event</p>
        </li>
      </ul>
      <div class="space-y-3 mt-8">
        <tc-button label="Try now" class="mx-auto text-center" custom-classes="h-[48px] w-[240px]" />
        <tc-button label="Schedule a Demo" class="mx-auto text-center" custom-classes="h-[48px] w-[240px]" button-type="transparent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
