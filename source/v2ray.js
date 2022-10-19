import savecfg from './savecfg.js';
import handleSubData from './handleSubData.js';
import nodeFilter from './nodeFilter.js';
import mkcfg from './mkcfg.js';
import startv2ray from './startv2ray.js';
async function v2ray(config){
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
        startv2ray('cfg_'+region.name+'.json').then(
            console.log(`v2ray started for ${region.name}`)
        );
    });
    console.log('v2ray all started');
}
export default v2ray;