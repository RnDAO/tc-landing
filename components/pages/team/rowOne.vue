<template>
  <div class="space-y-4 pt-12">
    <h1 class="text-4xl font-bold text-center">Meet our team</h1>
    <p class="text-base text-center">
      We are an international <b>DAO team</b> of data <br />
      scientists and Web3 enthusiasts
    </p>
    <div
      class="bg-white shadow-2xl md:p-12 gap-4 m-3 md:m-0 rounded-box flex flex-row flex-wrap justify-center"
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
import ProfileCard from "@/components/pages/team/profileCard.vue";

const team = teamMembers;
</script>

<style></style>
