const header = new Headers({'Access-Control-Allow-Origin': '*'});

const settings = {
  clientId: '2f09w_vLI7wKHQ',
  secret: '0laZxonLM6ijQO3WCjY1ibplB6w',
  url: 'http://127.0.0.1:3000',
  headers: { method: 'GET',
               headers: header,
               mode: 'cors-with-forced-preflight',
               credentials: 'include'
             },
  state: null,

};

module.exports = settings;