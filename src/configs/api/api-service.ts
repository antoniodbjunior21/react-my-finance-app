export const apiHost = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/v1' : 'https://myapp.herokuapp.com/api';

export default  {
  meEndpoint: apiHost + '/auth/me',
  loginEndpoint: apiHost + '/auth/login',
  registerEndpoint: apiHost + '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}

