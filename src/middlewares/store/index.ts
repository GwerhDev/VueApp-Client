import {defineStore} from 'pinia';
import { loadAllItemsService, loadItemByIdService } from '../services';
import { ALL, ITEMS_PER_PAGE, MAX, MIN, SEARCH_NOT_FOUND } from '../misc/const';

interface storeState {
  items: any,
  filteredItems: any,
  filterInfo: string,
  details: any,
  pagination: {
    min: Number,
    max: Number,
    totalPages: Number,
    currentPage: Number
  }
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    items: [],
    filteredItems: [],
    filterInfo: '',
    details: [],
    pagination: {
      min: MIN,
      max: MAX,
      totalPages: 0,
      currentPage: 1
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
      this.pagination.min = MIN;
      this.pagination.max = MAX;
      this.pagination.currentPage = 1;
      this.filterInfo = ALL;
    },
    async loadItemById(id: string) {
      this.details = await loadItemByIdService(id)
    },
    setPage(page: number) {
      this.pagination.min = (page - 1) * ITEMS_PER_PAGE;
      this.pagination.max = page * ITEMS_PER_PAGE;
      this.pagination.currentPage = page;
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
        this.pagination.currentPage = 1;
        this.filterInfo = ALL;
      } else {
        this.filteredItems = this.items.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()));
        this.pagination.totalPages = Math.ceil(this.filteredItems.length / ITEMS_PER_PAGE);
        this.pagination.min = MIN;
        this.pagination.max = MAX;
        this.pagination.currentPage = 1;
        if(this.filteredItems.length === 0) {
          this.filterInfo = SEARCH_NOT_FOUND + ' "' + search + '"';
        } else {
          this.filterInfo = 'Ítems que contienen "' + search + '" en su título';
        }
      }
    }
  }
})