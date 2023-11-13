export const environment = {
  production: true,
  auth: {
    domain: "https://dev-r071w8pk.eu.auth0.com/",
    clientId: "aZr46as8jeMqGYrP7dvk90wqIWc2upBy",
    redirectUri: window.location.origin,
    audience : "https://users-api-test2.herokuapp.com/"
  },
  dev: {
    apiUrl: 'entrenapp-api:8080'
  }
};

