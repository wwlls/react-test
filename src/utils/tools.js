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
