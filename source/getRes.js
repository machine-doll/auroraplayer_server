import { Verify } from "crypto";
import http from "http";
import https from "https";
/* handle subscribe link, get the response
 * @param url
 * @return Promise resolve(string)
 */
function getRes(url){
	if(typeof url !== "string" || !(url.startsWith("http://") || url.startsWith("https://"))){
		throw new Error("Only can handle link format!");
	}
	return new Promise((resolve)=>{
		var strings = [];
		if(url.startsWith("http://")){
			var req = http.get(url,(res)=>{
				if(res.statusCode !== 200){
					throw new Error("Request failed please check your Internet connection!\n" + `statusCode: ${res.statusCode}`);
				}
				res.on("data",(chunk)=>{
					strings.push(chunk);
				});
			});
		}else if(url.startsWith("https://")){
			var req = https.get(url,(res)=>{
				if(res.statusCode !== 200){
					throw new Error("Request failed please check your Internet connection!\n" + `statusCode: ${res.statusCode}`);
				}
				res.setEncoding("utf8");
				res.on("data",(chunk)=>{
					if(chunk){
						strings.push(chunk);
					}
				});
			});
		}
		// once the request done, join the chunks together, and resolve it
		req.on('close',()=>{
			resolve(strings.join(""));
		});
	});
}
export default getRes;