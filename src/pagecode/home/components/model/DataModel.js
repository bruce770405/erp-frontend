export const profitModel = [
  {
    year: "2020/01",
    value: 3
  },
  {
    year: "2020/02",
    value: 4
  },
  {
    year: "2020/03",
    value: 3.5
  },
  {
    year: "2020/04",
    value: 5
  },
  {
    year: "2020/05",
    value: 4.9
  },
  {
    year: "2020/06",
    value: 6
  },
  {
    year: "2020/07",
    value: 7
  },
  {
    year: "2020/08",
    value: 9
  },
  {
    year: "2020/09",
    value: 13
  },
  {
    year: "2020/10",
    value: 6
  },
  {
    year: "2020/11",
    value: 8
  },
  {
    year: "2020/12",
    value: 10
  }
];
export const cols = {
  value: {
    min: 0
  },
  year: {
    range: [0, 1]
  }
};


export const customerModel = {
  chartData : [
      { genre: '10~20歲', sold: 275, income: 2300 },
      { genre: '20~30歲', sold: 115, income: 667 },
      { genre: '30~40歲', sold: 120, income: 982 },
      { genre: '40~60歲', sold: 350, income: 5271 },
   ],
  // 定義度量
  cols : {
      sold: { alias: '光顧數' }, // 資料
      genre: { alias: '年齡' }
  },
  title : {
      autoRotate: true, // 是否需要自動旋轉，莫認為 true
      textStyle: {
        fontSize: '12',
        textAlign: 'center',
        fill: '#999',
        fontWeight: 'bold',
        rotate: 30
      }, // 座標軸，資料屬性設定
      position:'center', // 標題位置，**新增**
  }
}