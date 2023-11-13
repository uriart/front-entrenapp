export const environment = {
  production: true,
  auth: {
    domain: process.env.AUTH_ISSUER,
    clientId: process.env.CLIENT_ID,
    redirectUri: window.location.origin,
    audience : process.env.AUTH_AUDIENCE
  },
  dev: {
    apiUrl: "entrenapp-api:8080"
  }
};

