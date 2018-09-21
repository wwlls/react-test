/**
 * 这个文件只是记录用到的各种依赖包的作用
 * 因为正式的JSON文件里面不允许有注释，所以写在这里
 * **/

/**
 * package.json
 * 项目配置文件 说明
 * **/
{
  "name": "cf-0705-21",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server", //加上--host IP  可以用ip访问
    "start": "webpack --progress --watch --hot",
    "build": "cross-env NODE_ENV=production webpack --config webpack.prod.config.js --progress --colors"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": { 
    "antd": "^3.7.3",   //antdPC端
    "antd-mobile": "^2.2.2",    //antd移动端
    "axios": "^0.18.0",   //Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
    "axios-mock-adapter": "^1.15.0",    //axios的模拟调试器，将后台mock数据转义
    "prop-types": "^15.6.2", //PropTypes导出一系列验证工具可以确保你接收到的数据是有效的
    "react": "^16.4.1",     //react核心
    "react-countup": "^4.0.0-alpha.6",  //数字从0在一定时间内滚动到设置数字
    "react-dom": "^16.4.1", 
    "react-redux": "^5.0.7",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "redux": "^4.0.0",
    "redux-promise": "^0.6.0",
    "webpack": "^3.0.0",    //webpack核心
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^2.11.2"  // Webpack小型服务器（server.js中用这个来搭建开发环境所需的服务）
  },
  "devDependencies": {
    "autoprefixer": "^8.6.4",   //自动管理浏览器前缀
    "babel": "^6.23.0",     
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-import": "^1.8.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-polyfill": "^6.26.0",    //兼容ie浏览器
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "clean-webpack-plugin": "^0.1.19",
    "cross-env": "^5.2.0",
    "css-loader": "^0.28.11",
    "eslint": "^5.0.1",     // Eslint 代码规范检测器
    "eslint-loader": "^2.1.0",  // Webpack解析器 - 打包时检测代码规范时用
    "eslint-plugin-react": "^7.10.0",   // Eslint插件 - 让Eslint支持检测React语法（JSX）（.eslintrc.json中配置的plugins参数）
    "express": "^4.16.3",   // Node.js框架 - 用于server.js中提供开发环境的服务
    "express-http-proxy": "^1.2.0",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "md5": "^2.2.1",
    "node-sass": "^4.9.3",
    "open-browser-webpack-plugin": "0.0.5",
    "postcss-flexbugs-fixes": "^3.3.1",
    "postcss-loader": "^2.1.5",
    "postcss-pxtorem": "^4.0.1",
    "precss": "^3.1.2",
    "qs": "^6.5.2",     //qs.parse()将URL解析成对象的形式  qs.stringify()将对象 序列化成URL的形式，以&进行拼接
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "svg-sprite-loader": "^3.8.0",
    "uglifyjs-webpack-plugin": "^1.2.7",
    "url-loader": "^1.0.1", 
  }
}
