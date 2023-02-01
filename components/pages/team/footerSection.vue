<template>
  <div class="bg-warning-30 shadow-inner py-14">
    <div class="container py-14 space-y-8 p-4 md:p-0">
      <h3 class="text-white text-2xl font-bold text-center">
        We operate as a DAO, join us!
      </h3>
      <div class="flex flex-row justify-center space-x-4">
        <img src="@/static/tc-logo-sm.svg" alt="" />
        <p class="font-bold text-white">powered by RnDAO</p>
      </div>
      <p class="text-justify md:text-center text-sm text-white">
        TogetherCrew was conceived and is being incubated in RnDAO - an R&D DAO
        with a mission to empower humane <br />
        collaboration. Join RnDAO to contribute to TogetherCrew and other
        ventures. Learn about and research problem parts of DAO <br />
        operations. Or start your entrepreneurial journey by building a new
        venture with all the support of the RnDAO Community.
      </p>
      <tc-button
        button-type="outlined"
        label="Join our Discord"
        class="mx-auto text-center"
        custom-classes="h-[48px] w-[240px] border-white text-white hover:bg-white hover:text-black transition-all delay-75"
        v-on="{
          click: () => {
            redirectToDiscord();
          },
        }"
      />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
function redirectToDiscord() {
  const link = document.createElement("a");
  link.href = config.public.discord;
  link.target = "_blank";
  link.click();
}
</script>

<style></style>
