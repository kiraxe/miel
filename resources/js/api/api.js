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

    getSettings() {
        return getAxiosSettings().get('settings')
            .then(response => response.data)
            .catch(error => error.response);
    },
    editSettings(settings) {
        let formData = getFormData(settings, "PUT");
        return getAxiosSettings().post(`settings/${settings.id}`, formData,{headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response)
    },

    getOptions(page) {
        return getAxiosSettings().get(`options/?page=${page}`)
            .then(response => response.data)
            .catch(error => error.response);
    },
    deleteOption(id) {
        return getAxiosSettings().delete(`options/${id}`)
            .then(response => response.data)
            .catch(error => error.response)
    },
    addOption(option) {
        let formData = getFormData(option);
        return getAxiosSettings().post('options', formData, {headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response);
    },
    editOption(option) {
        let formData = getFormData(option, "PUT");
        return getAxiosSettings().post(`options/${option.option_id}`, formData, {headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response)
    },
    getOrders(page) {
        return getAxiosSettings().get(`orders_admin/?page=${page}`)
            .then(response => response.data)
            .catch(error => error.response);
    },
    editOrder(order) {
        let formData = getFormData(order, "PUT");
        return getAxiosSettings().post(`orders_admin/${order.order_id}`, formData, {headers:{'Content-Type' : 'multipart/form-data'}})
            .then(response => response.data)
            .catch(error => error.response)
    },
    deleteOrder(order_id) {
        return getAxiosSettings().delete(`orders_admin/${order_id}`)
            .then(response => response.data);
    },
    getMessages(page) {
        return getAxiosSettings().get(`message/?page=${page}`)
            .then(response => response.data)
            .catch(error => error.response);
    },
    deleteMessage(message_id) {
        return getAxiosSettings().delete(`message/${message_id}`)
            .then(response => response.data);
    },

};

export const authAPI = {
  me() {
      return getAxiosSettings().get("me/")
          .then(response => response)
          .catch(error => error.response);
  },
  login(email, password, type) {
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

export const authClientAPI = {
    registration(client) {
        return getAxiosSettings().post('registration_client', client)
            .then(response => response.data)
            .catch(error => error.response);
    },
    me() {
        return getAxiosSettings().get("me_client/")
            .then(response => response)
            .catch(error => error.response);
    },
    login(email, password) {
        return getAxiosSettings().post('login_client', {email, password})
            .then(response => response)
            .catch(error => error.response);
    },
    logout() {
        return getAxiosSettings().delete('logout_client')
            .then(response => {
                localStorage.removeItem('token');
                return response;
            })
    }
}


export const publicAPI = {
    getPublic() {
        return getAxiosSettings().get('public')
            .then(response => response)
            .catch(error => error.response);
    },
    getIndexPage() {
        return getAxiosSettings().get('index')
            .then(response => response)
            .catch(error => error.response);
    },
    getAccountPage(client_id) {
        return getAxiosSettings().get(`account/${client_id}`)
            .then(response => response)
            .catch(error => error.response);
    },
    getAccountOrders(client_id) {
        return getAxiosSettings().get(`orders_account/${client_id}`)
            .then(response => response)
            .catch(error => error.response);
    },
    editAccountPage(client) {
        return getAxiosSettings().put(`account/${client.id}`, client)
            .then(response => response.data)
            .catch(error => error.response)
    },
    getCatalog(page, offset, limit) {
        return getAxiosSettings().get(`catalog/?page=${page}&offset=${offset}&limit=${limit}`)
            .then(response => response.data)
            .catch(error => error.response)
    },
    getProductPage(product_id) {
        return getAxiosSettings().get(`catalog/${product_id}`)
            .then(response => response)
            .catch(error => error.response);
    },
    addOrder(order) {
        return getAxiosSettings().post('order', order)
            .then(response => response.data)
            .catch(error => error.response);
    },
    addMessage(message) {
        return getAxiosSettings().post('message', message)
            .then(response => response.data)
            .catch(error => error.response);
    },
}
