<script setup lang="ts">
import { FwbImg } from "flowbite-vue";
</script>

<template>
  <div class="w-full h-screen relative overflow-hidden">
    <img
      src="/images/family-hero.jpg"
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

    <div class="flex flex-col md:place-items-stretch place-items-center md:flex-row w-full gap-4">
      <div class="block-side">
        <fwb-img
          alt="Cincinnati skyline."
          src="/images/cincinnati-skyline.jpg"
          class="object-cover h-full"
        />
        <div class="overlay flex"></div>
        <div class="overlay-text">
          <p class="sub-header">Location</p>
          <p class="info">Cincinnati, OH</p>
        </div>
      </div>
      <div class="block-side">
        <fwb-img
          alt="Four square letter pieces that spell out the word June."
          src="/images/june.jpg"
          class="hover:scale-105"
        />
        <div class="overlay flex"></div>
        <div class="overlay-text">
          <p class="sub-header">Dates</p>
          <p class="info">June 13th-14th</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-side {
  @apply text-center md:w-1/2 w-full relative overflow-hidden rounded-md;
}

.overlay {
  @apply absolute inset-0 bg-black opacity-25;
}

#hero-header {
  @apply md:text-9xl;
}

#hero-txt {
  @apply absolute inset-0 object-none place-content-center text-center;
}

.overlay-text {
  @apply absolute inset-0 object-none place-content-center text-center text-white drop-shadow-2xl;
}

#tagline {
  @apply md:text-5xl text-3xl md:mt-0 mt-5;
}

.hero-text {
  @apply text-white drop-shadow-2xl;
}

#event-ov {
  @apply md:text-5xl text-4xl text-center mb-10 font-bold tracking-widest uppercase drop-shadow-sm;
}

.sub-header {
  @apply text-3xl mb-3 tracking-widest;
}

.info {
  @apply text-6xl tracking-widest;
}
</style>
