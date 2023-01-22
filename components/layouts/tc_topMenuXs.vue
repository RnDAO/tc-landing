<template>
  <div>
    <div
      class="fixed top-0 bg-white w-full py-3 px-5 flex flex-row justify-between items-center z-50 shadow-lg"
    >
      <div>
        <img src="@/static/tc-logo-sm-purple.svg" alt="" />
      </div>
      <div @click="toggleDrawer">
        <img src="@/static/hamburger.svg" alt="" />
      </div>
    </div>
    <tc-drawer :is-open="isDrawerOpen" :speed="500" @close="closeDrawer">
      <slot>
        <div class="w-full flex flex-col gap-y-12 items-center">
          <ul class="flex flex-col gap-5">
            <li class="hover:bg-background-gray rounded-[8px] py-2 px-3">
              <NuxtLink to="/" @click="closeDrawer"> Homepage </NuxtLink>
            </li>
            <li
              v-for="(item, index) in menuListItems"
              :key="index"
              class="hover:bg-background-gray rounded-[8px] py-2 px-3"
            >
              <NuxtLink :to="item.path" @click="closeDrawer">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
          <div class="flex flex-col gap-3">
            <tc-button custom-classes="w-[300px] h-[44px]" label="Try now" />
            <tc-button
              custom-classes="w-[300px] h-[44px]"
              label="Log in"
              button-type="outlined"
            />
          </div>
        </div>
      </slot>
    </tc-drawer>
  </div>
</template>

<script>
import TcDrawer from "../tc_drawer.vue";
import menuListItems from "~/utils/topMenuList";

export default {
  components: { TcDrawer },
  data() {
    return {
      isDrawerOpen: false,
      menuListItems,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      this.$emit("toggle_drawer", this.isDrawerOpen);
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
  },
};
</script>

<style></style>
