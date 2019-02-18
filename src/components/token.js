import Cookie from 'js-cookie';
export const getToken = () => Cookie.get('token');
export const setToken = (token, expires) =>
  Cookie.set('token', token, { expires });
export const tokenToStore = vueInstance =>
  vueInstance.$store.dispatch('setToken');
