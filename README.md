# -可以每天向自己的女朋友推送消息，自定义设置

## 天气接口自己去申请关注免费api公众号搜素天气获取接口
<img src="https://github.com/ehbcifnfn/-/blob/master/1.jpg" width="50%" height="10%">


## 项目拉去到本地要初始化
npm install 



## 安装axios库  node-schedule库
npm i axios 

npm i node-schedule


## 安装好以后启动
node main.js

## 成功推送
<img src="https://github.com/ehbcifnfn/-/blob/master/2.jpg" height="60%" width="50%">




## 消息模板格式
时间：{{data.DATA}} 

城市：{{city.DATA}} 

天气：{{weather.DATA}} 

最低温度：{{min.DATA}} 

最高温度：{{max.DATA}} 

穿衣推荐：{{clothes.DATA}} 

在一起已经：{{timer.DATA}} 

{{note_en.DATA}} 


{{note_ch.DATA}}

## 提交的数据data

      touser: "推送用户id",
  
      template_id: "模板id",
      
      url: "http://weixin.qq.com/download",

      topcolor: "#FF0000",
      //发送的数据
      data: {
        data: {
          value: new Date().toLocaleString(),
         //可以自定义颜色
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
          value: `${c.data.result.HeWeather5[0].daily_forecast[0].tmp.min}°c`,
          color: "#19B4D2",
        },
        
        max: {
          value: `${c.data.result.HeWeather5[0].daily_forecast[0].tmp.max}°c`,
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
