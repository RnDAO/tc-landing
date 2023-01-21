<template>
  <div>
    <div class="container py-14 md:py-8">
      <h1
        class="text-4xl font-bold text-center mt-12 md:mt-0 mb-8"
        data-aos="fade-left"
      >
        Contact us
      </h1>
      <div class="space-y-4">
        <div
          class="bg-white shadow-2xl rounded-box overflow-hidden"
          data-aos="fade-down"
        >
          <div class="flex justify-center items-center px-12 py-8">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-center">
                Get in touch with us
              </h3>
              <p class="text-center text-primary">rndao.email@gmail.com</p>
              <div
                class="flex flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-12 md:py-10"
              >
                <div
                  class="w-1/2 text-center flex flex-col justify-center md:w-auto"
                >
                  <img
                    src="@/static/telegram.svg"
                    class="object-contain mx-auto"
                    height="30px"
                    width="30px"
                    alt="telegram-icon"
                  />
                  <p class="font-bold">Telegram</p>
                  <span class="text-sm"> Community Health </span>
                </div>
                <div
                  class="w-1/2 text-center flex flex-col justify-center md:w-auto"
                >
                  <img
                    src="@/static/twitter.svg"
                    class="object-contain mx-auto pb-1"
                    height="30px"
                    width="30px"
                    alt="twitter-icon"
                  />
                  <p class="font-bold">Twitter</p>
                  <span class="text-sm"> RnDAO </span>
                </div>
                <div
                  class="w-1/2 text-center flex flex-col justify-center md:w-auto"
                >
                  <img
                    src="@/static/discord.svg"
                    class="object-contain mx-auto pb-2"
                    height="30px"
                    width="30px"
                    alt="discord-icon"
                  />
                  <p class="font-bold">Discord</p>
                  <span class="text-sm"> RnDAO </span>
                </div>
                <div
                  class="w-1/2 text-center flex flex-col justify-center md:w-auto"
                >
                  <img
                    src="@/static/mirror.svg"
                    class="object-contain mx-auto"
                    height="30px"
                    width="30px"
                    alt="mirror-icon"
                  />
                  <p class="font-bold">Mirror</p>
                  <span class="text-sm"> RnDAO </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white shadow-2xl rounded-box overflow-hidden"
          data-aos="fade-down"
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
                    custom-classes="h-[48px] w-[240px] border-white text-white"
                    label="Schedule a Demo"
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

<script>
export default {};
</script>

<style></style>
