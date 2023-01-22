<template>
  <div
    class="relative bg-white group overflow-hidden w-[270px] h-[270px] rounded-box"
  >
    <img
      v-if="props.teamMember.name === 'Ashish'"
      src="~~/static/team/ashish.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Danielo'"
      src="~~/static/team/Daniel.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Katerina, PhD'"
      src="~~/static/team/Katerina.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Sepehr'"
      src="~~/static/team/Sepher.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Tjitse van der Molen'"
      src="~~/static/team/Ene.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Mehrdad Mir Mohammad Sadeghi'"
      src="~~/static/team/Mehrdad.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Denisa'"
      src="~~/static/team/Denisa.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Martin Agubata'"
      src="~~/static/team/Martin.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <img
      v-else-if="props.teamMember.name === 'Zuie4J'"
      src="~~/static/team/Nima.webp"
      class="absolute inset-0 object-cover grayscale w-full h-full group-hover:opacity-50"
      alt=""
    />
    <div class="relative p-2">
      <div class="mt-40">
        <div
          class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <div class="p-2">
            <p class="text-black text-xl font-bold">
              {{ props.teamMember.name }}
            </p>
            <p>
              {{ props.teamMember.stack }}
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
