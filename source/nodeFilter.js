function nodeFilter(v2nodes, keyword, keyword_exclude) {
    var nodes = [];
    for(var i = 0; i < v2nodes.length; i++){
        if(keyword.find(item => v2nodes[i].ps.includes(item))&&!keyword_exclude.find(item => v2nodes[i].ps.includes(item))){
            nodes.push(v2nodes[i]);
        }
    }  
    return nodes;
}
export default nodeFilter;