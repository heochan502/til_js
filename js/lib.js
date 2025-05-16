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
// function Coffee() {
//   console.log(this);
// }

// Coffee();
// new Coffee();

// function 배너만들기(_data) {
//   this.id = _data.id;
//   this.title = _data.title;
// }

// 배너만들기(1번);
// new 배너만들기(1번);

// 홍길동 작업자
// function 여행만들기(_data) {
//   this.id = _data.id;
//   this.title = _data.title;
// }

// 김길동
// function 베너만들기(_data) {
//   this.id = _data.id;
//   this.title = _data.title;
// }

// const aaa = new여행만들기 { // new 를 쓰는이유
//   {
//     di :5,
//     title : "대구여행"
//   }
// }

// const aaa = {
//     id  = 5 ;
//     title = "대구여행"
// }

// 배너만들기 {
//   {
//     id: 100,
//     title: "할인가격"
//   }

// }

// window.id=100;
// window.title="할인가격"

// const Person = {
//   name: "아이유",
//   say: function () {
//     console.log(this.name);
//   },
// };
// Person.say();

// const say = () => {
//   console.log(this); //현재의 상위 범위를 가르킨다
//   // window 출력됨
// };
// say();

// const Person = {
//   name: "아이유",
//   say: function () {
//     console.log(this); // Person 객체
//     console.log(this.name); // 아이유
//   },
//   sayArray: () => {
//     console.log(this); //window
//     console.log(this.name); // window.name
//   },
// };

// person.say();
// person.sayArray();

// const Person = {
//   name: "아이유",
//   say: function () {
//     console.log(this); // 객체가 호출
//     console.log(this.name); // 객체.name 호출
//     setTimeout(function () {
//       console.log(this); // window 호출
//       console.log(this.name); // window.name. 호출
//     }, 3000);
//   },
//   sayArray: function () {
//     console.log(this); // 객체가 호출
//     console.log(this.name); // 객체.name. 찾는다.
//     setTimeout(() => {
//       // 나위에 누가있냐 this 를 찾아서 가는 거
//       console.log(this); // 화살표는 나보다 위에 영역
//       console.log(this.name); // 위에 영역.name
//     }, 3000);
//   },
// };
// Person.say();

// function Person(_name) {
//   this.name = _name;
//   this.country = "한국"

//   console.log(this);
//   console.log(this.name);
// }

// Person.prototype.country = "미국";

// Person.prototype.say = function () {
//   console.log(this.name + "안녕");
// };

// const a = new Person("복진승");
// a.say();
// const b = new Person("강슬기");
// b.say();
// const c = new Person("황수빈");
// c.say();
// const d = new Person("정화섭");
// d.say();

// class Person {
//   // 클래스에서 매소드 함수 만드는 법
//   메소드명 (){}
//   // 객체를 생성하는 함수 : 변경 불가
//   // 디폴트 객체 생성자 함수// 안적으면 그냥 만들어준다 적은이유는 매개변수로 만들어줄려고
//   constructor(_name, _age) { // 초기값 설정
//     //  new로 할당만해도 자동 실행되는것
//     // console.log("new 하면 자동 실행");
//     // console.log(_name);
//     // property
//     this.name = _name;
//     this.name = _age;
//   }
//   // say 라는 메소드
//   say(){
//     console.log(this.name);
//   }
// }

// const a = new Person("둘리",500000);
// console.log(a);

// //동물
// class Animal {
//   constructor(eye, nose) {
//     // new하고 실행해야 이게 자동실행됨
//     this.eye = eye;
//     this.nose = nose;
//   }
//   speak() {
//     console.log("소리를 내요");
//   }
// }
// const a = new Animal(2, 1); // 이걸 안하고 아래에서 super() 하면 가능
// //console.log(a.eye);
// a.speak();

// //강아지

// class Dog extends Animal {
//   constructor() {
//     //new Animal(); // 원래는 이렇게 써야하는데 아래의 내용로 대체 가능
//     // new Animal() <- 이걸 실행하는 내용이 아래의 super
//     super(4, 5); // 부모 클래스가 한번은 작동을 해야 부모의 정보를 불러 올 수 있어서 사용 구문
//     this.name = "개새끼";
//   }
//   speak() {
//     console.log("멍멍");
//   }
// }
// const b = new Dog();
// console.log(b.name);
// console.log(b.eye);
// console.log(b.speak);
// console.log(b);

