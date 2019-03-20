import config from '../config';
import axios from 'axios';

import ItemServices from '../services/itemServices';
import AxiosProvider from '../services/AxiosProvider';

const axiosProvider = new AxiosProvider(axios , config);
const itemServices = new ItemServices(axiosProvider.request);


export {
    itemServices
}