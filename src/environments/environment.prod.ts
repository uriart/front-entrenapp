export const environment = {
  production: true,
  auth: {
    clientID: '1oVAezqLX77ftKY3aKHX3Cr86ag2guga',
    domain: 'dev-r071w8pk.eu.auth0.com', // e.g., you.auth0.com
    audience: 'https://dev-r071w8pk.eu.auth0.com/api/v2/',
    auth0RedirectUri: 'https://uriart.github.io/programa-powerlifting/home', // URL to return to after auth0 login
    auth0ReturnTo: 'https://uriart.github.io/programa-powerlifting/home', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
};
