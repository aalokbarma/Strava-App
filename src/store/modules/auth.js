import axios from '@/services/axios';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem('access_token') || '',
  },
  mutations: {
    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token;
      localStorage.setItem('access_token', token);
    },
    LOGOUT(state) {
      state.accessToken = '';
      localStorage.removeItem('access_token');
      router.push('/');
    },
  },
  actions: {
    async login({ commit }, code) {
      try {
        const response = await axios.post('/oauth/token', {
          client_id: process.env.VUE_APP_STRAVA_CLIENT_ID,
          client_secret: process.env.VUE_APP_STRAVA_CLIENT_SECRET,
          code,
          grant_type: 'authorization_code',
        });
        const token = response.data.access_token;
        commit('SET_ACCESS_TOKEN', token);
        router.push('/activities');
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
};
