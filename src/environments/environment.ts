export const environment = {
  production: true,
  auth: {
    domain: 'https://dev-r071w8pk.eu.auth0.com',
    clientId: 'aZr46as8jeMqGYrP7dvk90wqIWc2upBy',
    redirectUri: window.location.origin + '/entrenapp/',
    audience: 'https://users-api-test2.herokuapp.com/'
  },
  dev: {
    apiUrl: 'http://localhost:8080'
  }
};

