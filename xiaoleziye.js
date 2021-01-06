
/*ziye


微信扫码 https://raw.githubusercontent.com/ziye12/JavaScript/master/xiaoleziye.png  获取授权

开软件，然后进签到，点签到获取cookie


10.5 增加更多通知内容
10.7 修复cookie，获取问题




hostname=minapp.xqrobot.net,

#小乐
############## 圈x

https:\/\/minapp\.xqrobot\.net\/* url script-request-body https://raw.githubusercontent.com/ziye12/JavaScript/master/xiaoleziye.js


#小乐
############## loon


http-request https:\/\/minapp\.xqrobot\.net\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/xiaoleziye.js, requires-body=true


#小乐
############## surge

小乐签到 = type=http-request,pattern=https:\/\/minapp\.xqrobot\.net\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/xiaoleziye.js, requires-body=true





*/





const sy = init()

const jsname='小乐签到'

const logs = 0;   //0为关闭日志，1为开启
const notifyInterval=1//0为关闭通知，1为开启
const jbid=1;


const xiaoleurlKey = 'xiaoleurl'+jbid

const xiaoleheaderKey = 'xiaolehd'+jbid

const xiaolebodyKey = 'xiaolebd'+jbid

const xiaoleurlVal = sy.getdata(xiaoleurlKey)

const xiaoleheaderVal = sy.getdata(xiaoleheaderKey)

const xiaolebodyVal = sy.getdata(xiaolebodyKey)








var tz=''


let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie()
} else {
   all()
}





function GetCookie() {

if ($request.headers){

   if($request &&$request.url.indexOf("/user.php?mod=sign&")>=0) {

  const xiaoleurlVal = $request.url
if (xiaoleurlVal)        sy.setdata(xiaoleurlVal,xiaoleurlKey)
    sy.log(`[${jsname}] 获取url请求: 成功,xiaoleurlVal: ${xiaoleurlVal}`)
    
  const xiaolebodyVal = $request.body
    if (xiaolebodyVal)        sy.setdata(xiaolebodyVal,xiaolebodyKey)
    sy.log(`[${jsname}] 获取阅读: 成功,xiaolebodyVal: ${xiaolebodyVal}`)
    
const xiaoleheaderVal = JSON.stringify($request.headers)
    if (xiaoleheaderVal)        sy.setdata(xiaoleheaderVal,xiaoleheaderKey)
    sy.log(`[${jsname}] 获取Cookie: 成功,xiaoleheaderVal: ${xiaoleheaderVal}`)
    sy.msg(xiaoleheaderKey, `获取Cookie: 成功🎉`, ``)
  



  }
  
  }

}












 function all()

 {

   for(var i=0;i<5;i++)
 { (function(i) {
            setTimeout(function() {
    
     if(i==0) xiaoletask(i);

else if(i==1) xiaoleuser(i);
else if(i==2) xiaoletg(i);
else if(i==3) xiaolesy(i);



else if(i==4) showmsg(i);
}, (i + 1) *1000);
                })(i)


}}



//签到
function xiaoletask() {
return new Promise((resolve, reject) => {

  const toxiaoleurl = {

    url: xiaoleurlVal,

    headers: JSON.parse(xiaoleheaderVal),
    body: xiaolebodyVal
  };
   sy.post(toxiaoleurl,(error, response, data) =>{
     if(logs) sy.log(`${jsname}, 签到信息: ${data}`)
     signinfo =JSON.parse(data)
      if (signinfo.result==true)
 {
tz+='【签到成功】🎉:'+signinfo.show+'\n'
}

else if (signinfo.result==false)
 {
tz+='【重复签到】✖️:'+signinfo.show+'\n'
}



    resolve()
    })
   })
  }  




