<template>
  <div class="p-3">
    <h3 class="text-2xl text-center font-bold mt-3 mb-8 md:mb-8">
      More features coming soon!
    </h3>
    <div class="space-y-4">
      <div
        class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4"
      >
        <div
          class="w-full md:w-1/2 shadow-2xl bg-white p-5 rounded-box"
          data-aos="fade-up"
        >
          <h5 class="font-bold text-lg md:text-2xl">
            Spot value-adding members <br class="hidden md:block" />
            in your community
          </h5>
          <div class="relative float-right top-12">
            <img src="@/static/icons/members.svg" alt="" />
          </div>
        </div>
        <div
          class="w-full md:w-1/2 shadow-2xl text-white bg-primary p-5 rounded-box"
          data-aos="fade-up"
        >
          <h5 class="font-bold text-lg md:text-2xl">
            Use data to improve onboarding
          </h5>
          <div class="relative float-left md:top-12">
            <img src="@/static/icons/graph.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between space-x-4">
        <div
          class="w-full flex flex-col shadow-2xl bg-warning-30 p-5 rounded-box"
          data-aos="fade-up"
        >
          <h5 class="font-bold text-white text-lg md:text-2xl">
            Explore all the metrics
          </h5>
          <p class="text-sm md:text-base text-white">
            that determine the health of your community
          </p>
          <div
            class="relative w-10/12 md:w-full mx-auto flex justify-end float-right py-12 md:py-0 mr-8"
          >
            <img src="@/static/icons/heart.svg" alt="" />
          </div>
          <div>
            <p class="text-white flex flex-col md:flex-row md:items-center">
              Read our research on
              <NuxtLink
                to="https://rndao.mirror.xyz/F-SMj6p_jdYvrMMkR1d9Hd6YbEg39qItTKfjo-zkgqM"
                target="_blank"
                class="bg-warning-10 w-2/3 md:w-auto px-4 py-1 ml-0 md:ml-3 rounded-full"
                >Community Health
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4"
      >
        <div
          class="md:w-1/2 shadow-2xl bg-secondary p-5 rounded-box overflow-hidden"
          data-aos="fade-up"
        >
          <h5 class="font-bold text-lg md:text-2xl">
            Monitor members who <br class="hidden md:block" />
            disengage
          </h5>
          <p class="text-base">Take action to bring them back</p>
          <div class="relative left-2/4 -translate-x-1/4 top-12">
            <img src="@/static/icons/arrowdown.svg" alt="" />
          </div>
        </div>
        <div
          class="md:w-1/2 shadow-2xl bg-white overflow-hidden p-5 rounded-box"
          data-aos="fade-up"
        >
          <h5 class="font-bold text-lg md:text-2xl">Benchmark your metrics</h5>
          <p class="text-base">Learn from others</p>
          <div class="relative float-right top-8">
            <img src="@/static/icons/dao.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
