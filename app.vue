<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :duration="8000" color="false" :throttle="3000">
      <template #default> <tc-loading /> </template>
    </NuxtLoadingIndicator>
    <NuxtPage />
  </NuxtLayout>
</template>
