function objParseToYaml(ob){
	if(typeof(ob)!=="object"){
		throw Error("Only can parse object");
	}
	var s = JSON.stringify(ob);
	return s;
}
export default objParseToYaml;