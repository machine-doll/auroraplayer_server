function vmessFormat(ob){
	if(typeof(ob)!=="object"){
		console.warn("vmess Format:can only format object");
	}else{
		//a table for refer
		var table = {
			"ps":"ps",
			"remark":"remark",
			"add":"address",
			"port":"port",
			"id":"id",
			"aid":"alterId",
			"security":"cipher",
			"tls":"tls"
		};
		var defaultV = {
			"ps":"local",
			"address":"127.0.0.1",
			"port":1080,
			"users":[
				{
					"id":"",
					"alterId":0
				}
			]
		};
		for(var key in ob){
				if(key=="id"){
					defaultV.users[0].id=ob[key];
			}else if(key=="alterID")
				{
				defaultV.users[0].alterId=ob[key];
			}
			else if(table[key]){
				defaultV[table[key]] = ob[key];
			}
        }
		return defaultV;
	}
}
export default vmessFormat;