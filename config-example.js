//订阅的URL，请修改为自己的
var sub = String("https://example.com");
//不同地区代理服务器的端口
var port_cn = 7890;
var port_hk = 7891;
var port_tw = 7892;
var port_th = 7893;
var port_default = 7894;
//过滤节点时使用的关键词
let keyword_hk = ["香港","hk","hongkong","hong kong"];
let keyword_tw = ["台湾","台灣","taiwan","tw"];
let keyword_th = ["泰国","泰國","th","thailand","thai land","thai land","thai","新加坡","singapore","sg","马来西亚","malaysia","my","菲律宾","philippines","ph","印度尼西亚","indonesia","越南","vietnam","vn","新加坡","singapore","sg","马来西亚","malaysia","my","菲律宾","philippines","ph","印度尼西亚","indonesia","id","越南","vietnam","vn"];
let keyword_cn = ["中国", "中國", "cn", "china", "chinese", "chinese","回国", "大陆", "上海", "重庆", "乌鲁木齐", "齐齐哈尔"];
let keyword_cn_exclude = ["中转", "落地", "内部专用"];
//定义了默认的v2ray客户端配置，默认情况下无需修改
var v2raycfg = {
    "log": {
    },
    "dns": {
    },
    "inbounds": [
        {
            "listen": "127.0.0.1",
            "port": 1080,
            "protocol": "socks",
            "settings": {
                "auth": "noauth",
                "udp": true,
                "ip": "127.0.0.1"
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "vmess",
            "settings": {
                "vnext": [
                //will be added later
                ],
            },
        }
    ],
}
module.exports = {
    sub,
    port_cn,
    port_hk,
    port_tw,
    port_th,
    port_default,
    keyword_hk,
    keyword_tw,
    keyword_th,
    keyword_cn,
    keyword_cn_exclude,
    v2raycfg
}