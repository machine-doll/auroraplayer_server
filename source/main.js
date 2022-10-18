import savecfg from './savecfg.js';
import handleSubData from './handleSubData.js';
import nodeFilter from './nodeFilter.bak';
import mkcfg from './mkcfg.js';
import startv2ray from './startv2ray.js';
import YAML from 'yaml'
import fs from 'fs';
const file = fs.readFileSync('config.yaml', 'utf8');
const config = YAML.parse(file);
async function main(){
    var nodes = await handleSubData(config.sub);
/*     for (var i = 0; i < config.regions.length; i++) {
        var node = [];
        node = nodeFilter(nodes,regions[i]);
        var cfg = mkcfg(node,regions[i]);
        savecfg(cfg,regions[i]);
        startv2ray('cfg_'+regions[i]+'.json');
    } */
    config.regions.forEach(regionName => {
        var node = [];
        var region = config.region.find(item => item.name == regionName);
        node = nodeFilter(nodes,region.keyword,region.keyword_exclude);
        var cfg = mkcfg(node,region.port);
        savecfg(cfg,region);
        startv2ray('cfg_'+region.name+'.json');
    });
}
export default main;