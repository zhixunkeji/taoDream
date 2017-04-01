const basic = {
    basicUrl : '',
    formatDate(str,type) {
      var oDate = new Date(str), oYear = oDate.getFullYear(), oMonth = oDate.getMonth() + 1, oDay = oDate.getDate(), oHour = oDate.getHours();
      var oMin = oDate.getMinutes(), oSen = oDate.getSeconds();
      oMonth = oMonth >= 10 ? oMonth : '0'+oMonth;
      // oDay = oDay >= 10 ? oDay : '0'+oDay;
      oHour = oHour >= 10 ? oHour : '0'+oHour;
      oMin = oMin >= 10 ? oMin : '0'+oMin;
      oDay = oDay >= 10 ? oDay : '0'+oDay;
      oSen = oSen >= 10 ? oSen : '0'+oSen;
      var oTime = oYear + '-' + oMonth + '-' + oDay;// 最后拼接时间
      if(type && type == 2){
        return oYear + '-' + oMonth + '-' + oDay + ' ' + oHour + ':' + oMin
      }
      return oTime;
    },
    checkMobile(rule, value, callback){
      if (!/^1[34578]\d{9}$/.test(value)) {
        callback(new Error('请输入正确的手机号码'));
      }
      callback();
    },
    checkNum(rule, value, callback){
      if (!/^[1-9]\d*$/.test(value)) {
        callback(new Error('请输入非零正整数'));
      }
      callback();
    },
    checkNum2(rule, value, callback){
      if (!/^[0-9]+(.[0-9]{0,2})?$/.test(value)) {
        callback(new Error('请输入正确的金额,最多2位小数'));
      }
      if (value > 100000) {
        callback(new Error('请不要输入过大的金额'));
      }
      callback();
    },
    checkStr(rule, value, callback){
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        callback(new Error('请输入正确的字符,英文或数字'));
      }
      callback();
    },
    checkName(rule, value, callback){
      if (!/^[\u4E00-\u9FA5]{1,6}$/.test(value)) {
        callback(new Error('请输入正确的中文名字,1～6位'));
      }
      callback();
    },
    checkCard(rule, value, callback){
      if (!/^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$/.test(value)) {
        callback(new Error('请输入正确的身份证号码'));
      }
      callback();
    },
    clone(myObj){
      if(typeof(myObj) != 'object') return myObj;
      if(myObj == null) return myObj;
      var myNewObj = new Object();
      for(var i in myObj){
        myNewObj[i] = this.clone(myObj[i]);
      }
      return myNewObj;
    }
}

export default {
  basic
};
