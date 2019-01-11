const path = require('path');
var webpack = require('webpack');
// var pxtorem = require('postcss-pxtorem'); //px自动生成rem
const htmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
var config = require('./config');
const PORT = 8090;
const svgDirs = [
  require.resolve('antd').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  path.resolve(__dirname, 'src/svgs'),  // 2. 自己私人的 svg 存放目录
]

module.exports = {
    entry: ["babel-polyfill", "./src/app.js"], //相对路径 babel-polyfill转义es6兼容ie浏览器
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle.js',    //用于输出文件的文件名
        chunkFilename: '[name].bundle.js',
        publicPath: '/' // 打包上线时，引用的js路径头部
    },
    devtool: 'source-map',
    module: {
        rules: [ //配置加载器
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['env', 'react', 'es2015', 'stage-0'],
                plugins: [['import', { libraryName: 'antd', style: 'css' }], 'syntax-dynamic-import']
                //plugins: [['import', { libraryName: 'antd-mobile', style: 'css' }], 'syntax-dynamic-import']
              }
            }]
          },
            {
              test: /\.css$/,
              use: ['style-loader',
                    'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        plugins: [require('autoprefixer'),
                                  // pxtorem({
                                  //   rootValue: 75,
                                  //   propWhiteList: [],
                                  // })
                        ]
                      }
                    }
                   ]
            },
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        plugins: [require('autoprefixer'),
                                  // pxtorem({
                                  //   rootValue: 75,
                                  //   propWhiteList: [],
                                  // })
                        ]
                      }
                    },
                    'sass-loader'
                   ]
            },
            {
              // 文件解析
              test: /\.(svg)$/i,
              loader: 'svg-sprite-loader',
              options: {
                include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
              }
            },
            {
              test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: 'url-loader',
              options: {
                limit: 10000, //1w字节以下大小的图片会自动转成base64
              }
            }
          ]
    },
    plugins: [
        //项目启动打开路由
        new OpenBrowserPlugin({
          url: `http://localhost:${PORT}/home`
        }),
        new htmlWebpackPlugin({
            title: config.title, //开发环境下项目title
            template: 'index.html', //指定模板路径
            favicon: "./favicon.ico", // 自动把根目录下的favicon.ico图片加入html
            filename: 'index.html', //生成的html存放路径，相对于 output.path
            inject: true, // 是否将js放在body的末尾
        }),
        // 热加载
        new webpack.HotModuleReplacementPlugin(), // Enable HMR

    ],
    resolve: {
      extensions: [".js", ".jsx", ".less", ".css", ".scss"], //后缀名自动补全
      alias: {
        component: __dirname + '/src/component',
        actions: __dirname + '/src/actions',
        static: __dirname + '/src/static',
        utils:__dirname+'/src/utils',
        api:__dirname+'/src/api'
      },
    },
    externals:{
        'BMap':'BMap',   //百度地图引入
    },
    devServer: {
        historyApiFallback: true,  //把historyApiFallback设置为true那么所有的路径都执行index.html
        inline: true, //当源文件改变时会自动刷新页面
        contentBase:'./build/',  //从项目的根目录提供服务
        port: PORT,   
        proxy: {
          "/api": {   //context =====  "/api"
            target: config.api,
            changeOrigin: true,  //是否跨域
            secure: false,  // 如果是https接口，需要配置这个参数
            //ws: true,    // 是否代理websockets
            // "pathRewrite": { //这个是个正则匹配
            //     "^/api": "/"
            // }
          }
        },
    },
}
