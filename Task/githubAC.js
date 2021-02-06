/* ziye 
github地址 https://github.com/ziye12
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/ziye.boxjs.json
转载请备注个名字，谢谢

⚠️github运行AC任务


2.6 制作


⚠️一共1个位置 2个ck  👉 2条 Secrets 
多账号换行

第一步 添加  hostname=github.com,

第二步 添加body重写 

登录github   点Action   All allflows 选择js 

点击 Run workflow    Run workflow   运行获取githubACbodyVal  githubACheaderVal


githubACnameVal 👉GIT_githubACNAME
githubACurlVal 👉GIT_githubACURL
githubACheaderVal 👉GIT_githubACHEADER
githubACbodyVal 👉GIT_githubACBODY




⚠️主机名以及重写👇


hostname=github.com,



############## 圈x

#githubAC获取body
https:\/\/github\.com\/* url script-request-body https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/githubAC.js   

############## loon
#githubAC获取body
http-request https:\/\/github\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/githubAC.js,requires-body=true, tag=githubAC获取body

############## surge

#githubAC获取body
githubACbody = type=http-request,pattern=https:\/\/github\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/githubAC.js 



  



*/
const $ = Env("githubAC");
$.idx = ($.idx = ($.getval('githubACSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./githubACCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 1; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', ddtime = '';
const githubACnameArr = [];
let githubACnameVal = ``;
let middlegithubACNAME = [];
const githubACurlArr = [];
let githubACurlVal = ``;
let middlegithubACURL = [];
const githubACheaderArr = [];
let githubACheaderVal = ``;
let middlegithubACHEADER = [];
const githubACbodyArr = [];
let githubACbodyVal = ``;
let middlegithubACBODY = [];



if ($.isNode() && process.env.GIT_githubACHEADER) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
	    if (
        process.env.GIT_githubACNAME &&
        process.env.GIT_githubACNAME.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACNAME = process.env.GIT_githubACNAME.split(COOKIES_SPLIT);
    } else {
        middlegithubACNAME = process.env.GIT_githubACNAME.split();
    }
    if (
        process.env.GIT_githubACURL &&
        process.env.GIT_githubACURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACURL = process.env.GIT_githubACURL.split(COOKIES_SPLIT);
    } else {
        middlegithubACURL = process.env.GIT_githubACURL.split();
    }
    if (
        process.env.GIT_githubACHEADER &&
        process.env.GIT_githubACHEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACHEADER = process.env.GIT_githubACHEADER.split(COOKIES_SPLIT);
    } else {
        middlegithubACHEADER = process.env.GIT_githubACHEADER.split();
    }
    if (
        process.env.GIT_githubACBODY &&
        process.env.GIT_githubACBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACBODY = process.env.GIT_githubACBODY.split(COOKIES_SPLIT);
    } else {
        middlegithubACBODY = process.env.GIT_githubACBODY.split();
    }
}
if (COOKIE.githubACheaderVal) {
    GIT_COOKIES = {
		"githubACnameVal": COOKIE.githubACnameVal.split('\n'),
        "githubACurlVal": COOKIE.githubACurlVal.split('\n'),		
        "githubACheaderVal": COOKIE.githubACheaderVal.split('\n'),
        "githubACbodyVal": COOKIE.githubACbodyVal.split('\n'),
    }
    Length = GIT_COOKIES.githubACheaderVal.length;
}
if (!COOKIE.githubACheaderVal) {
    if ($.isNode()) {
		Object.keys(middlegithubACNAME).forEach((item) => {
            if (middlegithubACNAME[item]) {
                githubACheaderArr.push(middlegithubACNAME[item]);
            }
        });
		Object.keys(middlegithubACURL).forEach((item) => {
            if (middlegithubACURL[item]) {
                githubACheaderArr.push(middlegithubACURL[item]);
            }
        });
        Object.keys(middlegithubACHEADER).forEach((item) => {
            if (middlegithubACHEADER[item]) {
                githubACheaderArr.push(middlegithubACHEADER[item]);
            }
        });
        Object.keys(middlegithubACBODY).forEach((item) => {
            if (middlegithubACBODY[item]) {
                githubACbodyArr.push(middlegithubACBODY[item]);
            }
        });
    } else {
		githubACnameArr.push($.getdata("githubACname"));	
        githubACurlArr.push($.getdata("githubACurl"));		
        githubACheaderArr.push($.getdata("githubACheader"));
        githubACbodyArr.push($.getdata("githubACbody"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理

        let githubACCount = ($.getval('githubACCount') || '1') - 0;
        for (let i = 2; i <= githubACCount; i++) {
            if ($.getdata(`githubACheader${i}`)) {
				githubACnameArr.push($.getdata(`githubACname${i}`));	
                githubACurlArr.push($.getdata(`githubACurl${i}`));				
                githubACheaderArr.push($.getdata(`githubACheader${i}`));
                githubACbodyArr.push($.getdata(`githubACbody${i}`));
            }
        }
    }
    Length = githubACheaderArr.length
}




function GetCookie() {
    if ($request && $request.url.indexOf("actions") >= 0&& $request.url.indexOf("manual") >= 0) {
		
		
		
		
        const githubACurlVal = $request.url
        $.setdata(githubACurlVal, "githubACurl" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取githubACurl✅: 成功,githubACurlVal: ${githubACurlVal}`
        );
        $.msg($.name + $.idx, `获取githubACurl: 成功🎉`, ``);

   

const githubACheaderVal = JSON.stringify($request.headers);
    if (githubACheaderVal) {$.setdata(githubACheaderVal, "githubACheader" + $.idx);
    $.log(
      `[${$.name + $.idx}] 获取githubACheaderVal✅: 成功,githubACheaderVal: ${githubACheaderVal}`
    );
    $.msg($.name + $.idx, `获取githubACheaderVal: 成功🎉`, ``);
	
	
	const githubACnameVal = decodeURIComponent($request.headers.Referer).split('workflow:')[1];
       
        $.setdata(githubACnameVal, "githubACname" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取githubACname✅: 成功,githubACnameVal: ${githubACnameVal}`
        );
        $.msg($.name + $.idx, `获取githubACname: 成功🎉`, ``);

}
        const githubACbodyVal = $request.body;
    if (githubACbodyVal) $.setdata(githubACbodyVal, "githubACbody" + $.idx);
    $.log(
      `[${$.name + $.idx}] 获取githubACbodyVal✅: 成功,githubACbodyVal: ${githubACbodyVal}`
    );
    $.msg($.name + $.idx, `获取githubACbodyVal: 成功🎉`, ``);
  
   
	

}

}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${Length} 个${$.name}账号=============\n`
);


//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() + 1 < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getMonth());
ddtime = Y + M + D;
console.log(ddtime)
//当前时间戳
function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else TTS = Math.round(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
    $.done();
} else {
    !(async () => {
        await all();
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取CK  https://github.com\n',
            'https://github.com', {
                "open-url": "https://github.com"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {

        if (COOKIE.githubACheaderVal) {
			githubACnameVal = GIT_COOKIES.githubACnameVal[i];	
            githubACurlVal = GIT_COOKIES.githubACurlVal[i];			
            githubACheaderVal = GIT_COOKIES.githubACheaderVal[i];
            githubACbodyVal = GIT_COOKIES.githubACbodyVal[i];
        }
        if (!COOKIE.githubACheaderVal) {
			githubACnameVal = githubACnameArr[i];	
            githubACurlVal = githubACurlArr[i];			
            githubACheaderVal = githubACheaderArr[i];
            githubACbodyVal = githubACbodyArr[i];
        }


        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行${$.name + (i + 1)}【${githubACnameVal}】`)
        
        await githubAC(); //运行
        
        
        

        

    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}


//githubAC
function githubAC(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {            
            let url = {
                url: githubACurlVal,
            headers:JSON.parse(githubACheaderVal),
                body: githubACbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 运行🚩: ${data}`);
if (data.match(/github.githubassets.com/g))

$.message += `【${githubACnameVal}】:${time(Number(tts()))}运行成功\n`

console.log(githubACnameVal+`${time(Number(tts()))}运行成功`)
      
                    
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
