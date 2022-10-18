import getRes from './getRes.js';
import decode from './decode.js';
import linkDecode from './linkDecode.js';
import parse from './parse.js';
import vmessFormat from './vmessFormat.js';
async function handleSubData(subUrl){
    var nodes = new Array();
	var data = "";
	console.log(subUrl);
	data = await getRes(subUrl);
	var linkList = decode(data).split(/\s+/);
	var configs = [];
	var configStrings = [];
	var names = [];
/* 	for(link of linkList){
		//if link is not empty string
		if(link){
			let	temp = linkDecode(link);
			let tempObj = parse(temp);
			let tempvmessObj = vmessFormat(tempObj);
			nodes.push(tempvmessObj);
		}
	} */
	linkList.forEach(link => {
		//if link is not empty string
		if(link){
			let	temp = linkDecode(link);
			let tempObj = parse(temp);
			let tempvmessObj = vmessFormat(tempObj);
			nodes.push(tempvmessObj);
		}
	});
    return nodes;
}

export default handleSubData;