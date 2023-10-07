import lyRequest from "..";


export function getHomeGoodPriceData() {
  return lyRequest.get({
    url: "/home/goodprice"
  })
}