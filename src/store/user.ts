import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // id必须且唯一
  state: () => {
    return {
      name: '吴一',
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
