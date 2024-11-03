<template>
  <div class="login">
    <h1>Welcome to the Strava App</h1>
    <button @click="loginWithStrava">Login with Strava</button>
  </div>
</template>

<script>
import config from '../config';

export default {
  name: 'LogIn',
  setup() {
    const loginWithStrava = () => {
      const clientId = config.STRAVA_CLIENT_ID;
      const redirectUri = config.REDIRECT_URI;
      const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=activity:read,activity:write`;
      window.location.href = authUrl;
    };

    return { loginWithStrava };
  },
};
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
