import { API_URL, GET_TYPE, POST_TYPE } from 'Constants/app';
import { isEmptyObject } from './validations';

class Api {
  apiGet = async (URL, callback, errorCallback, token = '', headerAccept, headerContentType) => {
    const service = API_URL + URL;
    this.apiHttpRequest(GET_TYPE, service, {}, callback, errorCallback, token, headerAccept, headerContentType);
  }

  apiPost = async (URL, body, callback, errorCallback, token = '', headerAccept, headerContentType) => {
    const service = API_URL + URL;
    this.apiHttpRequest(POST_TYPE, service, body, callback, errorCallback, token, headerAccept, headerContentType);
  }

  apiHttpRequest = async (methodType, service, body, callback, errorCallback, token, headerAccept, headerContentType) => {
    try {
      //DEBUG-->console.log('Env: ', process.env.NODE_ENV);
      //DEBUG-->console.log('body:', body)

      const requestConfig =
      {
        method: (methodType || 'GET'),
        headers: {
          Accept: (headerAccept || 'application/json'),
          'Content-Type': (headerContentType || 'application/json'),
        },
      };

      //const currentToken=token || window.sessionStorage.getItem('token') || '';
      const { TOKEN } = process.env;
      const currentToken = token || TOKEN || '';
      //DEBUG-->console.log('Token:', TOKEN);

      currentToken ? requestConfig.headers.Authorization = `Bearer ${currentToken}` : null;
      (body && !isEmptyObject(body)) ? requestConfig.body = JSON.stringify({ ...body }) : null;

      //DEBUG-->console.log('Request configuration:', requestConfig);

      const response = await fetch(service, requestConfig);

      if (response.status !== 200) {
        //DEBUG-->
        console.log(`Error code: ${response.status} | Message: ${response.mensaje}`);
        throw Error(response.mensaje);
      } else {
        const json = await response.json();
        //DEBUG-->
        console.log('JSON:', json);
        callback && await callback(json);
      }
    } catch (error) {
      console.log('Catch:', error);
      errorCallback && await errorCallback(error);
    }
  }
}

export default new Api();
