<template>
  <div>
    <div
      class="w-[270px] h-[270px] relative rounded-box overflow-hidden grayscale"
    >
      <div>
        <p class="absolute font-bold text-lg left-4 bottom-3">
          {{ props.teamMember.name }}
        </p>
        <p>
          {{ props.teamMember.stack }}
        </p>
      </div>
      <div class="relative overflow-hidden before:absolute">
        <img src="~~/static/team/ashish.webp" class="w-full" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  teamMember: {
    type: Object,
    default: () => {},
  },
});
</script>

<style></style>
