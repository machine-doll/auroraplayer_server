function decode(s){
	//delete the \n\r 
	s.replace(/\s+/g,"");
	if(s.length%4 !== 0){
		s = s + s.length%4*"=";
		console.log(s);
	}
	var buf = Buffer.from(s, 'base64');
	return buf.toString('utf8');
}

export default decode;
