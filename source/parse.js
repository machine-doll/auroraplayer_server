function parse(s){
	if(typeof s !== "string"){
		console.warn(`parsing a not-string obj: ${s} aborted!`)
	}else{
		var ob = JSON.parse(s);
		return ob;
	}
}

export default parse;