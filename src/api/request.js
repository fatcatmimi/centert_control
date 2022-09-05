import axios from "axios";
import qs from 'qs'

axios.defaults.baseURL = 'http://webnervedata.compass.cn/api/v1/ccs/';
axios.defaults.timeout = 3000

export default async function (url, method, data) {
    const config = { url, method, withCredentials: false }
    if (method.toLowerCase() == 'get') {
        config.params = data
    } else {
        config.data = qs.stringify(data)
    }
    const result = await axios(config)
    if (result.status == 200) {
        return Promise.resolve(result.data)
    } else {
        return Promise.reject('请求错误')
    }
}

