import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    message: "動的に登録されたストアです",
  }),
  actions: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    },
  },
  persist: true,
});
