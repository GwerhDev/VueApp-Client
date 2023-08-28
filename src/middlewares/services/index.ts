import axios from "axios"
import { API_URL } from "../misc/const"
import { error } from "../misc/errors";

export const loadAllItemsService: any = async () => {
  const response: any = await axios.get(API_URL)
                                   .then(response => response.data)
                                   .catch(() => { return { error: error.api.loadAllItems } });
  return response;
}

export const loadItemByIdService: any = async (id: number) => {
  const response: any = await axios.get(API_URL + id)
                                   .then(response => response.data)
                                   .catch(() => { return { error: error.api.loadItemById } });
  return response;
}