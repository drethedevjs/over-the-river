<script setup lang="ts">
import { FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>
<template>
  <fwb-navbar>
    <template #logo>
      <a href="/" class="font-bold text-2xl otr-gradient">Over the River</a>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/">
          <span class="hover:!text-red-600">Home</span>
        </fwb-navbar-link>
        <fwb-navbar-link link="/about">
          <span class="hover:!text-red-600">About</span>
        </fwb-navbar-link>
        <fwb-navbar-link link="/committee">
          <span class="hover:!text-red-600">Committee</span>
        </fwb-navbar-link>
        <fwb-navbar-link link="/details">
          <span class="hover:!text-red-600">Event Details</span>
        </fwb-navbar-link>
        <fwb-navbar-link link="/lodging">
          <span class="hover:!text-red-600">Lodging</span>
        </fwb-navbar-link>
        <!-- <fwb-navbar-link link="#"> Contact </fwb-navbar-link> -->
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <fwb-button href="/pay" class="otr-bg-gradient"> Secure Your Spot </fwb-button>
    </template>
  </fwb-navbar>
</template>

<style scoped></style>
