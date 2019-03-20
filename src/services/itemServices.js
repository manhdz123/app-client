import axios from 'axios';

class ItemServices {
    constructor(axios) {
        this.axios = axios;
    }
    
    getItems(){
        return axios.get('/api/items').then(res => res.data);
    }

    addItem(item){
        return axios.post('/api/items', {item}).then(res => res.data);
    }
    
    deleteItem(id){
        return axios.delete(`/api/items/${id}`,id).then(res => res.data);
    }
}

export default ItemServices;