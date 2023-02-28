<template>
  <div>
    <button
      v-bind="$attrs"
      v-if="props.buttonType === 'contained'"
      class="bg-primary h-[34px] w-[100px] text-white rounded-[8px]"
      :class="[customClasses ? customClasses : '']"
    >
      <div class="flex flex-row justify-center items-center space-x-2">
        <slot />
        {{ props.label }}
      </div>
    </button>
    <button
      v-bind="$attrs"
      v-else-if="props.buttonType === 'outlined'"
      class="border border-black h-[34px] w-[100px] rounded-[8px]"
      :class="[customClasses ? customClasses : '']"
    >
      <div class="flex flex-row justify-center items-center space-x-3">
        <slot />
        {{ props.label }}
      </div>
    </button>
    <button
      v-bind="$attrs"
      v-else-if="props.buttonType === 'transparent'"
      class="h-[34px] w-[100px] text-primary rounded-[8px]"
      :class="[customClasses ? customClasses : '']"
    >
      <div class="flex flex-row justify-center items-center space-x-3">
        <slot />
        {{ props.label }}
      </div>
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
