	## 技术栈：
	react + redux + webpack + react-router + ES6/7/8 + antd +jest

	## 构建 Start

	```
	npm install		# 安装依赖模块

	node-sass	    # 安装失败，可用淘宝镜像下载
	npm install -g cnpm --registry=https://registry.npm.taobao.org
	cnpm install node-sass --save-dev

	npm run dev		# 运行开发环境，默认监听8090端口

	npm run build		# 正式打包，用于生产环境

	node server		# 打包以后进行自测

	```
	删除node_modules所有包命令 
	先下载 npm install rimraf -g
	接着 rimraf node_modules

	```
	执行 npm test 可以运行一次测试
	执行 npm run test:watch 可以让每当文件改变时自动执行测试。