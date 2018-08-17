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
  "devDependencies": {
    "babel": "^6.23.0",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-import": "^1.8.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.19",
    "cross-env": "^5.2.0",
    "css-loader": "^0.28.11",
    "express-http-proxy": "^1.2.0",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.9.1",
    "postcss-pxtorem": "^4.0.1",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "svg-sprite-loader": "^3.8.0",
    "uglifyjs-webpack-plugin": "^1.2.7",
    "webpack": "^3.0.0", // Webpack 核心
    "webpack-dev-server": "^2.11.2" // Webpack小型服务器（server.js中用这个来搭建开发环境所需的服务）
  },
  "dependencies": {
    "antd-mobile": "^2.2.2",
    "autoprefixer": "^8.6.4",
    "axios": "^0.18.0",
    "axios-mock-adapter": "^1.15.0",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "css-loader": "^0.28.11",
    "eslint": "^5.0.1", // Eslint 代码规范检测器
    "eslint-loader": "^2.1.0", // Webpack解析器 - 打包时检测代码规范时用
    "eslint-plugin-react": "^7.10.0", // Eslint插件 - 让Eslint支持检测React语法（JSX）（.eslintrc.json中配置的plugins参数）
    "express": "^4.16.3", // Node.js框架 - 用于server.js中提供开发环境的服务
    "file-loader": "^1.1.11", // Webpack解析器 - 解析各类文件时有用，图片、音频、视频等,处理它们的相对路径问题
    "postcss-flexbugs-fixes": "^3.3.1",
    "postcss-loader": "^2.1.5", // Webpack解析器 - 用于进一步解析CSS，比如自动添加-webkit-前缀等
    "precss": "^3.1.2",
    "qs": "^6.5.2",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "redux": "^4.0.0",
    "redux-promise": "^0.6.0",
    "style-loader": "^0.21.0",
    "url-loader": "^1.0.1",
    "webpack-cli": "^3.0.8"
  }
}
