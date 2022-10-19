class outboundsObject {
    constructor() {
        this.protocol = "vmess";
        this.settings = {
            vnext: [
                {
                    address: "v2ray.com",
                    port: 443,
                    users: [
                        {
                            id: "de305d54-75b4-431b-adb2-eb6b9e546014",
                            alterId: 64,
                            security: "auto",
							level: 0
                    	}
                    ],
                }
            ],
        };
        this.tag = "1234-aabbccdd";
        this.streamSettings = {
            network: "ws",
            security: "none",
			tlsSettings: {
				allowInsecure: false,
				serverName: "v2ray.com"
			},
            wsSettings: {
				acceptProxyProtocol: false,
				proxyProtocolVersion: 2,
				allowInsecure: false,
                path: "/",
                headers: {
					Host: "v2ray.com"
                },
            },
        };
    }
}
function vmessFormat(ob){
	if(typeof(ob)!=="object"){
		console.warn("vmess Format:can only format object");
	}else{
		//a table for refer
/* 		var table = {
			"host": "host",
			"path": "path",
			"verify_cert": "skipCertVerify",
			"tls": "security",
			"ps":"ps",
			"net": "network",
			"headerType": "headers",
			"type": "protocol",
			"remark":"remark",
			"add":"address",
			"port":"port",
			"id":"id",
			"aid":"alterId",
			"security":"cipher",
		}; */
		var defaultV = new outboundsObject();
/* 		for(var key in ob){
				if(key=="id"){
					defaultV.users[0].id=ob[key];
			}else if(key=="alterID")
				{
				defaultV.users[0].alterId=ob[key];
			}
			else if(table[key]){
				defaultV[table[key]] = ob[key];
			}
        } */
		for(var key in ob){
			if(key=="id"){
				defaultV.settings.vnext[0].users[0].id=ob[key];
			}else if(key=="aid"){
				defaultV.settings.vnext[0].users[0].alterId=ob[key];
			}else if(key=="tls"){
				defaultV.streamSettings.security=ob[key];
			}else if(key=="net"){
				defaultV.streamSettings.network=ob[key];
			}else if(key=="add"){
				defaultV.settings.vnext[0].address=ob[key];
			}else if(key=="path"){
				defaultV.streamSettings.wsSettings.path=ob[key].toString();
			}else if(key=="ps"){
				defaultV.tag=ob[key];
			}else if(key=="host"){
				defaultV.streamSettings.wsSettings.headers.Host=ob[key];
			}else if(key=="port"){
				defaultV.settings.vnext[0].port=ob[key];
			}else if(key=="type"){
				defaultV.protocol=ob[key];
				if(ob[key]=="none"){
					defaultV.protocol="vmess";
				}
			}else if(key=="remark"){
				defaultV.tag=ob[key];
			}else if(key=="v"){
				defaultV.streamSettings.wsSettings.acceptProxyProtocol = true;
				defaultV.streamSettings.wsSettings.proxyProtocolVersion = ob[key];
			}else if(key=="verify_cert"){
				defaultV.streamSettings.tlsSettings.allowInsecure = !ob[key];
				defaultV.streamSettings.wsSettings.allowInsecure = !ob[key];
			}else if(key=="localserver"){
				defaultV.streamSettings.tlsSettings.serverName = ob[key];
			}
		}
		return defaultV;
	}
}
export default vmessFormat;