const path = require('path');
var webpack = require('webpack');
// var pxtorem = require('postcss-pxtorem'); //px自动生成rem
const htmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
var config = require('./config');
const PORT = 8085;
const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/svgs'),  // 2. 自己私人的 svg 存放目录
]

module.exports = {
    entry: './src/app.js', //相对路径
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js'
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
        new OpenBrowserPlugin({
          url: `http://localhost:${PORT}/#/home`
        }),
        new htmlWebpackPlugin({
            title: '华赢宝—支氏控股集团旗下互联网金融平台', //开发环境下项目title
            template: 'index.html', //指定模板路径
            favicon: "./favicon.ico", // 自动把根目录下的favicon.ico图片加入html
            filename: 'index.html', //生成的html存放路径，相对于 output.path
            inject: true // 是否将js放在body的末尾
        }),
        // 热加载
        new webpack.HotModuleReplacementPlugin(), // Enable HMR

    ],
    resolve: {
      extensions: [".js", ".jsx", ".less", ".css", ".scss"] //后缀名自动补全
    },
    externals:{
        'BMap':'BMap',   //百度地图引入
    },
    devServer: {
        historyApiFallback: true,
        inline: true, //当源文件改变时会自动刷新页面
        contentBase:'./build/',
        port: PORT,   
        proxy: {
          "/api": {
            target: config.api,
            changeOrigin: true,
            "pathRewrite": { //这个是个正则匹配
                "^/api": "/"
            }
          }
        },
    },
}
