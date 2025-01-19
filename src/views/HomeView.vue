/* eslint-disable no-console */
<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "@/store/main";
import { format } from "@formkit/tempo";
const e1 = defineModel("e1", { default: 1 });
const steps = defineModel("steps", { default: 2 });

const disabled = computed(() => {
  return e1.value === 1
    ? "prev"
    : e1.value === steps.value
    ? "next"
    : undefined;
});
const mainStore = useMainStore();
console.log(mainStore.message);
mainStore.updateMessage(
  format({
    date: new Date(),
    format: "YYYY-MM-DD HH:mm:ss",
    locale: "ja",
    tz: "Asia/Tokyo",
  })
);
console.log(mainStore.message);
</script>

<template>
  <div>
    <v-card class="mb-4">
      <v-card-text>
        <v-select
          v-model="steps"
          :items="[2, 3, 4, 5, 6]"
          label="# of steps"
        ></v-select>
      </v-card-text>
    </v-card>

    <v-stepper v-model="e1">
      <template v-slot:default="{ prev, next }">
        <v-stepper-header>
          <template v-for="n in steps" :key="`${n}-step`">
            <v-stepper-item
              :complete="e1 > n"
              :step="`Step {{ n }}`"
              :value="n"
              editable
            ></v-stepper-item>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-window>
          <v-stepper-window-item
            v-for="n in steps"
            :key="`${n}-content`"
            :value="n"
          >
            <v-card color="grey-lighten-1" height="200"></v-card>
          </v-stepper-window-item>
        </v-stepper-window>

        <v-stepper-actions
          :disabled="disabled"
          @click:next="next"
          @click:prev="prev"
        ></v-stepper-actions>
      </template>
    </v-stepper>
  </div>
</template>
