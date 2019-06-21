import 'core-js/es6/map';
import 'core-js/es6/set';
import numeral from 'numeral';
import moment from 'moment';

/** 这个文件中封装了一些常用的工具函数 **/

const tools = {
    /**
        保留N位小数
        最终返回的是字符串
        若转换失败，返回参数原值
        @params
        str - 数字或字符串
        x   - 保留几位小数点
    */
    pointX(str, x = 0) {
        if (!str && str !== 0) {
            return str;
        }
        const temp = Number(str);
        if (temp === 0) {
            return temp.toFixed(x);
        }
        return temp ? temp.toFixed(x) : str;
    },

    /**
        去掉字符串两端空格
    */
    trim(str) {
        const reg = /^\s*|\s*$/g;
        return str.replace(reg, "");
    },

    /**
        是否是手机号
    */
    isMobile(str) {
        if (/^13\d{9}$/g.test(str) || (/^14[0-9]\d{8}$/g.test(str))
            || (/^16[0-9]\d{8}$/g.test(str))
            || (/^15[0-9]\d{8}$/g.test(str))
            || (/^18[0-9]\d{8}$/g.test(str))
            || (/^19[0-9]\d{8}$/g.test(str))
            || (/^17[0-9]\d{8}$/g.test(str))) {
            return true;
        } else {
            return false;
        }
    },

    /**
        固定电话
    */
    isPhone(str) {
        var isPhone = /^0(((\d{2,3})-(\d){7,8})|(\d{2,3}(\d){7,8}))$/;
        if (isPhone.test(str)) {
            return true;
        }
        return false;
    },

    /**
     * 中文名字
     */
    isName(str) {
        var isName = /^([A-Za-z\u0391-\uFFE5]){2,20}$/;
        if (isName.test(str)) {
            return true;
        }
        return false;
    },

    /**
     * 验证密码
     */
    checkPassWord(str){
        /*[`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\\\|;:'",<\.>\/\?] 符号验证,字符串中\"或\'这种斜杠后会被理解为转义,如果输入数量为最小限定数量,会因少了一个字符造成验证不通过
        由数字字母符号组成6-16位,至少包含数字、字母、符号中的两种,写出来确实有点长,不知道性能,但感觉还是比for循环,charAt比较要快
        /^((?=.*?\d)(?=.*?[A-Za-z])|(?=.*?\d)(?=.*?[`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\\\|;:'",<\.>\/\?])|(?=.*?[A-Za-z])(?=.*?[`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\\\|;:'",<\.>\/\?]))[\dA-Za-z`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\\\|;:'",<\.>\/\?]{6,16}$/
        */
        return /^(?!\W*[0-9]+\W*$)(?!\W*[a-zA-Z]+\W*$)[^\s'"]{6,16}$/.test(str);
    },

    /**
     * 身份证号
     */
    isIdCard(str) {
        var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        var isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[A-Za-z0-9]{1}$/;
        if (isIDCard1.test(str) || isIDCard2.test(str)) {
            return true;
        }
        return false;
    },

    /**
     * 合法Email地址
     */
    isEmail(str) {
        var isEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (isEmail.test(str)) {
            return true;
        }
        return false;
    },

    /**
     * 转换为int型数字
     */
    string2Int(va) {
        if (isNaN(va)) {
            return 0;
        } else {
            return parseInt(va);
        }
    },

    /**
     * 金额格式化
     */
    isNumeral(money) {
        return numeral(money).format('0,0.00');
    },
    /**
     * 时间格式化
     */
    isMoment(time, type) {
        if(type === 0) {
            return moment(time).format('YYYY-MM-DD  HH:mm:ss');
        } else if(type === 1) {
            return moment(time).format('YYYY-MM-DD');
        } else if(type === 2) {
            return moment(time).format('YYYY年MM月DD日');
        }
    },
    /**
     * 隐藏手机号中间4位
     */
    formatPhone(phone) {
        phone += '';
        return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
    },
    /**
     * 隐藏身份证号中11位
     */
    formatIdentity(number) {
        number += '';
        return number.replace(/(\d{4})\d*(\d{4})/g, '$1**********$2')
    },

    /**
     * 获取
     */
    browser: {
        isAndroid: function() {
          return navigator.userAgent.match(/Android/i) ? true : false;
        },
        isMobileQQ : function(){
          var ua = navigator.userAgent;
          return /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(ua) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(ua);
        },
        isIphonex: function() {
             return /iphone/gi.test(navigator.userAgent) && ((screen.height == 812 && screen.width == 375) || (screen.height == 896 && screen.width == 414));
        },
        isIOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        isWx : function() {
          return navigator.userAgent.match(/micromessenger/i) ? true : false;
        },
        isApp: function() {
              return navigator.userAgent.match(/hyd/i) ? true : false;
        },
        getDeviceData: function(key){
            var deviceArr = navigator.userAgent.split(' ');
            var deviceObj = {};
            for (var i = 0; i < deviceArr.length; i++) {
                deviceObj[deviceArr[i].split('/')[0]] = deviceArr[i].split('/')[1];
            }
            // 版本号是客户端自己定义的hyd
            return deviceObj[key];
        }
    },

    //调用app的方法，需要原生客户端提供url
    linkAppFunc: function(url) {
        var iFrame = document.createElement('iframe'),aLink = document.createElement("a"), body = document.body;
        if (common.browser.isWx() && common.browser.isAndroid()) {
              window.location.href = url;
        } else if (common.browser.isIOS()) {
            if (common.browser.isWx()) {
              window.location.href = url;
            } else {
              aLink.href = url;
              body.appendChild(aLink);
              aLink.click();
              body.removeChild(aLink);
              aLink = null;
            }
        } else {
            iFrame.setAttribute('src', url);
            iFrame.setAttribute('style', 'display:none;');
            iFrame.setAttribute('height', '0px');
            iFrame.setAttribute('width', '0px');
            iFrame.setAttribute('frameborder', '0');
            body.appendChild(iFrame);
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
        }
    },
    // 调用进app某个页面的方法，如果失败的话需要跳转到相对应的下载页面
    goAppOrHtml: function(appUrl, downUrl) {
          common.linkAppFunc(appUrl);
        if (!common.browser.isApp()) {
             // 下面如果不是在app里面，就去下载页面；后期会在微信里打开，所以先提前加上这个方法
            var start = Date.now();
            setTimeout(() => {
                var timeOutDateTime = new Date();
                // 如果app启动，浏览器最小化进入后台或者跳出弹出框提示去app，则计时器存在推迟或者变慢的问题,就说明成功，否则的话就说明app没有启动，那么就跳转至下载页面
                    if (timeOutDateTime - start < 500 + 20) {
                        // 由于项目原因，情况特殊：20181218,原先是去下载页面，微信的话在下载页面会跳转应用宝；但是由于这次改名成“杭品生活”，应用宝流程走太久，所以这里就先不跳转到下载页面，提示用浏览器打开
                        if (common.browser.isAndroid()) {
                        // if (common.browser.isAndroid() && !common.browser.isWx()) {
                            // 如果是安卓并且不是微信的话就去下载页面下载,否则其他情况都去应用宝
                            location.href = downUrl || '/app/download';
                        } else {
                            location.href = downUrl || 'http://a.app.qq.com/o/simple.jsp?pkgname=net.huayingdai';
                        }
                    }
            }, 500);
        }
    },
    gotoPay: function(appUrl, htmlUrl) {
        var versionApp = navigator.userAgent.split('hyd/')[1];
        if (versionApp && versionApp.substring(0,5) >= '3.5.0') {
          common.linkAppFunc(appUrl);
        } else {
            window.location.href = htmlUrl;
        }
    },

    /**
        给字符串打马赛克
        如：将123456转换为1****6，最多将字符串中间6个字符变成
        如果字符串长度小于等于2，将不会有效果
    */
    addMosaic(str) {
        const s = String(str);
        const lenth = s.length;
        const howmuch = (() => {
            if (s.length <= 2) {
                return s.length;
            }
            const l = s.length - 2;
            if (l <= 6) {
                return l;
            }
            return 6;
        })();
        const start = Math.floor((lenth - howmuch) / 2);
        const ret = s.split("").map((v, i) => {
            if (i >= start && i < start + howmuch) {
                return "*";
            }
            return v;
        });
        return ret.join("");
    },
    /**
        字符串加密
        简单的加密方法
    */
    compile(code) {
        let c = String.fromCharCode(code.charCodeAt(0) + code.length);
        for (let i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
        }
        console.log("加谜：", code, c);
        return c;
    },
    /**
        字符串解谜
        对应上面的字符串加密方法
    */
    uncompile(code) {
        let c = String.fromCharCode(code.charCodeAt(0) - code.length);
        for (let i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
        }
        console.log("解谜：", code, c);
        return c;
    }
};

export default tools;
