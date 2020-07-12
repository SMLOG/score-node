import { tech, getKlineData } from "./TechMan";
import { kUtil } from "./util";

(async () => {
  let datas = await getKlineData("0.002565");
  console.log(datas);

  let techDatas = tech(datas.data.klines);
  /**{
        open: p.open,
        high: p.high,
        low: p.low,
        close: p.close,
        price: p.close,
        volume: p.volume,
        totalVolume: p.volume,
        date: util.dd(p.date),
      } */
  let [weekDatas, monthDatas, yearDatas] = kUtil.mw(
    techDatas,
    techDatas[techDatas.length - 1],
    null,
    null,
    0 / 0
  );
  let weekTechs = tech(weekDatas);
  console.log(weekTechs);
  console.log(techDatas);
  console.log("done");
})();
