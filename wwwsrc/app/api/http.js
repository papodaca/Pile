import 'whatwg-fetch';

class Http {
  makeRequest(method, path, options = {}, parse = true) {
    return new Promise((resolve, reject) => {
      let fullOptions = {
        ...options,
        method,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        credentials: 'same-origin'
      };
      if(options.body && (method === 'POST' || method === 'PUT')) {
        fullOptions.body = JSON.stringify(options.body)
      }
      fetch(path, fullOptions).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          var error = new Error(res.statusText);
          error.res = res;
          throw error;
        }
      })
      .then((res) => {
        if(parse && res.headers.get('Content-Type') === 'application/json') {
          return res.json();
        } else {
          return res;
        }
      })
      .then(resolve)
      .catch(reject);
    });
  }
  get(path, options = {}, parse = true) {
    return this.makeRequest('GET', path, options, parse);
  }
  post(path, options = {}, parse = true) {
    return this.makeRequest('POST', path, options, parse);
  }
  put(path, options = {}, parse = true) {
    return this.makeRequest('PUT', path, options, parse);
  }
  delete(path, options = {}, parse = true) {
    return this.makeRequest('DELETE', path, options, parse);
  }
}

export default Http;
