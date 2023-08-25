import {defineStore} from 'pinia';
import { loadAllItems, loadItemById } from '../actions';
import { ITEMS_PER_PAGE, MAX, MIN } from '../../misc/const';

interface storeState {
  items: any[],
  details: any[],
  pagination: {
    min: Number,
    max: Number,
    totalPages: Number
  }
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    items: [],
    details: [],
    pagination: {
      min: MIN,
      max: MAX,
      totalPages: 0
    }
  }),

  getters: {
    getAllItems: (state) => state.items,
    getItemById: (state) => state.details
  },

  actions: {
    async loadAllItems() {
      this.items = await loadAllItems();
      this.pagination.totalPages = this.items.length/ITEMS_PER_PAGE;
    },
    async loadItemById(id: string) {
      this.details = await loadItemById(id)
    },
    async setPage(page: number) {
      this.pagination.min = (page - 1) * ITEMS_PER_PAGE;
      this.pagination.max = page * ITEMS_PER_PAGE;
    }
  }
})