<template>
  <div
    class="bg-background-gray-light h-[340px] md:h-[220px] relative left-0 bottom-0 right-0 shadow-xl overflow-hidden"
  >
    <div>
      <div class="container p-4 pt-8 md:pt-12 md:p-0 md:py-12">
        <div
          class="flex flex-col md:flex-row justify-between items-center md:space-x-4"
        >
          <div class="flex flex-row justify-between w-3/4 md:w-2/6">
            <ul class="md:w-1/2 space-y-3">
              <li
                class="cursor-pointer text-sm md:text-base text-tc-light"
                @click="redirect('/our-vision')"
              >
                Our Vision
              </li>
              <li
                class="cursor-pointer text-sm md:text-base text-tc-light"
                @click="redirect('/team')"
              >
                Team
              </li>
            </ul>
            <ul class="md:w-1/2 space-y-3">
              <li
                class="cursor-pointer text-sm md:text-base text-tc-light"
                @click="redirect('/contact-us')"
              >
                Contact
              </li>
              <li class="cursor-pointer text-sm md:text-base text-tc-light">
                Privacy & Teams
              </li>
            </ul>
          </div>
          <div class="w-3/4 md:w-2/6 mt-8 md:mt-0">
            <ul class="space-y-3">
              <li class="text-sm md:text-base text-tc-light">
                Join us now as an early-adopter community
              </li>
              <div class="flex justify-center md:block">
                <tc-button
                  label="Schedule a demo"
                  class="mx-auto text-center"
                  custom-classes="w-[154px] float-left"
                  v-on="{
                    click: () => {
                      redirectToCalendar();
                    },
                  }"
                />
              </div>
            </ul>
          </div>
          <div class="md:w-1/6 space-y-3 mt-5 md:mt-0 md:space-y-3 text-center">
            <p class="text-sm md:text-base text-tc-light">Follow us</p>
            <ul class="flex flex-row justify-between space-x-5 md:space-x-0">
              <li
                @click="redirectSocialMedia('telegram')"
                class="cursor-pointer"
              >
                <img src="@/static/telegram-white.svg" alt="" />
              </li>
              <li
                @click="redirectSocialMedia('twitter')"
                class="cursor-pointer"
              >
                <img src="@/static/twitter-white.svg" alt="" />
              </li>
              <li
                @click="redirectSocialMedia('discord')"
                class="cursor-pointer"
              >
                <img src="@/static/discord-white.svg" alt="" />
              </li>
              <li @click="redirectSocialMedia('mirror')" class="cursor-pointer">
                <img src="@/static/mirror-white.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-30 h-[40px]"
    >
      <div class="container mt-2 text-center md:text-left">
        <span class="text-tc text-sm">Copyright © 2022 RnDAO</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

function redirectToCalendar() {
  location.replace(config.public.calendarUrl);
}
function redirect(route) {
  const router = useRouter();
  router.push(route);
}

function redirectSocialMedia(socialMedia) {
  switch (socialMedia) {
    case "telegram":
      location.replace(config.public.telegram);
      break;
    case "discord":
      location.replace(config.public.discord);
      break;
    case "mirror":
      location.replace(config.public.mirror);
      break;
    case "twitter":
      location.replace(config.public.twitter);
      break;
    default:
      break;
  }
}
</script>

<style></style>
