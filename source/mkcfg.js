class v2ray {
    constructor() {
        this.log = {
        };
        this.api = {
        };
        this.dns = {
        };
        this.routing = {
        };
        this.policy = {
        };
        this.inbounds = [];
        this.outbounds = [];
        this.transport = {
        };
        this.stats = {
        };
        this.reverse = {
        };
        this.fakedns = {
        };
        this.browserForwarder = {
        };
        this.observatory = {
        };
    }
}
class inboundsObject {
    constructor() {
        this.listen = "127.0.0.1";
        this.port = 1080;
        this.protocol = "socks";
        this.settings = {
            auth: "noauth",
            ip: "127.0.0.1",
            udp: true,
            userLevel: 0
        };
        this.streamSettings = {
        };
        this.tag = "socks";
        this.sniffing = {
            enabled: true,
            destOverride: [
                "http",
                "tls"
            ],
            "metadataOnly": false
        };
        this.allocate = {
            strategy: "always",
            refresh: 5,
            concurrency: 3
        };
    }
}
class VmessUsersObject {
    constructor() {
        this.id = "de305d54-75b4-431b-adb2-eb6b9e546014";
        this.alterId = 64;
        this.security = "auto";
        this.level = 0;
    }
}
class VmessOutboundObject {
    constructor() {
        this.vnext = [
            new VmessUsersObject(),
        ];
    }
}
class outboundsObject {
    constructor() {
        this.sendThrough = "0.0.0.0";
        this.protocol = "vmess";
        this.settings = {
        };
        this.tag = "proxy";
        this.streamSettings = {
        };
        this.proxySettings = {
        };
        this.mux = {
            enabled: false,
            concurrency: 8
        };
    }
}
function mkcfg(nodes,regionPort) {
    var cfg = new v2ray;
    var inbound = new inboundsObject;
    inbound.port = regionPort;
    inbound.tag = regionPort;
    cfg.inbounds.push(inbound);
    var outbound = new outboundsObject;
    outbound.settings.vnext = nodes;
    cfg.outbounds.push(outbound);
    return cfg;
}

/*     cfg.outbounds.push(new VmessOutboundObject({
        protocol: "vmess",
        settings: {
            vnext: [
            //will be added later
            ]
        }
    } */
   // cfg.outbounds.vnext = [];
   // cfg.outbounds.vnext.push(server);
    /* for(var i = 0; i < nodes.length; i++){
        cfg.outbounds[0].settings.vnext.push({
                address: nodes[0].address,
                alterID: nodes[0].alterID,
                port: nodes[0].port,
                ps: nodes[0].ps,
                remark: nodes[0].remark,
                tls: nodes[0].tls,
                users: [
                    {
                        alterID: nodes[0].users[0].alterID,
                        id: nodes[0].users[0].id,
                    }
                ]
        }
        );
    }; */
/*     if (nodes.length < 1) {
        cfg.outbounds[0] = {
            "protocol": "freedom",
            "tag": "direct",
        };
    }
    return cfg;
} */
export default mkcfg;