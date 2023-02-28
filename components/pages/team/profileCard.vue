<template>
  <div
    class="relative bg-stone-50 transition-all ease-in-out delay-75 group overflow-hidden w-full h-[320px] md:w-[270px] md:h-[270px] rounded-[8px]"
  >
    <img
      v-if="!props.teamMember.avatar"
      src="~~/static/team/empty-avatar.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-10"
      alt=""
    />
    <img
      v-else
      :src="props.teamMember.avatar"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-10"
      alt=""
    />
    <div class="relative">
      <div class="mt-0 py-4 group-hover:py-1">
        <div
          class="bg-avatar group-hover:hidden relative translate-y-[220px] md:translate-y-[180px] h-[90px]"
        />
        <div
          class="transition-all transfor translate-y-[160px] md:translate-y-[120px] opacity-100 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <div class="px-4 py-2">
            <p class="text-black text-xl font-bold">
              {{ props.teamMember.name }}
            </p>
            <p class="opacity-0 group-hover:opacity-100">
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
