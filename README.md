# CC98 DIY QMD

## 此项目用于使用CC98 [sandox] UBB标签加载自己的diy签名档

* 项目使用create-react-app脚手架
* 项目使用antd UI框架

## DEV

* 下载项目
`git clone https://github.com/Dearkano/CC98-QMD.git`

* 安装依赖
`npm i`

* dev启动项目
`npm start`

## DIY

* 编辑你的DIY QMD 
在app.js中，使用react与antd框架编写你的签名档并使用dev调试

* 上传文件到CC98服务器
** 当qmd达到你满意的效果后，使用`npm build` 将js文件打包
** 将打包后的main.js文件上传至CC98服务器，并将js地址写入display.html中
** 将display.html上传至CC98服务器

* 更换签名档
将display.html的地址写入sandbox标签中

格式如下

`[sandbox,url="https://file.cc98.org/v2-upload/sgzo15bm.html",width=600px,height=300px][/sandbox]`
