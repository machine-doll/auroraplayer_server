# auroraplayer_server
a set of tools to A set of tools to lift the regional restrictions on streaming platforms  
# 状态  
这个应用还是非常早期的版本。经过几天的开发，初步实现了从订阅中转换出来分地区的Vmess配置文件，并且启动多个Vmess实例  
配合其他的软件，可以完成流媒体解锁、解除区域限制等功能  
计划让程序本身就可以支持识别API和转发到对应的服务器。这些功能还在开发中  
文档还没开始写，因为程序还没有定型
# 使用 
## 哔哩哔哩  
现在只有代理功能，需要配合其他的程序来转发接口到不同的代理服务器  
代理服务器是用的V2ray，请下载最新版本，放到本程序的根目录中  
理论上可以支持Win32和Linux。计划是要支持Win32和Linux的  
运行需要最新版本的node.js，先执行`npm install`安装依赖，再执行`node index.js`来运行
请先按照[部署bilibili解析服务器的教程](https://github.com/JasonKhew96/biliroaming-go-server-docker)，在本地部署一个docker的容器  
再在docker容器中安装node，拉取本项目，并且把v2ray放到本项目的最外层  
把config-example.yaml重命名为config.yaml，并且修改其中的vmess订阅连接   
之后启动bilibili解析服务器，使用你喜欢的方式来解析
## 其他  
正在开发
