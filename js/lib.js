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
// //   console.log(i);
// // }
// let count = 0;

// while (count < 5) {
//   // 거짓을 만들기 위한 조건
//   count = count + 1;
//   console.log(count);
// }

// count = 0;
// do {
//   count = count + 1;
//   console.log(count);
// } while (count < 5);

// // 아래는 사용자의 명단과 반가워요라는 메세지를 출력하는 기능이다./
// // function useMember () {
// //   let user_1 = "홍길동"
// //   let user_2 = "김길동"
// //   let user_3 = "박길동"
// //   let user_4 = "고길동"
// //   let user_5 = "정길동"
// //   console.log(user_1 + "님 반가워요.");
// //   console.log(user_2 + "님 반가워요.");
// //   console.log(user_3 + "님 반가워요.");
// //   console.log(user_4 + "님 반가워요.");
// //   console.log(user_5 + "님 반가워요.");
// //   }

// /**
//  * 숫자 더하기 기능
//  * @param {number} a
//  * @param {number} b
//  * @return {number} - 덧셈 결과
//  */
// function add(a, b) {
//   return a + b;
// }
// /**
//  * 숫자 빼기 기능
//  * @param {number} a
//  * @param {number} b
//  * @return {number} - 뺄셈 결과
//  *
//  */

// function minus(a, b) {
//   return a - b;
// }

// /**
//  * 숫자 곱하기 기능
//  * @param {number} a
//  * @param {number} b
//  * @return {number} - 곱하기 결과
//  *
//  */

// function multi(a, b) {
//   return a * b;
// }

// /**
//  * 숫자 나누기 기능
//  * @param {number} a
//  * @param {number} b
//  * @return {number} - 나눗셈 결과
//  *
//  * ------ 호출예 -----
//  * ```javascript
//  * let result = divide(5, 4)
//  * ```

//  */
// function divide(a, b) {
//   if (b !== "number") {
//     return alert("분모는 숫자여야 합니다.");
//   }
//   // 데이터 알아내고, 타입 비교하기
//   if (typeof a !== "number") {
//     return alert("분자는 숫자여야 합니다.");
//   }
//   return a / b;
// }

// // 덧셈 사용
// const resultAdd = add(5, 4);
// const resultMinus = minus(5, 4);
// const resultMulti = multi(5, 4);
// const resultDivide = divide(5, 4);

// //외부로 공개할 함수 생성
// /**
//  * 계산기 기능
//  * 계산기 기능은 +, -, *, / 기능이 있습니다.
//  * @param {string} symbol //+, -, *, / 기호 중 1개 입력
//  * @param {munber} a 숫자 입력
//  * @param {number} b 숫자 입력
//  * @return {number} 결과는 숫자
//  *
//  * 사용예) =========================================
//  * ```javascript
//  * const result = calculator("+", a, b);
//  * ```
//  *
//  */
// function calcurator(symbol, a, b) {
//   if (typeof symbol !== "string") {
//     return alert("기호를 입력하세요.");
//   }
//   let result = 0;
//   switch (symbol) {
//     case "+":
//       result = add(a, b);
//       break;
//     case "-":
//       result = minus(a, b);
//       break;
//     case "/":
//       result = divide(a, b);
//       break;
//     case "*":
//       result = multi(a, b);
//       break;
//     default:
//       result = 0;
//       return alert("올바른 기호를 입력해 주세요");
//   }
//   return result;
// }

// function showAge(age=0){
//   return age += 10;

// }
// showAge()

// function showTotal() {
//   console.log(arguments);
// }

// /**
//  *
//  */

// {
//   // 지역 변수
//   const appName = "JavaScript World";
//   console.log(appName);
// }

// function say() {
//   console.log(appName);
// }
// say();

// // 전역 자리
// function say(_word) {
//   console.log("기본 실행 함수 : " + _word);
// }
// // 개발자: 홍길동 지역 자리
// {
//   const say =  _name =>  console.log(_name + " Hello");
//   say("홍길동");
// }

// // 개발자 : 고길동 지역자리
// {
//   const say = _name => console.log(_name + " 반가워");

//   say("고길동");
// }

// say("테스터");

// console.log(this);
// let brand = "NAVER";

// function say() {
//   console.log(this);
//   this.brand = "KKO";
//   function hi() {
//     console.log(this);
//   }
//   hi();
// }
// say();

// let brand = "NAVER";
// console.log(this);
// const say = () => {
//   console.log(this);
//   // this.brand = "NAVER";
//   function hi() {
//     console.log(this);
//   }
//   hi();
// };
// say();

// var brand = "nike";
// window.brand = "nike";
// this.brand = "nike"; // 위랑 같은말

// function now() {
//   window.brand = "addias";
// }
// console.log("함수 실행전 : ", brand);
// console.log("함수 실행전 : ", this);
// console.log("함수 실행전 : ", window.brand);

// now();

// console.log("함수 실행전 : ", this);
// console.log("함수 실행전 : ", window.brand);
// console.log("함수 실행후 : ", brand);

// 대문자 즉 Pasal
function Coffee() {
  console.log(this);
}

Coffee();
new Coffee();
