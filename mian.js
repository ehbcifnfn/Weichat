//发起网络请求的库
const axios = require("axios");
//定时发送消息模块
const schedule = require("node-schedule");

const time = require("./time.js");

//token是自己定义的
//aqqid 申请的
// secret 申请的
const i = {
  token: "#自己定义的token",
  appid: "#申请",
  secret: "#申请",
  grant_type: "client_credential",
};
// console.log(time.times);

//获取当前时间
const now = new Date().toLocaleString();

async function send() {
  //获取access_token
  const a = await axios({
    method: "get",
    url: "https://api.weixin.qq.com/cgi-bin/token",
    params: {
      grant_type: i.grant_type,
      appid: i.appid,
      secret: i.secret,
    },
  });
  //天气接口，需要自己去申请appkey
  const c = await axios({
    methods: "post",
    url: "https://way.jd.com/he/freeweather",
    params: { city: "自己所在的城市", appkey: "#申请" },
  });

  //向微信提供的接口提交数据
  const b = await axios({
    method: "post",
    url:
      "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" +
      a.data.access_token,
    data: {
      //接受用户的id
      touser: "omyip5iPCsBBemUMzpxhIzrxhicU",
      //模板id
      template_id: "zSzO7NY0yKo1vxjwbEPNL5pQWIpeTyfAhD9VIl-b_EU",
      url: "http://weixin.qq.com/download",

      topcolor: "#FF0000",
      //发送的数据
      data: {
        data: {
          value: new Date().toLocaleString(),

          color: "#8700AA",
        },

        city: {
          value: "随州",

          color: "#95C2A1",
        },

        weather: {
          value: c.data.result.HeWeather5[0].hourly_forecast[0].cond.txt,

          color: "#FFF400",
        },

        min: {
          value: `${c.data.result.HeWeather5[0].daily_forecast[0].tmp.min}°C`,

          color: "#19B4D2",
        },

        max: {
          value: `${c.data.result.HeWeather5[0].daily_forecast[0].tmp.max}°C`,
          color: "#735446",
        },
        clothes: {
          value: c.data.result.HeWeather5[0].suggestion.drsg.txt,
          color: "#ACACAC",
        },
        note_en: {
          value: "I copied the love words, but I love you really.",
          color: "#7A7A7A",
        },
        note_ch: {
          value: "我复制了爱的话语，但是我爱你真的很深.",
          color: "#FF4000",
        },
        timer: {
          value: time.times,
          color: "#E3DA0E",
        },
      },
    },
  });
}
//{ hour: 7, minute: 00, second: 00 } 7.00发送
schedule.scheduleJob("01-10 * * * * *", function () {
  console.log("启动任务:" + new Date().toISOString());
  send();
  console.log("发送成功");
});
