import {defineStore} from 'pinia';
import { loadAllItemsService, loadItemByIdService } from '../services';
import { ITEMS_PER_PAGE, MAX, MIN } from '../../misc/const';

interface storeState {
  items: any,
  filteredItems: any,
  details: any,
  pagination: {
    min: Number,
    max: Number,
    totalPages: Number
  }
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    items: [],
    filteredItems: [],
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
      this.items = await loadAllItemsService();
      this.filteredItems = this.items;
      this.pagination.totalPages = Math.ceil(this.filteredItems.length / ITEMS_PER_PAGE);
    },
    async loadItemById(id: string) {
      this.details = await loadItemByIdService(id)
    },
    setPage(page: number) {
      this.pagination.min = (page - 1) * ITEMS_PER_PAGE;
      this.pagination.max = page * ITEMS_PER_PAGE;
    },
    clearDetails() {
      this.details = [];
    },
    filterItemsByTitle(search: string) {
      if(!search?.length) {
        this.filteredItems = this.items;
        this.pagination.totalPages = Math.ceil(this.filteredItems.length / ITEMS_PER_PAGE);
        this.pagination.min = MIN;
        this.pagination.max = MAX;
      } else {
        this.filteredItems = this.items.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()));
        this.pagination.totalPages = Math.ceil(this.filteredItems.length / ITEMS_PER_PAGE);
        this.pagination.min = MIN;
        this.pagination.max = MAX;
      }
    }
  }
})