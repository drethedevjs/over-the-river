<script setup lang="ts">
import DefaultBrowserWhenWhere from "@/components/DefaultBrowserWhenWhere.vue";
import SafariWhenWhere from "@/components/SafariWhenWhere.vue";
import { FwbButton } from "flowbite-vue";
import { onMounted, ref } from "vue";
const isSafari = ref(false);

onMounted(() => {
  const ua = navigator.userAgent.toLowerCase();
  isSafari.value = /^((?!chrome|android).)*safari/.test(ua);
  console.log("isSafari", isSafari.value);
});
</script>

<template>
  <section class="w-full md:h-screen h-96 relative overflow-hidden">
    <img
      src="/images/black-family-hero-2.jpg"
      alt="a woman standing in a meeting addressing the attendees"
      class="h-full w-full object-cover"
    />
    <div class="overlay flex md:hidden"></div>
    <div id="hero-txt">
      <h1 id="hero-header" class="hero-text">Martin-Porterfield Reunion</h1>
      <p id="tagline" class="hero-text">Lets celebrate one another!</p>
      <fwb-button href="/pay" class="otr-bg-gradient md:hidden"> Secure Your Spot </fwb-button>
    </div>
  </section>

  <section id="event-overview" class="px-3 md:px-10 mb-10">
    <h2 id="event-ov" class="otr-gradient-2 section-header">Where / When</h2>

    <SafariWhenWhere v-if="isSafari" />
    <DefaultBrowserWhenWhere v-else />
  </section>

  <section id="reunion-logo" class="px-3 md:px-10 mb-10">
    <h2 id="reunion-logo-header" class="otr-gradient-2 section-header">Reunion Logo</h2>

    <p class="text-center xl:w-3/6 lg:w-4/6 md:text-2xl text-xl md:4/6 w-5/6 mx-auto">
      The reunion logo was designed by <span class="font-bold otr-gradient-2">Sierra Evans</span>, a
      talented graphic designer from our family. The design beautifully captures the spirit of our
      reunion, incorporating elements that represent our family's heritage and unity. The thoughtful
      color palette and modern design elements create a memorable symbol that will represent this
      year's gathering.
    </p>

    <div class="flex flex-col md:flex-row gap-4 mt-16 2xl:px-96 xl:px-52 px-10">
      <div class="flex flex-col w-full md:w-1/2 justify-center">
        <img
          src="/images/reunion-logo/s-evans-SQUARE.jpg"
          alt="Head shot ofSierra Evans"
          class="rounded-xl"
        />
        <p class="text-center otr-gradient-2 font-bold">Sierra Evans</p>
      </div>
      <div class="flex flex-col w-full md:w-1/2 gap-3">
        <img
          src="/images/reunion-logo/martin-porterfield-family-reunion-logo-2.jpg"
          alt="Reunion Logo"
          class="reunion-logo-img"
        />
        <img
          src="/images/reunion-logo/martin-porterfield-family-reunion-logo-1.jpg"
          alt="Reunion Logo"
          class="reunion-logo-img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.px-200 {
  padding-left: 30rem;
  padding-right: 30rem;
}
#hero-header {
  @apply lg:text-9xl text-6xl;
}

#tagline {
  @apply md:text-5xl text-2xl md:mt-0 mt-5;
}

#hero-txt {
  @apply absolute inset-0 object-none place-content-center text-center;
}

.hero-text {
  @apply text-white drop-shadow-2xl;
}

.section-header {
  @apply md:text-5xl text-4xl text-center mb-10 font-bold tracking-widest uppercase drop-shadow-sm;
}

.reunion-logo-img {
  @apply rounded-xl;
}
</style>
