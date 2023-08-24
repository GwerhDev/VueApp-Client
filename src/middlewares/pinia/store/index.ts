import axios from 'axios';
import {defineStore} from 'pinia';
import { API_URL } from '../../misc/const';

export const useStore = defineStore('store', {
  state: () => ({
    items: []
  }),

  actions: {
    async getAllItems() {
      this.items = await axios.get(API_URL)
                   .then(response => response.data)
                   .catch(error => console.error(error))
    }
  }
})