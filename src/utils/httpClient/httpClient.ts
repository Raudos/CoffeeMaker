require('es6-promise').polyfill();
require('isomorphic-fetch');

export default (url: RequestInfo, options?: RequestInit): Promise<any> =>
  fetch(url, options)
    .then((response) => response.json());

