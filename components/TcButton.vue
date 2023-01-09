<template>
  <div>
    <button
      v-if="props.buttonType === 'contained'"
      class="bg-primary h-[34px] w-[100px] text-white rounded-[8px]"
      :class="[customClasses ? customClasses : '']"
    >
      {{ props.label }}
    </button>
    <button
      v-else-if="props.buttonType === 'outlined'"
      class="border border-black h-[34px] w-[100px] text-black rounded-[8px]"
      :class="[customClasses ? customClasses : '']"
    >
      {{ props.label }}
    </button>
    <button
      v-else-if="props.buttonType === 'transparent'"
      class="h-[34px] w-[100px] text-primary rounded-[8px]"
      :class="[customClasses ? customClasses : '']"
    >
      {{ props.label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  buttonType: {
    type: String,
    default: "contained",
  },
  label: {
    type: String,
    default: "",
  },
  customClasses: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
