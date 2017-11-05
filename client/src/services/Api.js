import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://vue-express-nikolasmelui.c9users.io:8081/'
  });
};
