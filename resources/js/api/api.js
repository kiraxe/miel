import axios, {AxiosResponse} from "axios";


const getAxiosSettings = () => {

    let token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
            "X-Requested-With": 'XMLHttpRequest',
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
        return getAxiosSettings().post('products', product)
            .then(response => response.data)
            .catch(error => error.response);
    },
    editProduct(product) {
        return getAxiosSettings().put(`products/${product.id}`, product)
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
    }
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
