let sub =  require('../config.js');
let savecfg = require('./savecfg.js');
let handleSubData = require('./handleSubData.js');
let nodeFilter = require('./nodeFilter.js');
let mkcfg = require('./mkcfg.js');
let startv2ray = require('./startv2ray.js');
async function main(){
    var nodes = await handleSubData(sub);
    var regions = ["hk","tw","th","cn"];
    for (var i = 0; i < regions.length; i++) {
        var node = [];
        node = nodeFilter(nodes,regions[i]);
        var cfg = mkcfg(node,regions[i]);
        savecfg(cfg,regions[i]);
        startv2ray('cfg_'+regions[i]+'.json');
    }
}
module.exports = main;