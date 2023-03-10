<template>
  <div class="space-y-4 mt-12">
    <div
      class="bg-white shadow-2xl rounded-box overflow-hidden"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center md:pl-12"
      >
        <div class="space-y-4 px-8 md:px-0">
          <h3 class="text-2xl font-bold pt-8 md:pt-0">
            Healthy communities are <br class="hidden md:block" />
            at the heart of Web3
          </h3>
          <div class="space-y-6">
            <p>
              Some communities fall apart under pressure, others come stronger
              <br class="hidden md:block" />
              together. We exist to help you become the latter and ensure your
              <br class="hidden md:block" />
              members and stakeholders thrive.
            </p>
            <p>
              Analytics are most valuable when we can combine data from multiple
              <br class="hidden md:block" />
              sources and help you make <b>sense of the bigger picture.</b>
              <br class="hidden md:block" />
              We partner with multiple DAO tooling projects to bridge silos
              <br class="hidden md:block" />
              and empower Web3 communities with the best insights.
            </p>
          </div>
        </div>
        <img src="@/static/globe.svg" alt="" />
      </div>
    </div>
    <div
      class="bg-warning-30 shadow-2xl rounded-box overflow-hidden"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col-reverse md:flex-row justify-between items-center p-8 md:px-12 md:py-12"
      >
        <img src="@/static/methodogy.svg" class="mt-8 md:mt-0" alt="" />
        <div class="space-y-4 pt-3">
          <h3 class="text-2xl font-bold text-white">Our methodology</h3>
          <div class="space-y-6 text-white">
            <p>
              We look at communities as nested <b>interdependent ecosystems</b>,
              not <br class="hidden md:block" />
              singular structures. A community’s health is the aggregation of
              its <br class="hidden md:block" />
              subsystems. It includes individual members, relationships amongst
              <br class="hidden md:block" />
              members, formal and informal subgroups and overall community
              <br class="hidden md:block" />
              structure.
            </p>
            <p>
              Our framework and definitions are based on robust scientific
              research.
            </p>
          </div>
          <tc-button
            button-type="outlined"
            custom-classes="border-white text-white h-[48px] w-full md:w-[240px] hover:bg-white hover:text-black transition delay-75 ease-in"
            label="Read our research"
            v-on="{
              click: () => {
                redirectToResearch();
              },
            }"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-white shadow-2xl rounded-box overflow-hidden"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center p-8 md:pl-12 md:py-6"
      >
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">Powerful yet easy to implement</h3>
          <div class="space-y-6">
            <p>
              Virtual organizations have a rich digital footprint that we
              believe is <br class="hidden md:block" />
              <b>currently underutilized.</b>
            </p>
            <p>
              This has the dual benefit of low implementation effort and
              providing <br class="hidden md:block" />
              deep practical insights to community leaders.
            </p>
          </div>
          <tc-button
            button-type="contained"
            custom-classes="h-[48px] w-full md:w-[240px] mt-8"
            label="Schedule a Demo"
            v-on="{
              click: () => {
                redirectToCalendar();
              },
            }"
          />
        </div>
        <img src="@/static/network-graph.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

function redirectToCalendar() {
  location.replace(config.public.calendarUrl);
}
function redirectToResearch() {
  const link = document.createElement('a')
  link.href = config.public.researchUrl
  link.target = '_blank'
  link.click()
}
</script>

<style></style>
