import axios from 'axios';
import {defineStore} from 'pinia';
import { API_URL } from '../../misc/const';

export const useStore = defineStore('store', {
  state: () => ({
    items: [],
    details: []
  }),

  actions: {
    async getAllItems() {
      this.items = await axios.get(API_URL)
                   .then(response => response.data)
                   .catch(error => console.error(error))
    },
    async getItemsById(id: string) {
      this.details = await axios.get(API_URL+id)
                   .then(response => response.data)
                   .catch(error => console.error(error))
    }
  }
})