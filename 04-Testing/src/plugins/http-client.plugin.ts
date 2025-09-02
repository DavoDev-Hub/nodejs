import axios from "axios";

//  Patron adaptador
export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },
  // post: async(url, body) => {},
  // put: async(url, body) => { },
  // delete: async(url) => { },
};
