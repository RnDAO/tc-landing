<template>
  <div class="space-y-4 pt-12">
    <h1 class="text-4xl font-bold text-center">Meet our team</h1>
    <p class="text-base text-center">
      We are an international <b>DAO team</b> of data <br />
      scientists and Web3 enthusiasts
    </p>
    <div
      class="bg-white shadow-2xl my-4 rounded-box flex flex-row flex-wrap gap-4 justify-center p-4"
    >
      <profile-card
        v-for="(teamMember, index) in team"
        :key="index"
        :teamMember="teamMember"
      />
    </div>
  </div>
</template>

<script setup>
import teamMembers from "@/utils/teamMembers";
import ProfileCard from "./profileCard.vue";

const team = teamMembers;
</script>

<style></style>
