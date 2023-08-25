import axios from "axios"
import { API_URL } from "../../misc/const"

export const loadAllItems: any = async () => {
  const response: any = await axios.get(API_URL)
                                   .then(response => response.data)
                                   .catch(error => console.error(error));
  return response;
}

export const loadItemById: any = async (id: string) => {
  const response: any = await axios.get(API_URL+id)
                                .then(response => response.data)
                                .catch(error => console.error(error));
  return response;
}