// console.log(a.eye);
// //새
// class Bird extends Animal {
//   constructor() {
//     super(2, 1);
//     this.name = "이쁜새";
//     this.city = "대구";
//   }
//   speak() {
//     console.log("짹쨱");
//   }
// }
// const c = new Bird(10, 14);
// console.log(c.eye);
// console.log(c.nose);

// c.speak();
// console.log(c);

// class Animal {
//   // 안적으면 public (기본값)
//   eye;
//   // #을 적으면 private
//   #nose;

//   constructor(eye, nose) {
//     this.eye = eye;
//     this.#nose = nose;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(2, 5);
//   }
// }

// const a = new Dog();
// console.log(a);
// console.log(a.eye);
// console.log(a.#nose); // private 오류

// class MathCalc {
//   constructor() {}
//   static add(a, b) {}
//   static minus(a, b) {}
// }
// MathCalc.add(3, 4);
// MathCalc.minus(3, 4);

// const a = new MathCalc();
// a.add(3, 4); // 생성된 객체로 접근불가

// Math.PI;
// Math.round(); //반올림
// Math.ceil(); //오림

// const say = function () {};
// const cry = () => {};
// function smile(){}

// //매개변수로 전달된 함수 실행
// function run(a){
//   a();
// }

// run(say);
// run(cry);
// run(smile); // 변수아니라서 안됨
// run(function (){}); // 이걸 추천함

// const bt  = document.querySelector(".bt");
// bt.addEventListener("click", function(){});

// const originArr = ["홍길동", "고길동", "김수한무"];
// const copyArr = originArr.map(function (item, index, arr) {
//   // console.log(`item : ${item}, index: ${index}`);
//   const tag = `<div class="user-info">${item}</div>`;

//   // 리턴해야 배열이 담깁니다.
//   return tag;
// });
// console.log(copyArr);
// console.log(`원본 originArr : ${originArr}`);
// console.log(`복제본 copyArr : ${copyArr}`);

// const copyArrowArr = originArr.map((item, index) => {
//   return `<a href="${index + 1}">${item + index}</a>`;
// });
// console.log(`복제본 copyArrowArr : ${copyArrowArr}`);

// const numbers = [2, 3, 4, 1];
// const sum = numbers.reduce(function (acc, num) {
//   return acc + num;
// }, 0);
// console.log(sum);

// const numArr1 = [1, 2, 3, 4];
// // 문법이 좀 다릅니다.
// // 보통은 ===>  (item, index, arr)
// // const total = numArr1.reduce(함수, 초기값)
// const total = numArr1.reduce((acc, cur) => {
//   console.log("acc : ", acc);
//   console.log("cur : ", cur);
//   return acc + cur;
// }, 0);

// 데이터 서버를 자료를 호출함 .

//1. xht 객체 한개 만듦.
const xhr = new XMLHttpRequest();

//2. 주소를 연결함
// 백엔드 호출시 메소드 5가지
// GET : 자료를 주세요.
// POST : 자료를 추가합니다.
// DELETE : 자료를 삭제해주세요.
// PUT : 자료 전체를 수정해 주세요.
// PATCH : 자료내용에서 일부분만 수정해 주세요.

xhr.open("GET", "https://jsonplaceholder.typicode.com/");

// 3. 웹브라우저로 요청을 합니다.
xhr.send();

// 4. 요청이후 응답이 오기를 기다린다.
xhr.onload = function () {
  console.log("요청이 되어졌을 떄 백엔드 회신정보 : ", chr);
  if (xhr.status === 200) {
    console.log("정상적인 Response 됨");
  } else if (xhr.status === 404) {
    console.log("주소가 잘못 되었습니다.");
  } else if (xhr.status === 505) {
    console.log("서버에 오류입니다. 잠시 후 시도해 주세요. ");
  }
};
