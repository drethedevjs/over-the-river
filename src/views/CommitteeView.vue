<script setup lang="ts">
import committeeMembers from "@/data/committeeMembers";
import { FwbCard } from "flowbite-vue";
import { Facebook, Mail } from "lucide-vue-next";
</script>

<template>
  <h1 class="page-title mb-10">Committee</h1>
  <div
    class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 md:px-10 px-5 mb-10"
  >
    <FwbCard
      v-for="member in committeeMembers"
      :key="member.id"
      :img-src="member.imgSrc"
      variant="image"
    >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ member.firstName }} {{ member.lastName }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ member.role }}
        </p>
        <div class="flex flex-row gap-4">
          <a :href="member.facebook" target="_blank">
            <Facebook />
          </a>
          <Mail />
        </div>
      </div>
    </FwbCard>
  </div>
</template>

<style scoped></style>
