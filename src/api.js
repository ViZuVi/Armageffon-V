import axios from 'axios';

const getRequestDate = () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  return formattedDate
}

const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getRequestDate()}&api_key=zxpWPgtAHYvWzbk1iQOvKksjsr2v3ejgwQFPbTvM`;
const REQUEST_TIMEOUT = 5000;


export const createAPI = () => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    return response;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
