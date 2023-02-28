<template>
  <div class="tc-gray-gradient_bg">
    <div class="container py-14 md:mb-12 p-3 md:p-0 md:py-8">
      <h1
        class="text-4xl font-bold text-center mt-12 md:mt-0 mb-8"
        data-aos="fade-up"
      >
        Contact us
      </h1>
      <div class="space-y-4">
        <div
          class="bg-white shadow-2xl rounded-box overflow-hidden"
          data-aos="fade-up"
        >
          <client-only>
            <div class="flex justify-center items-center px-12 py-8">
              <div class="space-y-3">
                <h3 class="text-xl font-bold text-center">
                  Get in touch with us
                </h3>
                <p class="text-center text-primary">info@togethercrew.com</p>
                <div
                  class="flex flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-14 md:py-10"
                >
                  <a
                    class="w-1/2 text-center flex flex-col justify-center md:w-auto cursor-pointer"
                    :href="config.public.telegram"
                    target="_blank"
                  >
                    <img
                      src="@/static/telegram.svg"
                      class="object-contain mx-auto"
                      alt="telegram-icon"
                    />
                    <p class="font-bold">Telegram</p>
                    <span class="text-sm"> Community Health </span>
                  </a>
                  <a
                    class="w-1/2 text-center flex flex-col justify-center md:w-auto cursor-pointer"
                    :href="config.public.twitter"
                    target="_blank"
                  >
                    <img
                      src="@/static/twitter.svg"
                      class="object-contain mx-auto pb-1"
                      alt="twitter-icon"
                    />
                    <p class="font-bold">Twitter</p>
                    <span class="text-sm"> RnDAO </span>
                  </a>
                  <a
                    class="w-1/2 text-center flex flex-col justify-center md:w-auto cursor-pointer"
                    :href="config.public.discord"
                    target="_blank"
                  >
                    <img
                      src="@/static/discord.svg"
                      class="object-contain mx-auto pb-1.5"
                      alt="discord-icon"
                    />
                    <p class="font-bold">Discord</p>
                    <span class="text-sm"> RnDAO </span>
                  </a>
                  <a
                    class="w-1/2 text-center flex flex-col justify-center md:w-auto cursor-pointer"
                    :href="config.public.mirror"
                    target="_blank"
                  >
                    <img
                      src="@/static/mirror.svg"
                      class="object-contain mx-auto"
                      alt="mirror-icon"
                    />
                    <p class="font-bold">Mirror</p>
                    <span class="text-sm"> RnDAO </span>
                  </a>
                </div>
              </div>
            </div>
          </client-only>
        </div>
        <div
          class="bg-white shadow-2xl rounded-box overflow-hidden"
          data-aos="fade-up"
        >
          <div class="flex justify-center items-center px-12 py-12">
            <div class="space-y-4">
              <div class="flex flex-row justify-center space-x-4">
                <img src="@/static/tc-logo-sm-purple.svg" alt="" />
                <img src="@/static/poweredbyRnDaoDark.svg" alt="" />
              </div>
              <p class="text-center text-sm">
                TogetherCrew was conceived and is being incubated in RnDAO - an
                R&D DAO with a mission to empower humane <br />
                collaboration. Join RnDAO to contribute to TogetherCrew and
                other ventures. Learn about and research problem <br />
                parts of DAO operations. Or start your entrepreneurial journey
                by building a new venture with all the support of the <br />
                RnDAO Community.
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-primary shadow-2xl rounded-box overflow-hidden"
          data-aos="fade-up"
        >
          <div class="flex justify-center items-center px-12 pt-8">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white text-center">
                Schedule a Demo
              </h3>
              <div
                class="flex flex-col-reverse md:flex-row justify-around items-center space-x-8"
              >
                <img src="@/static/schedule.svg" alt="" />
                <div class="space-y-8">
                  <p class="text-white text-base">
                    Book a demo, or talk to Community <br />
                    Health Manager about receiving <br />
                    a detailed Community Health Report.
                  </p>
                  <tc-button
                    button-type="outlined"
                    custom-classes="h-[48px] w-[240px] border-white text-white  hover:bg-white hover:text-black transition delay-75 ease-in"
                    label="Schedule a Demo"
                    v-on="{
                      click: () => {
                        redirectToCalendar();
                      },
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - ToghetherCrew",
  titleTemplate: () => {
    return "Contact Us | ToghetherCrew";
  },
});

const config = useRuntimeConfig();

function redirectToCalendar() {
  location.replace(config.public.calendarUrl);
}

function redirect(socialMedia) {
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
