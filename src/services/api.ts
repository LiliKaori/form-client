import axios from 'axios';

export const apiFrontTest = axios.create({
  baseURL: 'https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test'

})

export const apiPost = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts/'  

})

