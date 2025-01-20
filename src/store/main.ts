import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isBlue: false,
    isYellow: false,
    message: "動的に登録されたストアです",
  }),
  actions: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    },
    updateBlue(newBoolean: boolean) {
      this.isBlue = newBoolean;
    },
    updateYellow(newBoolean: boolean) {
      this.isYellow = newBoolean;
    },
  },
  persist: true,
});
