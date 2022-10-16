let getRes = require('./getRes.js');
let sub = require('../config.js');
let decode = require('./decode.js');
let linkDecode = require('./linkDecode.js');
let parse = require('./parse.js');
let vmessFormat = require('./vmessFormat.js');
async function handleSubData(subUrl){
    var nodes = new Array();
	var data = "";
	console.log(subUrl);
	data = await getRes(subUrl.sub);
	var linkList = decode(data).split(/\s+/);
	var configs = [];
	var configStrings = [];
	var names = [];
	for(link of linkList){
		//if link is not empty string
		if(link){
			let	temp = linkDecode(link);
			let tempObj = parse(temp);
			let tempvmessObj = vmessFormat(tempObj);
			nodes.push(tempvmessObj);
		}
	}
    return nodes;
}
module.exports = handleSubData;