function xiaoleuser() {
return new Promise((resolve, reject) => {

  const toxiaoleuserurl = {
      url: xiaoleurlVal.replace(/mod=sign/g, `mod=index`),
headers: JSON.parse(xiaoleheaderVal),

  };
   sy.post(toxiaoleuserurl,(error, response, data) =>{
if(logs) sy.log(`${jsname}, 用户信息: ${data}`)
     userinfo =JSON.parse(data)
      if (userinfo.result==true)
 {
tz+='【'+userinfo.info.userlevel_name+'】👤：'+userinfo.info.user_name+'\n'+
'【现金余额】🧧：'+userinfo.info.user_money+'元'+'\n'+
'【今日收益】🧧：'+userinfo.info.jiang_day1+'元'+'\n'+
'【本月收益】🧧：'+userinfo.info.jiang_month1+'元'+'\n'+
'【签到任务】⏰：'+userinfo.info.task_list[0].name+'\n'+
'【签到收益】⏰：'+userinfo.info.task_list[0].money+'\n'+
'【签到信息】⏰：'+userinfo.info.task_list[0].desc+'\n'+



'【邀请任务】👥：'+userinfo.info.task_list[1].name+'\n'+
'【邀请收益】👥：'+userinfo.info.task_list[1].money+'\n'+
'【邀请信息】👥：'+userinfo.info.task_list[1].desc+'\n'


}


else if (userinfo.result==false)
 {
tz+=userinfo.show
}



    resolve()
    })
   })
  }  





function xiaoletg() {
return new Promise((resolve, reject) => {

  const toxiaoletgurl = {
      url: xiaoleurlVal.replace(/mod=sign/g, `mod=tg&act=user&level=&page=1`),
headers: JSON.parse(xiaoleheaderVal),

  };
   sy.post(toxiaoletgurl,(error, response, data) =>{
if(logs) sy.log(`${jsname}, 用户信息: ${data}`)
     tginfo =JSON.parse(data)


      if (tginfo.result==true)
 {


tz+='【好友信息】😄：'+tginfo.list[0].user_name+'\n'+
'【注册时间】🤖：'+tginfo.list[0].user_atime+'\n'+
'【好友等级】🎊：'+tginfo.list[0].userlevel_name+'\n'




}


else if (userinfo.result==false)
 {
tz+='错误'
}



    resolve()
    })
   })
  }  


















function xiaolesy() {
return new Promise((resolve, reject) => {

  const toxiaolesyurl = {
      url: xiaoleurlVal.replace(/mod=sign/g, `mod=tbk_jiang&page=1`),
headers: JSON.parse(xiaoleheaderVal),

  };
   sy.post(toxiaolesyurl,(error, response, data) =>{
if(logs) sy.log(`${jsname}, 收益信息: ${data}`)
     syinfo =JSON.parse(data)
var xx=syinfo.list[0].jiang_text
var tt=xx.substring(xx.indexOf("用户")+2,xx.indexOf("奖励"));



      if (syinfo.result==true)
 {
tz+=
'【收益信息】👤：'+tt+'\n'+
'【下单时间】🧧：'+syinfo.list[0].jiang_adate+'\n'+
'【预计收益】🧧：'+syinfo.list[0].jiang_money+'元'+'\n'






}


else if (userinfo.result==false)
 {
tz+=userinfo.show
}



    resolve()
    })
   })
  }  




function showmsg() {

console.log(tz)

if (notifyInterval==1)
sy.msg(jsname,'',tz)
}


function init() {
  isSurge = () => {
    return undefined !== this.$httpClient
  }
  isQuanX = () => {
    return undefined !== this.$task
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle = '', body = '') => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (msg) => {
    console.log(`${msg}\n`)
  }
  get = (options, callback) => {
    if (isQuanX()) {
      if (typeof options == 'string') options = { url: options }
      options['method'] = 'GET'
      return $task.fetch(options).then(
        (response) => {
          response['status'] = response.statusCode
          callback(null, response, response.body)
        },
        (reason) => callback(reason.error, null, null)
      )
    }
    if (isSurge()) return $httpClient.get(options, callback)
  }
  post = (options, callback) => {
    if (isQuanX()) {
      if (typeof options == 'string') options = { url: options }
      options['method'] = 'POST'
      $task.fetch(options).then(
        (response) => {
          response['status'] = response.statusCode
          callback(null, response, response.body)
        },
        (reason) => callback(reason.error, null, null)
      )
    }
    if (isSurge()) $httpClient.post(options, callback)
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}

