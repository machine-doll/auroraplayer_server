import crypto from "crypto";
class RuleObject_main {
    constructor() {
        this.type = "field";
        this.domain = [
            "app.bilibili.com",
            "api.bilibili.com",
            "api.live.bilibili.com",
            "live.bilibili.com",
            "interface.bilibili.com",
            "b23.tv",
            "biliapi.net",
            "biliplus.com",
            "biliplus.ipcjs.win",
            //will delete th domain in the future
            "api.global.bilibili.com",
            "app.global.bilibili.com",
        ];
        this.port = "80,443";
        this.network = "tcp,udp";
        this.inboundTag = [
        ];
        this.protocol = [
            "http",
            "tls",
        ];
        this.balancerTag = "bili";
    }
}
class RuleObject_th {
    constructor() {
        this.type = "field";
        this.domain = [
            "api.global.bilibili.com",
            "app.global.bilibili.com",
            "api.bilibili.co",
            "app.bilibili.co",
            "api.bilibili.tv",
            "app.bilibili.tv",
            "bilibili.tv",
            "bilibili.co",
            "biliplus.com",
            "biliplus.ipcjs.win",
            "b23.tv",
        ];
        this.port = "80,443";
        this.network = "tcp,udp";
        this.inboundTag = [
        ];
        this.protocol = [
            "http",
            "tls",
        ];
        this.balancerTag = "bili";
    }
}
class balancerObject {
    constructor() {
        this.tag = "bili";
        this.selector = [
        ];
        this.strategy = {
            type: "random",
        }
    }
}
class v2ray {
    constructor() {
        this.log = {
            loglevel: "warning",
            access: "",
            error: "",
        };
        this.api = {
            tag: "api",
            services: [
                "HandlerService",
                "LoggerService",
                "StatsService"
            ]
        };
        this.dns = {
            servers: [
                "https://dns.google/dns-query",
                "https://1.1.1.1/dns-query",
            ]
        };
        this.routing = {
            domainStrategy: "AsIs",
            domainMatcher: "mph",
            rules: [
            ],
            balancers: [
            ],
        };
        this.policy = {
            levels: {
                0: {
                    handshake: 4,
                    connIdle: 300,
                    uplinkOnly: 2,
                    downlinkOnly: 5,
                    statsUserUplink: false,
                    statsUserDownlink: false,
                    bufferSize: 10240
                }
            },
            system: {
                statsInboundUplink: false,
                statsInboundDownlink: false,
                statsOutboundUplink: false,
                statsOutboundDownlink: false
            }
        };
        this.inbounds = [];
        this.outbounds = [];
        this.transport = {
        };
        this.stats = {
        };
        this.reverse = {
        };
        this.fakedns = [
        ];
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
        this.tag = "";
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
        this.tag = "";
        this.streamSettings = {
            network: "ws",
            security: "none",
            wsSettings: {
                host: "v2ray.com",
                path: "/",
                headers: {
                }
            },
            skipCertVerify: false,

        };
        this.proxySettings = {
        };
        this.mux = {
            enabled: true,
            concurrency: 8
        };
    }
}
function mkcfg(nodes,regionPort) {
    var cfg = new v2ray;
    cfg.fakedns = [
            {
                "ipPool": "198.18.0.0/15",
                "poolSize": 65535
            },
            {
                "ipPool": "fc00::/18",
                "poolSize": 65535
            }
    ];
    var inbound = new inboundsObject;
    inbound.port = regionPort;
    inbound.tag = "socks" + regionPort;
    cfg.inbounds.push(inbound);
/*     var outbound = new outboundsObject;
    outbound.tag = "vmess" + regionPort;
    outbound.settings.vnext = nodes;
    cfg.outbounds.push(outbound); */
    var rule = new RuleObject_main;
    rule.inboundTag.push("socks" + regionPort);
    rule.balancerTag = "bili" + regionPort;
    cfg.routing.rules.push(rule);
    var balancer = new balancerObject;
    balancer.tag = "bili" + regionPort;
    nodes.forEach(element => {
        element.tag = `${regionPort}_${crypto.randomBytes(4).toString('hex')}`;
        cfg.outbounds.push(element);
        balancer.selector.push(element.tag);
    });
    cfg.routing.balancers.push(balancer);
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