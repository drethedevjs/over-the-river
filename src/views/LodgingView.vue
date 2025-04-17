<script setup lang="ts">
import { FwbAlert } from "flowbite-vue";
</script>
<template>
  <div class="otr-container">
    <h1>Hotel Info</h1>
    <p class="sub-title">Stay close, stay connected!</p>

    <p class="text-center">
      Whether you're coming from out of town or just want to be nearby for all the fun, we've
      gathered some convenient lodging options for you. From group rates at local hotels to nearby
      rentals and campgrounds, there's something for everyone's comfort and budget. Let's make it a
      full weekend of family, fun, and togetherness!
    </p>

    <div class="flex flex-col md:flex-row w-full mb-5">
      <div class="w-1/2">
        <img class="rounded-md drop-shadow-2xl" src="/images/holiday-inn-express-2.jpg" />
      </div>
      <div class="w-1/2 place-content-center text-center p-5">
        <p>
          <span class="font-bold xl:text-3xl text-2xl">Holiday Inn Express Cincinnati West</span>
          <br />
          5505 Rybolt Road
          <br />
          Cincinnati, OH 45248
        </p>
        <p>
          Mention <span class="handle">"Martin-Porterfield Family Reunion"</span> when booking.
          Enjoy free parking, breakfast, outdoor pool, and fitness center. A credit card is required
          for booking but will only be charges upon arrival.
        </p>
      </div>
    </div>

    <fwb-alert icon type="warning" class="text-xl">
      Reserve by May 15, 2025 by calling<a href="tel:5135746000" class="handle"> 513-574-6000 </a>
    </fwb-alert>
  </div>
</template>

<style scoped>
.sub-title {
  @apply text-base text-center italic mt-2;
}
</style>
