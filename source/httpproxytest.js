import { ProxyAgent, request } from 'urllib';

const proxyAgent = new ProxyAgent('http://127.0.0.1:7891');
const response = await request('https://ip.sb', {
  dispatcher: proxyAgent,
});
console.log(response.status, response.headers);