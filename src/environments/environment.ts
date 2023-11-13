export const environment = {
  production: true,
  auth: {
    domain: window['env']['AUTH_ISSUER'],
    clientId: window['env']['CLIENT_ID'],
    redirectUri: window.location.origin,
    audience : window['env']['AUTH_AUDIENCE']
  },
  dev: {
    apiUrl: 'entrenapp-api:8080'
  }
};

