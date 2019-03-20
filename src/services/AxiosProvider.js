
export default class AxiosProvider{
    constructor(axios,config){
        this.axios = axios;
        this.config = config;
        this.instanceDefault = axios.create({
            baseURL: 'localhost:5000',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });
        console.log(config.axios);
    }
    
    get request() {
        return this.instanceDefault;
    }
}