<script setup lang="ts">
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import committeeMembers from "@/data/committeeMembers";
import { FwbCard } from "flowbite-vue";
import { Mail } from "lucide-vue-next";
</script>

<template>
  <div class="otr-container">
    <h1 class="page-title mb-10">Committee</h1>
    <div
      class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 place-items-center lg:gap-4 mb-10"
    >
      <FwbCard
        v-for="member in committeeMembers"
        :key="member.id"
        :img-src="member.imgSrc"
        variant="image"
      >
        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white otr-gradient-2 cursor-default"
          >
            {{ member.firstName }} {{ member.lastName }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ member.role }}
          </p>
          <div class="flex flex-row gap-4">
            <a :href="member.facebook" target="_blank" v-if="member.facebook">
              <FacebookIcon />
            </a>
            <a :href="'tel:' + member.phone" v-if="member.phone">
              <PhoneIcon />
            </a>
            <a :href="'mailto:' + member.email" v-if="member.email">
              <Mail v-if="member.email" class="hover:text-primary" />
            </a>
          </div>
        </div>
      </FwbCard>
    </div>
  </div>
</template>

<style scoped></style>
