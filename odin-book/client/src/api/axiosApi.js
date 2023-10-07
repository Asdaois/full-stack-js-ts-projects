import axios from 'axios'

// TODO: This is to change later on
const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001/'
const axiosApi = axios.create({ baseURL: URL })
axiosApi.defaults.headers.post['Content-Type'] = 'application/json'

export default axiosApi
