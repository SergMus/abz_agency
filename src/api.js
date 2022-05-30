import axios from "axios";

const instance = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
});

export const api = {
  getToken() {
    return instance.get("/token");
  },

 getAllUsers(offset, count) {
    return instance.get(`/users?offset=${offset}&count=${count}`);
  },

  createUser(formData, token) {
    return instance.post("/users", formData, {headers: {"Token": token}  });
  },

  getUser(id) {
    return instance.get(`/users/${id}`);
  },

  getSelectItems() {
    return instance.get("/positions");
  },
};
