'use strict';
module.exports = {
  /* 生成随机字符串 */
  randomString(len) {
    len = len || 7;
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd + Date.now();
  },
  // 返回结果json
  result(jn = {}) {
    return Object.assign(
      {
        code: 1000,
        desc: '成功',
        data: '',
      },
      jn
    );
  },
  format(date, fmt) {
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'H+': date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  },
  // 流量数字格式化
  flow(val = 0) {
    let value = val;
    let index = 0;
    while (value >= 1024) {
      value = value / 1024;
      index++;
    }
    value = value.toFixed(2);
    if (index >= 4) {
      value = value + 'T';
    } else if (index >= 3) {
      value = value + 'G';
    } else if (index >= 2) {
      value = value + 'M';
    } else if (index >= 1) {
      value = value + 'KB';
    } else {
      value = value + 'B';
    }
    return value;
  },
};
