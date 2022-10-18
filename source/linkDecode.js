import decode from './decode.js';
function linkDecode(s){
	//judge if supported link
	if(s.startsWith("vmess://")){
		return decode(s.substring(8));
	}else if(s.startsWith("ssr://")){
		return decode(s.substring(6));
	}else if(s.startsWith("ss://")){
		return decode(s.substring(5));
	}else{
		console.warn("a illegal link: "+ `${s}`);
	}
}
export default linkDecode;