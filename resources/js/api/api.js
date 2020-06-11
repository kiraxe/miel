import axios, {AxiosResponse} from "axios";
import {getFormData} from "./getFormData";


const getAxiosSettings = () => {

    let token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://localhost:8080/api/',
        headers: {
            //"X-Requested-With": 'XMLHttpRequest',
            "Authorization" : 'Bearer ' +  token,
        }
    });
};

export const adminAPI = {
    getProducts(page) {
        return getAxiosSettings().get(`products/?page=${page}`)
            .then(response => response.data)
            .catch(error => error.response);
    },
    deleteProduct(id) {
        return getAxiosSettings().delete(`products/${id}`)
            .then(response => response.data);
    },
    addProduct(product) {
        let formData = getFormData(product);
        return getAxiosSettings().post('products', formData, {headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response);
    },
    editProduct(product) {
        let formData = getFormData(product, "PUT");
        return getAxiosSettings().post(`products/${product.product_id}`, formData, {headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response)
    },
    getClientele(page) {
        return getAxiosSettings().get(`clientele/?page=${page}`)
            .then(response => response.data)
            .catch(error => error.response);
    },
    deleteClient(id) {
        return getAxiosSettings().delete(`clientele/${id}`)
            .then(response => response.data);
    },
    addClient(client) {
        return getAxiosSettings().post('clientele', client)
            .then(response => response.data)
            .catch(error => error.response);
    },
    editClient(client) {
        return getAxiosSettings().put(`clientele/${client.id}`, client)
            .then(response => response.data)
            .catch(error => error.response)
    },
    getCategories(page) {
        return getAxiosSettings().get(`category/?page=${page}`)
            .then(response => response.data)
            .catch(error => error.response);
    },
    deleteCategory(id) {
        return getAxiosSettings().delete(`category/${id}`)
            .then(response => response.data);
    },
    addCategory(category) {
        let formData = getFormData(category);
        return getAxiosSettings().post('category', formData, {headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response);
    },
    editCategory(category) {
        let formData = getFormData(category, "PUT");
        return getAxiosSettings().post(`category/${category.category_id}`, formData, {headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response)
    },

};

export const authAPI = {
  me() {
      return getAxiosSettings().get('me')
          .then(response => response)
          .catch(error => error.response);
  },
  login(email, password) {
      return getAxiosSettings().post('login', {email, password})
          .then(response => response)
          .catch(error => error.response);
  },
  logout() {
      return getAxiosSettings().delete('logout')
          .then(response => {
              localStorage.removeItem('token');
              return response;
          })
  }
};
