<script setup lang="ts">
import DefaultBrowserWhenWhere from "@/components/DefaultBrowserWhenWhere.vue";
import SafariWhenWhere from "@/components/SafariWhenWhere.vue";
import { onMounted, ref } from "vue";
const isSafari = ref(false);

onMounted(() => {
  const ua = navigator.userAgent.toLowerCase();
  isSafari.value = /^((?!chrome|android).)*safari/.test(ua);
  console.log("isSafari", isSafari.value);
});
</script>

<template>
  <div class="w-full md:h-screen h-96 relative overflow-hidden">
    <img
      src="/images/black-family-hero-2.jpg"
      alt="a woman standing in a meeting addressing the attendees"
      class="h-full w-full object-cover"
    />
    <div class="overlay flex md:hidden"></div>
    <div id="hero-txt">
      <h1 id="hero-header" class="hero-text">Martin-Porterfield Reunion</h1>
      <p id="tagline" class="hero-text">Lets celebrate one another!</p>
    </div>
  </div>

  <div id="event-overview" class="px-3 md:px-10 mb-10">
    <h2 id="event-ov" class="otr-gradient-2">Where / When</h2>

    <SafariWhenWhere v-if="isSafari" />
    <DefaultBrowserWhenWhere v-else />
  </div>
</template>

<style scoped>
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

#event-ov {
  @apply md:text-5xl text-4xl text-center mb-10 font-bold tracking-widest uppercase drop-shadow-sm;
}
</style>
