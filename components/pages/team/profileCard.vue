<template>
  <div
    class="relative bg-stone-50 transition-all ease-in-out delay-75 group overflow-hidden w-full h-[320px] md:w-[270px] md:h-[270px] rounded-[8px]"
  >
    <img
      v-if="!props.teamMember.avatar"
      src="~~/static/team/empty-avatar.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else
      :src="props.teamMember.avatar"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <div class="relative p-2">
      <div class="mt-0">
        <div
          class="transition-all transform translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <div class="p-2">
            <p class="text-black text-xl font-bold">
              {{ props.teamMember.name }}
            </p>
            <p>
              {{ props.teamMember.role }}
            </p>
          </div>
        </div>
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
