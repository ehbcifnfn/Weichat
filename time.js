//获取在一起的时间
const timer = function d() {
  PostTimer = new Date("2020-12-04 00:00:00");
  NowTimer = new Date();
  let time = parseInt((NowTimer - PostTimer) / 1000);
  let day = parseInt(time / 60 / 60 / 24); //现在的天数
  day = day < 10 ? "0" + day : day;
  let h = parseInt((time / 60 / 60) % 24); //
  h = h < 10 ? "0" + h : h;
  let min = parseInt((time / 60) % 60);
  min = min < 10 ? "0" + min : min;
  let s = parseInt(time % 60);
  s = s < 10 ? "0" + s : s;
  return day + "天" + h + "时" + min + "分" + s + "秒";
};
// console.log(timer());
//共享
exports.times=timer()
