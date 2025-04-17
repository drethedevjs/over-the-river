<script setup lang="ts">
import { FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>
<template>
  <fwb-navbar>
    <template #logo>
      <a href="/" class="font-bold text-2xl"> Over the River </a>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/"> Home </fwb-navbar-link>
        <fwb-navbar-link link="/about"> About </fwb-navbar-link>
        <!-- <fwb-navbar-link link="#" disabled> Coordinators </fwb-navbar-link> -->
        <fwb-navbar-link link="/details"> Event Details </fwb-navbar-link>
        <fwb-navbar-link link="/lodging"> Lodging </fwb-navbar-link>
        <!-- <fwb-navbar-link link="#"> Contact </fwb-navbar-link> -->
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <fwb-button href="/pay" gradient="green-blue"> Secure Your Spot </fwb-button>
    </template>
  </fwb-navbar>
</template>

<style scoped></style>
