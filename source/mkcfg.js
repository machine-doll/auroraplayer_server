let { port_cn, port_hk, port_tw, port_th} = require("../config.js");
let config =require("../config.js");
function mkcfg(nodes,region) {
    var port = 7890;
    var nodecfg = config.v2raycfg;
    switch(region) {
        case "cn":
            port = port_cn;
            break;
        case "hk":
            port = port_hk;
            break;
        case "tw":
            port = port_tw;
            break;
        case "th":
            port = port_th;
            break;
    }
    nodecfg.inbounds[0].port = port;
    nodecfg.outbounds[0].settings.vnext = nodes;
    if (nodes.length < 1) {
        nodecfg.outbounds[0] = {
            "protocol": "freedom",
            "tag": "direct",
        };
    }
    return nodecfg;
}
module.exports = mkcfg;