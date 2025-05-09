//메시지를 출력하는 기능
// function 커피머신(_msg) {
//   console.log(_msg);
// }

// console.log("1. 안녕");

// 이름표 = 123;
// console.log(이름표);
// var 이름표;

// let 홍길동;
// 홍길동 = 333;
// console.log(홍길동);

// const 임꺽정 = 444;
// console.log(임꺽정);

//for in 구문예제
// const singer = {
//   id: "123",
//   name: "아이유",
//   age: 30,
//   city: "서울",
// };

// const bts = {
//   id: "123",
//   name: "bts",
//   age: [30, 20, 33],
//   city: "서울",
// };

// const singer = [
//   { id: 542, name: "사과", price: 10000, stock: 10 },
//   { id: 5557, name: "딸기", price: 200, stock: 0 },
//   { id: 2147, name: "키위", price: 5000, stock: 5000 },
// ];

//개발자가 직접 알아내는 경우
// console.log(singer.id);
// console.log(singer.name);
// console.log(singer.age);

// 반복문 활용
// for (let key in singer) {
//   console.log(key);
//   console.log(singer["id"]);
//   //console.log(singer["id"]);
// }

// for (let kk in )

// for (let key in bts) {
//   console.log(key);
//   // console.log(bts["age"]);
//   console.log(bts.age[0]);
//   //console.log(singer["id"]);
// }

// for (let key in bts) {
//   console.log(key);
//   console.log(bts[key]);
//   console.log(`${key} : ${bts[key]} age : ${bts["age"][1]}`); // 이거 저장 2차원배열로 되어있음
// }

// const good = {
//   productNum: 5502,
//   targetProductService: "interTourR",
//   targetProductId: "7",
//   targetProductSubId: null,
//   targetProductName: "[실시간 항공권] 인천 ↔ 나트랑",
//   targetProductSubName: null,
//   targetProductDetail: "",
//   targetProductImageUrl:
//     "https://common-live-vod.interparkcdn.net/data/image/20250106/14/96/20250106073804.jpg",
//   targetProductOriginPrice: 221400,
//   targetProductDiscountPrice: 0,
//   targetProductPrice: 211400,
//   targetProductLinkUrl:
//     "https://travel.interpark.com/air/search/a:ICN-a:CXR-20250616/a:CXR-a:ICN-20250619?cabin=ECONOMY&infant=0&child=0&adult=1&byAirline=RS",
//   targetDisplayStartTime: null,
//   targetDisplayEndTime: null,
//   displayOrder: 7,
//   scheduleNum: 2010,
//   status: 1,
//   serviceName: "투어-해외여행",
// };

// for (let key in good) {
//   console.log(key);
// }
// console.log(good.targetProductLinkUrl);

// const citiesArr = ["대구", "서울", "부산"];
// for (let city of citiesArr) {
//   console.log(city);
// }

// const words = "안녕하세요 반가워요";
// for (let i of words) {
//   console.log(i);
// }
let count = 0;

while (count < 5) {
  // 거짓을 만들기 위한 조건
  count = count + 1;
  console.log(count);
}

count = 0;
do {
  console.log(count);
  count = count + 1;
} while (count < 5);
