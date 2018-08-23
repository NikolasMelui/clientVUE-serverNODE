import Api from '@/services/Api';

export default {
  singup (credentials) {
    return Api().post('singup', credentials);
  },
  singin (credentials) {
    return Api().post('singin', credentials);
  }
};
