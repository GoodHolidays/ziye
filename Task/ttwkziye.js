/*ZIYE     感谢 Sunert 大佬的原js   天天挖矿


js制作时间：2020-10-20 

https://raw.githubusercontent.com/ziye12/JavaScript/master/ttwkziye.js

本脚本仅适用支付宝小程序天天挖矿，支持Actions多账号运行  
获取Cookie方法:
1.将下方[rewrite_local]和[MITM]地址复制的相应的区域下
2.打开小程序，获取收益cookie，点击挖矿获取签到Cookie，获取后请注释或禁用Cookie
3.挖矿获取Cookie,已经挖矿无法获取


QX 1.0.6+ :
[task_local]
#支付宝天天挖矿
0 9 * * * https://raw.githubusercontent.com/ziye12/JavaScript/master/ttwkziye.js
[rewrite_local]
https:\/\/operation-api\.jimistore\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/ttwkziye.js

~~~~~~~~~~~~~~~~

Loon 2.1.0+
[Script]
#支付宝天天挖矿
cron "04 00 * * *" script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/ttwkziye.js, enabled=true, tag=支付宝天天挖矿
http-request https:\/\/operation-api\.jimistore\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/ttwkziye.js




~~~~~~~~~~~~~~~~
Surge 4.0 :
[Script]
支付宝天天挖矿 = type=cron,cronexp=35 5 0 * * *,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/ttwkziye.js,script-update-interval=0

支付宝天天挖矿 = type=http-request,pattern=https:\/\/operation-api\.jimistore\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/ttwkziye.js



[MITM]
hostname = operation-api.jimistore.com
~~~~~~~~~~~~~~~~
*/

const $ = new Env('支付宝天天挖矿')//js名字 支付宝天天挖矿


const notify = $.isNode() ? require('./sendNotify') : '';
let bodyArr = [],headerArr = [];//定义Secret设置 合集

if (isGetCookie = typeof $request !==`undefined`) {
   GetCookie();
   $.done()   //cookie获取判定
} 
//Secret合集循环方式判定，其中  ZFBWK_BODY   ZFBWK_HEADER   为git仓库中的Secret合集等同于手机js的ck
if ($.isNode()) {
  if (process.env.ZFBWK_BODY && process.env.ZFBWK_BODY.indexOf('#') > -1) {
   wkbody = process.env.ZFBWK_BODY.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.ZFBWK_BODY && process.env.ZFBWK_BODY.indexOf('\n') > -1) {
   wkbody = process.env.ZFBWK_BODY.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   wkbody = process.env.ZFBWK_BODY.split()
  };
  //判定读取Secret合集，赋值于bodyArr与headerArr
  if (process.env.ZFBWK_HEADER && process.env.ZFBWK_HEADER.indexOf('#') > -1) {
   wkheader = process.env.ZFBWK_HEADER.split('#');
  }
  else if (process.env.ZFBWK_HEADER && process.env.ZFBWK_HEADER.split('\n').length > 0) {
   wkheader = process.env.ZFBWK_HEADER.split('\n');
  } else  {
   wkheader = process.env.ZFBWK_HEADER.split()
  };
  Object.keys(wkbody).forEach((item) => {
        if (wkbody[item]) {
          bodyArr.push(wkbody[item])
        }
    });
    Object.keys(wkheader).forEach((item) => {
        if (wkheader[item]) {
          headerArr.push(wkheader[item])
        }
    });
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
    bodyArr.push($.getdata('sy_body_wk'))//判定读取ck
    headerArr.push($.getdata('sy_header_wk'))//判定读取ck
}
 //异步运行
!(async () => {
  if (!bodyArr[0]) {
    $.msg($.name, '【提示】请先获取支付宝天天挖矿一cookie')
    return;
  }
   console.log(`------------- 共${bodyArr.length}个账号\n`)
  for (let i = 0; i < bodyArr.length; i++) {
    if (bodyArr[i]) {
      bodyVal = bodyArr[i];
      headerVal = headerArr[i];
      $.index = i + 1;
      console.log(`\n开始【天天挖矿${$.index}】`)
     await getsign();
 if (headerVal !== undefined){
     await getsy();
    } else {
    wksy = `【天天挖矿】❌ 未获取Cooiekie`
    };
    $.msg($.name, wksign,wksy)//手机js通知项   wksign   headerbag   docard
  if ($.isNode()) {
       await notify.sendNotify($.name+ wksign,wksy)//git通知项   wksign   headerbag   docard
     }
   }
  }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())








// Cookie获取
function GetCookie() {
if ($request && $request.method != 'OPTIONS' && $request.url.match(/createSign/)) {
  const signurlVal = $request.url
  const bodyVal = $request.body
  const headerVal = JSON.stringify($request.headers)
  
  //const signheaderVal = JSON.stringify($request.headers)
   $.log(`bodyVal:${bodyVal}`)
  if (bodyVal) $.setdata(bodyVal, 'sy_body_wk') 
  if (headerVal) $.setdata(headerVal,  'sy_header_wk')
	$.msg($.name, `获取天天挖矿Cookie: 成功`, ``)
  


}
} 



//天天挖矿
function getsign() {
  return new Promise((resolve, reject) =>{
   let signurl =  {
      url: `https://operation-api.jimistore.com/api/mining/v1/sign/createSign`,
      headers: JSON.parse(headerVal),body: bodyVal
	  }
     $.post(signurl, async(error, response, data) => {
     let result = JSON.parse(data)
     if (result.data.success == 'true'){
         wksign = '【天天挖矿】✅ 挖矿成功, 收益:'+result.amount/100+'元💰\n'
         }  
     else if (result.data.success == 'false'){
         wksign = `【天天挖矿】 重复挖矿\n`
       }
     else if (result.code == 40101){
         wksign = `【天天挖矿】 挖矿失败, 原因:${result.message}\n`
       }
     else {
         wksign = `【天天挖矿】 挖矿失败, 原因:`+result.errmsg
         $.msg($.name, wksign, ``)
       if ($.isNode()) {
         await notify.sendNotify($.name, wksign)
           }//git通知项
         return
        }
     resolve()
    })
  })
}







//天天挖矿收益
function getsy() {
  return new Promise((resolve, reject) =>{
   let syurl =  {
      url: `https://operation-api.jimistore.com/api/mining/v1/sign/showSignInfo`,
      headers: JSON.parse(headerVal)
	  }
     $.post(syurl, async(error, response, data) => {
     let result = JSON.parse(data)
     if (result.code == 200){
         wksy = '【挖矿收益】账户总收益:'+result.data.cumulativeMoney/100+`元💰\n【挖矿记录】连续挖矿${result.data.numberInRounds}天,总计挖矿${result.data.cumulativeSignCount}天\n`
         }  
     
     else if (result.code == 40101){
         wksy = `【挖矿收益】 挖矿失败, 原因:${result.message}\n`
       }
     
	 else {
         wksy = `【挖矿收益】 挖矿失败, 原因:`+result.errmsg
         $.msg($.name, wksy, ``)
       if ($.isNode()) {
         await notify.sendNotify($.name, wksy)
           }//git通知项
         return
        }
     resolve()
    })
  })
}




function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
