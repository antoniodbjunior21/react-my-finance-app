export const apiHost = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/v1' : 'http://localhost:8080/api/v1';

export default  {
  meEndpoint: apiHost + '/auth/me',
  loginEndpoint: apiHost + '/auth/login',
  registerEndpoint: apiHost + '/auth/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}

