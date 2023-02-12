<template>
  <div class="bg-white z-50 sticky top-0">
    <div
      class="container h-[60px] mx-auto flex flex-row justify-between items-center"
    >
      <NuxtLink to="/">
        <img
          src="@/static/icons/tc-logo.svg"
          class="bg-cover"
          alt="toghetherCrew"
        />
      </NuxtLink>
      <div class="flex flex-row gap-x-12 items-center">
        <ul class="flex flex-row gap-5">
          <li
            v-for="(item, index) in menuListItems"
            :key="index"
            class="hover:bg-background-gray rounded-[8px] py-2 px-3"
          >
            <NuxtLink :to="item.path">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex flex-row-reverse gap-3">
          <tc-button
            label="Try now"
            v-on="{
              click: () => {
                redirectToDashboard();
              },
            }"
          />
          <tc-button
            label="Log in"
            button-type="outlined"
            v-on="{
              click: () => {
                loginWithDiscord();
              },
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TcButton from "~~/components/tcButton.vue";
import menuListItems from "~/utils/topMenuList";
const config = useRuntimeConfig();

function redirectToDashboard() {
  location.replace(config.public.dashboardUrl);
}
function loginWithDiscord() {
  location.replace(`${config.public.baseUrl}/auth/login`);
}
</script>

<style></style>
