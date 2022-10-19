import savecfg from './savecfg.js';
import handleSubData from './handleSubData.js';
import nodeFilter from './nodeFilter.js';
import mkcfg from './mkcfg.js';
import startv2ray from './startv2ray.js';
import YAML from 'yaml'
import fs from 'fs';
import v2ray from './v2ray.js';
const file = fs.readFileSync('config.yaml', 'utf8');
const config = YAML.parse(file);
async function main(){
        v2ray(config);
        console.log('v2ray module started');
    }
export default main;