import JSONP from "node-jsonp";
import { tech } from "./TechMan";
async function getKline(code) {
  let url = `http://29.push2his.eastmoney.com/api/qt/stock/kline/get?secid=${code}&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1592709205309`;
  return await new Promise((resolve, reject) => {
    JSONP(url, {}, "cb", (json) => {
      return resolve(json);
    });
  });
}

(async () => {
  let datas = await getKline("0.002565");
  console.log(datas);
  let techDatas = tech(datas.data.klines);
  console.log(techDatas);
  console.log("done");
})();
