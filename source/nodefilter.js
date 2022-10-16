let {keyword_cn, keyword_cn_exclude, keyword_hk, keyword_th, keyword_tw } = require('../config.js');
function nodeFilter(v2nodes, region) {
    var nodes = [];
    for (var i = 0; i < v2nodes.length; i++) {
        switch(region) {
            case "cn":
                if(keyword_cn.find(item => v2nodes[i].ps.includes(item))&&!keyword_cn_exclude.find(item => v2nodes[i].ps.includes(item))){
                    nodes.push(v2nodes[i]);
                }
                break;
            case "hk":
                if(keyword_hk.find(item => v2nodes[i].ps.includes(item))){
                    nodes.push(v2nodes[i]);
                }
                break;
            case "tw":
                if(keyword_tw.find(item => v2nodes[i].ps.includes(item))){
                    nodes.push(v2nodes[i]);
                }
                break;
            case "th":
                if(keyword_th.find(item => v2nodes[i].ps.includes(item))){
                    nodes.push(v2nodes[i]);
                }
                break;
        }
	}
    return nodes;
}
module.exports = nodeFilter;