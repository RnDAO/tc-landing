<template>
  <div class="bg-white shadow-xl">
    <div class="container h-[60px] mx-auto flex flex-row justify-between items-center">
      <img src="@/static/icons/tc-logo.svg" class="bg-cover" alt="" />
      <div class="flex flex-row gap-x-12 items-center">
        <ul class="flex flex-row gap-5">
          <li v-for="(item, index) in menuListItems" :key="index" class="hover:bg-background-gray rounded-[8px] py-2 px-3">
            <NuxtLink :to="item.path">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex flex-row-reverse gap-3">
          <tc-button label="Try now" />
          <tc-button label="Log in" button-type="outlined" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TcButton from "~/components/TcButton.vue";
import menuListItems from "~/utils/topMenuList";
export default {
  components: { TcButton },
  data() {
    return { menuListItems };
  },
};
</script>

<style>

</style>
