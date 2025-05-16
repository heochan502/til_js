# JavaScript 기초

- 반드시 스스로 개념을 정리 하셔야 합니다.
- 타인에게 특히, 초등학생에게 설명할 정도로 쉽게 개념을 정리하시면 좋습니다.

## 1. 기초 상식

- HTML5 : 웹브라우저에 데이터를 보여주는 형시을 지정한 문법구조
- CSS3 : 데이터를 잘보여주기 위해서 꾸며주는 용도의 문법
- JS

```
1. CSS 제어 : 레이아웃 변경 하도록 지시
2. html 제어 : 데이터의 결과를 CRUD 하도록 지시
3. Sever, DB, 데스크탑 Application 을 제어 : Node.js 로 가능함.

```

## 2. JS의 종류는 2가지

### 2.1. 웹브라우저용 JS (Web API)

- Web API는 웹브라우저에 미리 기능이 만들어져 잇는 JS기능
- 주로 직접 코딩하는 것이 아니고 미리 만들어진 기능을 사용하는 것을 하습하면됨.

### 2.2. 데이터 관리 JS (ES6)

- 예전의 JS 는 웹브라우저 마다 모두 달랐다.
- 이에 대한 불편함을 해소하기 위해서 JS의 문법을 통일하였다.
- 기준이 ECMAScript 라고 하며 ES6가 가장 기준이 된다.

## 3. 실습

### 3.1. 웹브라우저에서 JS 실행하기

-`F12` 실행 > `Console 탭`을 선택 : console 탭은 js의 `결과, 오류`를 보는 곳

- 1 줄 이상 작성하는 경우는 `shift + Enter` 키를 입력해야 함

```js
console.log("안녕");
console.log("힘차고 굳센 금욜");
```

```js
console.clear();
```

```js
alert("안녕");
```

### 3.2. HTML에서 JS 실행하기

- index.html 파일을 생성합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
  </head>
  <body></body>
</html>
```

## 4. `JS(script) 작성 위치` 고민하기

- `<scrip></scrip>` 태그를 지원합니다.

```html
<script>
  console.log("3. html 끝 입니다");
</script>
```

### 4.1. 3번자리 즉 html 의 끝이 좋다.

- 일반적으로 css와 html을 제어하는 것이 js의 목적이다.
- `웹브라우저가 css와 html을 모두 일고 난 후의 자리`

### 4.2. 1번자리 즉 head 자리는 `기능`의 정의

- 내가 즉, 개발자가 만든 `기능들`을 코딩하기 좋은 자리
- 다른 개발자가 만든 많은 `기능들`을 불러와서 사용하기 좋은 사리

## 5. js도 외부에 파일로 만들어서 관리하자.

- js 폴더 생성
- js 폴더에 `lib.js` 파일 생성
- `js/lib.js` 내용

```js
//메시지를 출력하는 기능
function 커피머신(_msg) {
  console.log(_msg);
}

console.log("1. 안녕");
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <!-- 헤드에 선언을 하면 난 이것을 쓸것이다라는 기능들이 다있다 -->
    <script src="js/lib.js"></script>
  </head>

  <body>
    <script>
      console.log("2. body 입니다");
    </script>
  </body>
</html>

<script>
  console.log("3. html 끝 입니다");
  커피머신("아이스아메리카노");
</script>
```

# JavaScript 문법

## 1. 변수(Variables)

- 웹브라우저에 `값 보관시 사용할 공간`

### 1.1. 변수가 왜 필요하지?

#### 1.1.1. 단계 1 (필요로 한 기능에 대해서 서술 - 피그마, UI 다이어그램)

- 나는 `사용자 정보`를 입력 받아서 `DB에 보관`하고 싶다.
- 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶다.

#### 1.1.2. 단계 2 (어떤 정보를 보관할지 결정한다. - 요구사항 명세서)

```
이름, 주민번호, 전화번호, 주소(상세주소, 우편번호), 이메일, 아이디, 비밀번호, 동의체크
```

#### 1.1.3. 단계 3 (각각의 정보를 보관할 공간을 마련)

```js
이름 : 글자 20자 제한
주민번호 : 글자 13자 제한
전화번호 : 글자 11자 제한
우편번호 : 글자 5자 제한
상세주소 : 글자 50자 제한
이메일 :  글자 20자 제한
아이디 : 글자 16자 제한
비밀번호 : 글자 16자 제한
동의체크 : 참/거짓 숫자 1자 제한

```

### 1.2. 각 항목에 대해서 웹브라우저에서 임시로 보관하는 작업

#### 1.2.1. 단계 1

- 웹브라우저 메모리 `빈 공간`요청

```js
var
let
const
```

##### 1.2.3.`var` 라고 작성을 하면 `변수`로 인정

- `hoisting`으로 오류가 발생할 소지가 높다.
- 미리 만들지 않고 사용해도 되는 문제
- 이건 옛날 JS 버전에서만 씁니다.

```
무조건 공간에다가 undefined 라는 값을 넣어버린다.
호이스팅의 대상이 된다.
var는게 가상의 메모리공간에 미리 말한 변수에 나중에 제대로된 공간할당을 한다
그리고 위에 상황일떄 메모리를 다른데서 땡겨서만들어서 터지진 않는데 이게 문제를 일으킬 요소가 너무많음
코드 분석이나 해석에 어려움을 줄거같음
미리 대충 다 만들어서 쓰다가 마지막에 나 변수있음! 하면서 뒤에 선언하는느낌
```

#### 1.2.3. `let` 라고 작성 하면 `변수`로 인정

- `hoisting`의 문제를 사전에 차단한다.
- `let`으로 작성시 미리 사용하면 오류로 알려준다.
- 수시로 내용이 바뀐다.

#### 1.2.4. `const` 라고 작성 하면 `상수`로 인정

- `hoisting`의 문제를 사전에 차단한다.
- `const`으로 작성시 미리 사용하면 오류로 알려준다.
- 선언시에 값을 넣어야한다 아니면 오류뜸.
- 절대로 내용이 변하지 않는다.

#### 1.2.5. 실제로 var, let, const 중에 선택합니다.

- 값이 사용자 마다 변할 것이다. 그래서 `let` 선택 했어요.

```js
let 이름 : 글자 20자 제한
let 주민번호 : 글자 13자 제한
let 전화번호 : 글자 11자 제한
let 우편번호 : 글자 5자 제한
let 상세주소 : 글자 50자 제한
let 이메일 :  글자 20자 제한
let 아이디 : 글자 16자 제한
let 비밀번호 : 글자 16자 제한
let 동의체크 : 참/거짓 숫자 1자 제한

```

### 1.3. 메모리 공간에 이름 짓는 법(명명법)

- 정말 중요합니다. 이름을 잘못지으면 다른 개발자에게 혼란을 줌.
- 개발자들은 코딩 컨벤션이 있습니다.
- 변수의 철자는 `명사+명사` `영어`로 하셔야 합니다.
- 숫자 및 공백 및 특수기호는 절대 안된다.
- 허용되는 특수기호는 오로지 `_`, `$` 는 허용 됩니다.

#### 1.3.1. Camel Case

- 반드시 소문자로 시작하고 새로운 명사는 대문자로 시작한다.
- 많은 프로그래머들이 병수라고 생각합니다.

#### 1.3.2. Snake case

- 변수를 모두 소문자로 작성하고 `_` 로 연결한 이름

#### 1.3.3. Kebala Case

- 이름을 소문자로 작성하고 `-`로 연결한 것.
- 파일 또는 css 파일에서는 사용합니다.
- 예) Next.js 의 파일명은 Kebab이 표준입니다.

#### 1.3.4. Pascal Case

- 이름을 대문자로 작성하고 새로운 단어는 대문자로 시작
- 혹시 객체 변수 아닌가?
- 혹시 클래스 정의 아닌가?

#### 1.3.5 대문자

- 상수명으로 판단함.

#### 1.3.6. 적용하기

```js
let userName : 글자 20자 제한
let userNum : 글자 13자 제한
let userPhone : 글자 11자 제한
let userPost : 글자 5자 제한
let userAddress : 글자 50자 제한
let userEmail :  글자 20자 제한
let userId : 글자 16자 제한
let userPassword : 글자 16자 제한
let userAgree : 참/거짓 숫자 1자 제한

```

### 1.4. 데이터 종류 결정 (원시데이터 : Primitive Data Type)

- number : 숫자
- string : 글자 (문자, 문자열로 구분)
- boolean : true / false (나중에 falshy 한 것 알아야함.)
- undefined : 값이없다.(변수 초기값으로 자동 세팅)
- null : 개발자가 값이 없다고 지정.( 값이 비었다로 세팅하라.)
- symbol : 지구가 망해도 절대로 겹치지 않는 변수이다.

#### 1.4.1. 적용하기

```js
let userName = ""; // 20자 제한
let userNum = ""; // 13자 제한
let userPhone = ""; // 11자 제한
let userPost = ""; // 5자 제한
let userAddress = ""; // 50자 제한
let userEmail = ""; // 20자 제한
let userId = ""; // 16자 제한
let userPassword = ""; // 16자 제한
let userAgree = false; // 숫자 1자 제한
```

#### var, let, const 정확히 제약사항 파악하기

### 1.5. `1순위 const` 입니다.

- 웹브라우저에 저장할 내용, 즉 변수가 있다면 아래를 고민하자.
- const 는 변하지 않을 것이라다라는 작성법.
- 필요하면 즉, 값이 코딩하다 보니 바뀌어야 하는 경우에 let으로 변경한다.
- const의 특징
- 만들기 전에 사용할 수 없다.(호이스팅 문제 해결됨!)

```js
console.log(userName);
const userNamer = "홍길동";
```

- 동일한 이름으로변수를 또 생성할 수 없다. (변수생성 중복 방지)

```js
const userAge = 10;
const userAge = 40; //Error
```

- 값을 변경 할 수없다.

```js
const userCity = "대구";
userCity = "서울"; //Error
```

#### 1.5.2. `2순위는 let`입니다.

- 만들기 전에 사용할 수 없다. (호이스팅 문제 해결 : const와 동일)

```js
console.Log(userName);
let userName = "홍길동";
```

- 동일한 이름으로 중복 생성할 수 없다. (중복 에러 생성 : const와 동일)

```js
let userAge = 10;
let userAge = 40; //Error
```

- 값을 나중에 변경할 수 있다. (const 와의 유일한 차이점)

```js
let userCity = "대구";
userCity = "서울"; // 괜찮다
```

#### 1.5.3. `var는 사용하지 않는다.`

- 호이스팅 통과되어 버림.(추후에 오류의 원인)
- 동일한 이름으로도 중복 생성가능. (추후의 오류의 원인)
- 값도 변경이 가능하다.
- 기존 코드에서 var를 사용한 케이스가 있으면 그냥 유지한다.

### 1.6. 참조형 데이터 종류(Reference Data Type)

- 만약 interpark 사이트의 Banner 영역의 데이터를 js에서 관리하려고한다.
- 배너는 링크주소, 이미지 주소, 고유한 ID가 있다.
- 하나의 배너는 변수 3개씩 가지고 있다.
- 총 5개의 배너가 있다.

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = "1";
// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = "2";
// 셋 번째 배너
const bannerUrl_3 = "https://~";
const bannerImg_3 = "https://~";
const bannerId_3 = "3";
// 넷 번째 배너
const bannerUrl_4 = "https://~";
const bannerImg_4 = "https://~";
const bannerId_4 = "4";
// 다섯 번째 배너
const bannerUrl_5 = "https://~";
const bannerImg_5 = "https://~";
const bannerId_5 = "5";
```

### 1.6. 참조형 데이터 종류(Reference Data Type)

- 만약 interpark 사이트의 Banner 영역의 데이터를 js 에서 관리하려고 한다.
- 배너는 `링크 주소, 이미지 주소, 고유한 ID` 가 있다.
- 하나의 배너는 변수 3개씩 가지고 있다.
- 총 5개의 배너가 있다.

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = "1";
// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = "2";
// 세 번째 배너
const bannerUrl_3 = "https://~";
const bannerImg_3 = "https://~";
const bannerId_3 = "3";
// 네 번째 배너
const bannerUrl_4 = "https://~";
const bannerImg_4 = "https://~";
const bannerId_4 = "4";
// 닷 번째 배너
const bannerUrl_5 = "https://~";
const bannerImg_5 = "https://~";
const bannerId_5 = "5";
```

#### 1.6.1. 객체

- 관련 있는 기본형 데이터들을 `묶어서 하나로` 만들기

```js
  const 객체명 = {}; // 1 단계

  // 2단계
  const 객체명 = {
    이름 : 값, // , 로 연결
    이름 : 값,
    이름 : 값
  }

  const 객체명 = {
    key Name : Key Value, // , 로 연결
    이름 : 값,
    이름 : 값
  }


  const 객체명 = {
    Property 속성명 : Value, // , 로 연결
    이름 : 값,
    이름 : 값
  }
```

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = "1";

const banner_1 = {
  url: "https://",
  img: "https://",
  id: "1",
};

// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = "2";

const banner_2 = {
  url: "https://~",
  img: "https://~",
  id: "2",
};
```

- 객체 변수 정보에 담겨진 속성 즉, 키명을 통한 값 사용(호출)

```js
객체명.키명;
banner_1.url;

["객체명"].키명;
["banner_1"].url;
```

#### 1.6.2. 배열

- 하나의 이름으로 여러개의 데이터를 묶어서 관리

```js
const userArray = [1, 2, 3, "안녕", false, null, undefined];
const bannerId = ["1", "2", "3"];
const banner = [
  { url: "http~", img: "http~", id: "1" },
  { url: "http~", img: "http~", id: "2" },
  { url: "http~", img: "http~", id: "3" },
];
```

- 배열의 요소의 값 사용(호출)

```js
배열명[인덱스번호];
banner[0];
banner[1];
```

### 1.7. 변수 종합 예제

- 인터파크 티켓 랭킹 작업

```js
//섹션의 타이틀
const sectionTitle = "티켓 랭킹";

//섹션의 설명글
const selectionDesc = "~~~";

//섹션의 카테고리
const sectionCategoryArray = ["뮤지컬", "콘서트", "스포츠"];

console.Log(sectionCategory);
console.Log(sectionCategory[0]);
console.Log(sectionCategory[1]);
console.Log(sectionCategory[2]);
console.Log(sectionCategory[3]); // undefined

// 타겟의 타이틀 정보
const ticketTitleArr = [
  "패텀 10주년 기념 공연",
  "뮤지컬 <메디슨 카운티의 다리>",
  "뮤지컬 <라이카>",
];
// 티켓의 이미지 경로
const ticketImgArr = ["https://a.jpg", "https://b.jpg", "https://c.jpg"];

// 티켓의 링크 경로
const ticketUrlArr = ["https://a.html", "https://b.html", "https://c.html"];

//티켓의 순위
const ticketRankArr = [1, 2, 3];

//티켓의 공연장소
const ticketplaceArr = ["대구", "서울", "제주"];

//티멧의 공연일시
const ticketDayArr = ["05/07", "05/09", "05/04"];

// 위의 사항을 효율적으로 관리하기 위한 작업
const ticket_1 = {
  title: "패텀 10주년 기념 공연",
  img: "https://a.jpg",
  url: "https://a.html",
  rank: 1,
  place: "대구",
  day: "05/07",
};
console.Log(ticket_1);
console.Log(ticket_1.title);
console.Log(ticket_1.img);
console.Log(ticket_1.url);
console.Log(ticket_1.rank);
console.Log(ticket_1.place);
console.Log(ticket_1.day);

const ticket_2 = {
  title: "뮤지컬 <메디슨 카운티의 다리>",
  img: "https://b.jpg",
  url: "https://b.html",
  rank: 2,
  place: "서울",
  day: "05/09",
};
console.Log(ticket_2);
console.Log(ticket_2["title"]);
console.Log(ticket_2["img"]);
console.Log(ticket_2["url"]);
console.Log(ticket_2["rank"]);
console.Log(ticket_2["palce"]);
console.Log(ticket_2["day"]);

const ticket_3 = {
  title: "뮤지컬 <라이카>",
  img: "https://c.jpg",
  url: "https://c.html",
  rank: 3,
  place: "제주",
  day: "05/04",
};
const ticketInfoArr = [ticket_1, ticket_2, ticket_3];
//보통 아래의 형태로 데이터가 들어오는 것을
// JavaScript Object Notation 즉 SJON이라고 한다.
const ticketInfoJsonArr = [
  {
    title: "패텀 10주년 기념 공연",
    img: "https://a.jpg",
    url: "https://a.html",
    rank: 1,
    place: "대구",
    day: "05/07",
  },
  {
    title: "뮤지컬 <메디슨 카운티의 다리>",
    img: "https://b.jpg",
    url: "https://b.html",
    rank: 2,
    place: "서울",
    day: "05/09",
  },
  {
    title: "뮤지컬 <라이카>",
    img: "https://c.jpg",
    url: "https://c.html",
    rank: 3,
    place: "제주",
    day: "05/04",
  },
];

ticketInfoJsonArr[0].title;
ticketInfoJsonArr[1].title;
ticketInfoJsonArr[2].title;
```

## 2. 연산자(Operator)

- 연산을 해서 결과값을 만드는 `기호`
- 연산자에 의한 새로운 `결과값이 나오는것을 연산식`

### 2.1. 사칙연산(`+ - * /`)

- `+ 연산자`

```js
const numA = 0;
const numB = 1;
const result = numA + numB; //1
```

```js
const strA = "안녕";
const strB = :"hello";
const result = strA + strB; //안녕hello

```

```js
const strA = "홍길동";
const result = "저기~" + strA + "님 반가워요!"; //저기~홍길동님 반가워요!
```

```js
const strA = "홍길동";
const numAge = 20;
//저기~홍길동님 나이가 20이군요!
// 숫자 + 글자는 글자로 인정함
const result = "저기~" + strA + "님 나이가" + numAge + "이군요!";
// 아래 처럼 탬플릿 문법을 추천합니다. 흔히 백틱이라고 합니다.
const resultTemplate = `저기~ ${strA}님은 나이가 ${numAge}이군요!`;
```

```js
<div class="section">
  <div class="box_wrap">
    <a href="https://~"> 뮤지컬 팬텀</a>
    <img src="https://~" alt="뮤지컬 팬텀 배너 이미지" />
  </div>
</div>
```

```js
 const link = "https://"
 const img = "https://~"
 const title = "h뮤지컬 팬텀"
 const alt = "뮤지컬 팬텀 배너 이미지"
 const result = '
     <div class = "section">
     <div class = "box_wrap">
       <a href = "https://~"> 뮤지컬 팬텀</a>
        <img src ="https://~" alt = "뮤지컬 팬텀 배너 이미지" />
     </div>
     </div>
     ';

const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너이미지";
let tag = '<div class="section">';
tag = tag + '  <div class="box_wrap">';
tag = tag + '    <a href="' + link + '"https:~">' + title + '</a>';

```

```js
const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너이미지";
const tag = ` 
<div class = "section">
 <div class = "box_wrap">
   <a href = "${link}"> ${title}</a>
       <img src ="${img}" alt = "${alt}}$" />
 </div>
</div> 
`;
```

```js
const numA = 5;
const numB = 8;
const redultA = `${numA} + ${numB} = ${numA + numB}`;
const redultB = `${numA} - ${numB} = ${numA - numB}`;
const redultC = `${numA} * ${numB} = ${numA * numB}`;
const redultD = `${numA} / ${numB} = ${numA / numB}`;
```

```js
const a = 1; //number
const b = "1"; //string
// 1단계 number ===> string 으로 물어보지 않고 변환 (암묵적 데이터 타입변환)
// string + string ====> string
const result = a + b; // number +  string => string
```

- `- 연산자`

```js
const numA = 100;
const numB = 10;
const result = numA - numB; // 90
```

```js
const numA = "100"; //string
const numB = 10; //number
// string을 number로 암묵적 변환 실패
// number - number
const result = numA - numB; // NaN(Not a Number)
```

- `* 연산자`

```js
const numA = 4;
const numB = 2;
const resultMulti = numA * numB; // 8
const resultDevide = numA / numB; // 2
```

### 2.2. 나머지 연산(`%`)

- 총 게시글 52개
- 한 페이지당 5개 목록
- 몇페이지가 필요한가?
- 마지막 페이지에서 보여주어야 하는 게시글 수?

```js
const total = 52;
const count = 5;
const totalPage = total / count; // 소숫점 나옴
const totalPageNumber = Math.ceil(totalPage); // 올림
const LastCount = total % count; //나머지 나옴

console.log(totalPage);
console.log(totalPageNumber);
console.log(LastCount);
```

### 2.3. 복합연산사 (연산 타이핑 수를 줄인다.)

```js
const numA = 5;
const numB = 30;
const result = numA + numB;
const result 2

```

```js
const numA = 5;
let result = numA + 3; // 5+3 = 8
// 코딩에 의한 가독성이 떨어집니다.
// 그런데 PG들은 많이 사용하는 방식입니다.
// result = result +10; 줄여서 작성함.
result += 10; // 18
// result = result - 5;
result -= 5; // 13
// result = result * 4;
result *= 4; // 52
// result = result / 2;
result /= 2; // 26
//result = result % 2; 나머지, 모듈러 연산자
result %= 2; // 0
```

### 2.4. 증감연산자 (++ --)

- 개발자 는 타이핑 수를 줄일려고 노력합니다.

```js
let num = 5;
num = num + 1;
num += 1;
num++;
++num;
```

```js
let num = 5;
num = num - 1;
num -= 1;
num--;
--num;
```

```js
let num = 20;
// 후에 배치된 후치연산 이라서
let numA = num--; //20 numA에는 20입니다. 그리고 연산
num; //19
```

```js
let num = 20;
// 후에 배치된 전치연산 이라서
let numA = --num; //numA에는 19입니다. 그리고 연산
num; //19
```

### 2.5. 논리연산자

- `무조건 이해`하셔야 합니다.
- `falsy` 한 값의 종류 (js 에서 false 라고 판단하는 값)

```js
"";
0;
undefined;
null;
NaN;
false;
```

#### 2.5.1. OR 연산자(또는)

- 최종 결과가 true 인지 false 인지 결과를 변수에 저장
- OR 연산자 : 2개중 1개라도 true 이면 true, 나머지 false

```js
let result = true || true;
result = false || false;
result = false || true;
result = "" || true;
let userPass;
result = userPass || "비밀번호 넣으세요.";

console.log(result);
```

#### 2.5.2. AND 연산자(그리고)

- 둘다 true 면 true, 아니면 false
- 변수에 결과값은 true, false가 담겨진다.

```js
let result = true && true;
result = false && true;
```

#### 2.5.3. NOT 연산자(반대)

```js
let result = !true;
```

#### 2.5.4. 실습예제

```js
let nickName = "";
let displayName = nickName || "Guest";
console.log(displayName);
```

```js
let title = null;
let result = title || "제목없음";
console.log(result);
```

```js
let totalMoney = 0;
let result = totalMoney || "장바구니가 비었습니다.";
console.log(result);
```

```js
let isLogin = true;
let result = isLogin && "환영합니다.";
console.log(result);
```

```js
let isAdmin = false;
let result = isAdmin && "관리자 메뉴 표시" && "환영합니다.";
console.log(result);
```

```js
let config = {};
config.theme = config.theme || "light";
console.log(config); // {theme: "light"} // 초기화 코드 뭐 설정값이 없으면 이거다
```

```js
let options = {
  lang: null,
  fontSize: 0,
};
// 아래 코드에서 or 연산하고 참이면 참인값을 반환 우선권은 뒤에 선언된 값이 우선권이있음
let lang = options.lang || "ko";
let fontSize = options.fonSize || 20;
```

### 2.6. 비교연산자

- 정말 중요합니다.

```js
// 데이터 값의 종류는 비교하지 않음
let resultA = "1" == 1; // true

// 데이터 값과 종류도 비교함.
let resultB = "1" === 1; //false
console.log(resultA);
console.log(resultB);

let resultC = 1 > 2;
let resultD = 1 < 2;
let resultE = 1 >= 2;
let resultF = 1 <= 2;
let resultG = 1 != 2;
let resultH = 1 !== 2;

console.log(resultC);
console.log(resultD);
console.log(resultE);
console.log(resultF);
console.log(resultG);
console.log(resultH);
```

### 2.7. 병합연산자

- 내가 FE라면 반드시 알아야함.
- 일반적으로 기본값 셋팅에서 활용
- falsy 가 아니라 `null, undefined` 일 때만 값을 비교할 경우
- 아래에서 기대한 코드는 `0` 값이 나오길 기대하고 코드 진행함.

```js
let userName = null;
let displayName = userName || "Guest";
console.log(displayName);
```

- `??` 연산자는 null과 undefined 만 비교한다.
- 나머지는 `||`과 같다.

```js
let userPoint = 0;
let displayPoint = userPoint ?? 500000;
console.log(displayPoint);
```

```js
let formInput = {
 name : "",
 email: null,
 phone : undefined,
};
const name = formInput.name ?? "이름없음";
const email = formInput.email ?? "이메일 없음";
const phone = formInput.phone ?? "전화 없음";

console.log(name);
console.log(email);
console.log(phone);



// 아래는 동일 문법
const resutl = nickName ?? "닉네임 없음" // html
document.innerHtml = `<p> ${result}`</p> // html

<p> {{user.nickName ?? "닉네임 없음"}} </p> // 뷰
<p> {user.nickName ?? "닉네임 없음"} </p> //리엑트
```

- `null은 개발자가 값`이 없다고 지정하는것, 값 지워라 청소해라
- `undefined는 프로그램상에서 값`이 지정안되어서 임의로 넣는 값, js가 기본으로 지정

### 2.8. 옵셔널체이닝(`?.`)

- FE 라면 알아야 합니다.
- 객체의 `속성 여부`에 따라 코드 진행.
- `{ 속성 : 값, }`

```js
const user = {
  // profile: {name: "홍길동"},
  profile: null,
};
/*
const user = {
  profile: null,
}; 객체안에 데이터 없으면 오류나면서 멈춤 웹브라우저 멈춤
*/
const age = user.profile?.age ?? "정보가 없어서 나이정보를 몰라용"; // null 예외가 발생한다 // '?'옵션으로 null이 있어도 문제없이 undefined 넣고 진행하게 // ?? 넣고 null이나 undefined 판별해서 맞으면 뒤에 내용 출력 개꿀
console.log(age);
```

### 2.9. 3항 연산자

- 연산자가 3개라서 3항 연산자라고 합니다.
- `결과 = 조건식 ? 참일때 결과 : 거짓 일떄 결과`
- 활용 빈도가 너무 높습니다.

```js
const userRole = "ADMIN"; //사용자등급
//const url = 조건 ? 참 : 거짓 ;
const url = userRole === "ADMIN " ? "admin.html" : "guest.html";
```

```js
const age = 10;
const result = age < 19 ? "동의서 필요 " : "성인 인증";
```

```js
const goodCount = 10;
const result = goodCount > 0 ? "재고가 있어요" : "재고가 없어용";
```

```js
const user = {
  isLogin: true,
  name: "아이유",
};
const result = user?.isLogin ? `${user.name}님 반가워용` : "로그인 해 주세용";
console.log(result);
```

```js
let num = 5;
let result = num % 2 === 0 ? "짝귀" : "홀수";
```

## 3. 조건문(Condition)

### 3.1. if문

- `참/거짓`을 판단하여 코드 분기 실행함.
- 모양 1.

```js
if(조건)
{
 조건이 참이면 실행;
}
```

- 모양 2.

```js
if(조건)
{
  조건이 참이면 실행;
}
else
{
  조건이 거짓이면 실행;
}
```

- 모양 3.

```js
if(조건1)
 {
  조건1이 참이면 실행;
 }
 else if(조건2)
 {
  조건2이 참이면 실행;
 }
 else if(조건3)
 {
   조건3이 참이면 실행;
 }
 else
 {
   조건이 거짓이면 실행;
  }
```

    - 예제) 로그인이 된 경우에 메시지 출력하기

```js
const isLogin = true;
if (isLogin === true) {
  consol.Log("로그인 하셨네요. 반갑습니다.");
  consol.Log("오늘도 좋은 하루되세요.");
}

if (isLogin) {
  consol.Log("로그인 하셨네요. 반갑습니다.");
  consol.Log("오늘도 좋은 하루되세요.");
}

//아래처럼 하시면 힘들어요. 코드 가독성 떨어져요.
if (isLogin) consol.Log("로그인 하셨네요. 반갑습니다.");
consol.Log("오늘도 좋은 하루되세요.");
```

- 예제) 로그인 된 경우의 메시지와 로그인 안된 경우의 메시지 출력하기.

```js
if (isLogin) {
  consol.Log("로그인 하셨네요. 반갑습니다.");
} else {
  consol.Log("로그인하셔야 합니다.");
}
```

- 예제) 나이에 따라서 다른 메시지 출력하기 (조건이 2개이상인 경우)

```js
const age = 19;
if (age >= 60) {
  console.log("어르신 이시네요.");
} else if (age >= 50) {
  console.log("50대 이시네요.");
} else if (age >= 40) {
  console.log("40대 이시네요.");
} else if (age >= 30) {
  console.log("30대 이시네요.");
} else if (age >= 20) {
  console.log("청년 이시네요.");
} else {
  console.log("미성년 이시네요.");
}
```

- 예) 사용자가 입력한 항목이 값이 `없을 경우` 메시지 모내기

```js
const name = "홍길동";
const pass = "1234";
const useInfoCheck = false; // 사용자 정보 활용 동의
const usdEmailCheck = false; // 이메일 수신동의

if (name.trim() === "" || !name) {
  // trim() <공백 다 제거
  alert("이름을 입력하세요.");
  console.log("ㅇ");
  return;
}

if (!name) {
  alert("이름을 입력하세요.");
  console.log("ㅇ");
  return;
}

if (!pass) {
  alert("비밀번호를 입력하세요.");
  return;
}
if (useInfoCheckuseInfoCheck === false) {
  // useInfoCheck === false //이렇게 해도된다
  alert("개인정보 동의를 체크하세요.");
  return;
}

if (!useInfoCheck) {
  // useInfoCheck === false //이렇게 해도된다
  alert("개인정보 동의를 체크하세요.");
  return;
}

if (usdEmailCheck === false) {
  // usdEmailCheck === false //이렇게 해도된다
  alert("이메일 수신 동의를 체크하세요.");
  return;
}

if (!usdEmailCheck) {
  // usdEmailCheck === false //이렇게 해도된다
  alert("이메일 수신 동의를 체크하세요.");

  return;
}

console.log("저의 서비스를 자유롭게 활용하세요.");
```

### 3.2. switch 문

- `여러 개의 값` 중 하나의 `값`이 같은지 판단 후 실행 (값을 비교)

```js
switch (값){
  case 비교값 1:
        실행코드
    break;
  case 비교값 2:
        실행코드
    break;
  case 비교값 3:
        실행코드
    break;
  case 비교값 4:
        실행코드
    break;
  default:
        실행코드
    break;
}
```

- 예) 엘리베이터 층 예제

```js
const Layer = 6; //값
switch (Layer) {
  case 1:
    console.log("1층에 내려 주세요");
    break;
  case 2:
    console.log("2층에 내려 주세요");
    break;
  case 3:
    console.log("3층에 내려 주세요");
    break;
  case 4:
    console.log("4층에 내려 주세요");
    break;
  case 5:
    console.log("5층에 내려 주세요");
    break;
  default:
    console.log("당신은 내릴 층이 없습니다.");
    break;
}
```

- if와 switch 종합예제

```js
const userRole = "ADMIN";
if (userRole === "MEMBER") {
  console.log("회원입니다.");
} else if (userRole === "ADMIN") {
  console.log("관리자");
} else {
  console.log("비회원입니다.");
}
```

```js
const userRole = "ADMIN";
switch (userRole) {
  case "MEMBER":
    console.log("회원입니다.");
    break;
  case "ADMIN":
    console.log("관리자입니다.");
    break;
  default:
    console.log("비회원입니다.");
    break;
}
```

## 4. 반복문(Loop)

- 동일한 실행을 반복하는 문법

### 4.1. for 구문

- 주어진 `횟수만큼` 반복 실행 (`개발자가 반복횟수를 아는 경우`)

```js
for (초기값은 단 한번만 실행; 조건식의 결과가 true/false; 증감식은 조건식을 false 로 만들기 위한것){
  할일 코드 작성
}
```

```js
const total = 10; // 반복횟수

for (let i = 0; i < total; i = i + 1) {
  console.log(`현재 i는 ${i}입니다.`);
}
```

- 예제) 총 합계 값 알아내기

```js
// 장바구니 담긴 제품 가격 모음.
const bucketsArr = [1000, 500, 700, 400];
const total = bucketsArr.length; // 반복 횟수 //bucketsArr.length 배열의 길이 알려줌

// 반복문 없다면
let totalPrice = bucketsArr[0] + bucketsArr[1] + bucketsArr[2] + bucketsArr[3];
// 반복문 있다면
let totalPricefor = 0;
for (let i; i < total; i++) {
  totalPricefor = totalPricefor + bucketsArr[i];
  // totalPricefor += bucketsArr[i];
}
```

- 예) 제품의 이름과 가격 및 재고를 html 태그로 출력하는 예제

```js

```

- 예) 백엔드에서 제품의 목록은 json 으로 주어진다.

```js
//백엔드에서 가져온 자료 json
const goodData = [
  { id: 542, name: "사과", price: 10000, stock: 10 },
  { id: 5557, name: "딸기", price: 200, stock: 0 },
  { id: 2147, name: "키위", price: 5000, stock: 5000 },
];

const total = goodData.length;
console.log(total);

for (let i = 0; i < total; i++) {
  // 제품 1개를 뽑아서 보관한다.
  const good = goodData[i];
  // html 만들기
  const tag = `<div id="${good.id}" class="good-box">
      <p>제품명: ${good.name}</p>
      <p>가격: ${good.price}</p>
      <p>재고: ${good.stock || "재고가 없어요"}</p>    
    </div>`;
  console.log(tag);
}
```

- 예) 구구단
- for 문에서 break는 반복문 빠져나오고 종료하기
- 가까운 fot 문에서 `break`는 반복문 빠져나오고 종료됨.

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  if (i === 6) {
    break;
  }
  console.log(i + "단"); //????

  for (let j = 1; j <= total; j++) {
    if (j === 6) {
      break;
    }
    console.log(`${i} * ${j} = ${i * j}`); //????
    //console.log(i + " * "+j +" = " + (i*j) );//????
  }
}
```

- 가까운 for문에서 `continue`는 반복문 실행 건너띄고계속 실행.

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  if (i % 3 === 3) {
    continue;
  }
  console.log(i + "단"); //????

  for (let j = 1; j <= total; j++) {
    if (j === 6) {
      break;
    }
    console.log(`${i} * ${j} = ${i * j}`); //????
    //console.log(i + " * "+j +" = " + (i*j) );//????
  }
}
```

### 4.2. fot in 구문

- for 문으로 모두 가능하다.
- for 를 `객체를 대상`으로 편리하게 사용하도록 지원하는 문법

```js
for (let key in bts) {
  console.log(key);
  // console.log(bts["age"]);
  console.log(bts.age[0]);
  //console.log(singer["id"]);
}

for (let key in bts) {
  console.log(key);
  console.log(bts[key]);
  console.log(`${key} : ${bts[key]} age : ${bts["age"][1]}`); // 이거 저장 2차원배열로 되어있음
}
```

### 4.3. for of 구문

- for 문으로 모두 가능하다.
- for 를 `배열, 문자열등을 대상`으로 편리하게 사용하도록 지원하는 문법
- iterator 즉, `순서가 있는 데이터형`에서 사용

```js
const citiesArr = ["대구", "서울", "부산"]; // 배열로 통짜로 넣은거
for (let city of citiesArr) {
  console.log(city);
}
const words = "안녕하세요 반가워요"; // 문자열로 넣어서 문자 하나하나 분해당함
for (let i of words) {
  console.log(i);
}
```

### 4.4. while 구문

- `조건이 참` 인 동안 무한히 반복함.
- 반복에 횟수를 모르는 경우

```js
while(조건){
  할일;
  반드시 거짓으로 만들어야 합니다.
}
```

### 4.5. do while 구문

- while 과 다르게 일단 실행하고 조건 검사

```js
do {} while (조건);

let count = 0;
do {
  count = count + 1;
  console.log(count);
} while (count < 5);
```

## 5. 함수(Function)

- 독립된 역할별 기능을 `{}` 묶고 `function 함수명()`를 주어서 관리
- 여러번 재활용(`호출, call`) 한다. : `함수명()`
- 문서 즉 설명서(JSDoc)가 잘 만들어져야 함.
- 기능 예외처리를 잘 해야 한다.

### 5.1. 함수가 왜 필요하지?

- 반복되는 1줄 이상의 코드가 있다면 함수라는 것을 만들 생각해보자.
- 코드에 대한 가독성이 필요하면 함수라는 것을 만들 생각해 보자.
- 한번에 코드를 수정하여 다양한 곳에 동시에 반영되는 것을 원하면 함수 라는 것을 만들 생각 보자.
- 코드의 안정성을 생각한다면 함수라는 것을 만들 생각해 보자.
- 협업을 한다면 기능을 만들어서 재활용하여야 하며 이때 함수라는 것을 만들 생각해 보자.

```js
// 아래는 사용자의 명단과 반가워요라는 메세지를 출력하는 기능이다./
function useMember() {
  let user_1 = "홍길동";
  let user_2 = "김길동";
  let user_3 = "박길동";
  let user_4 = "고길동";
  let user_5 = "정길동";
  console.log(user_1 + "님 반가워요.");
  console.log(user_2 + "님 반가워요.");
  console.log(user_3 + "님 반가워요.");
  console.log(user_4 + "님 반가워요.");
  console.log(user_5 + "님 반가워요.");
}
// 함수 활용, 함수 호출, 함수 call
useMember();
```

- 기능을 구분해서 관리하고 싶다. (여기서는 회원명단 및 인사기능)

### 5.2. 함수 만들기

-

```js
// 함수 이름은 동사로 짓는다.
function 함수명() {
  기능1;
  기능1;
  기능1;

}

function 함수명(재료1, 재료2, 재료3) {
  재료1 처리 기능1;
  재료2 처리 기능2;
  재료3 처리 기능3;

}
```

### 5.3. 계산기 만들기

- 단계 1.

```js
//계산기 만들기
const result_1 = 5 + 4;
const result_2 = 8 + 3;
const result_3 = 7 + 2;
const result_4 = 6 + 1;
```

```js
//계산기 만들기
function add(재료, 재료2) {
  재료1 + 재료2;
}

add(5, 4);
add(8, 3);
add(7, 2);
add(6, 1);
```

- 단계 2.

```js
// 계산기 만들기
function result_1() {
  5 + 4;
}
function result_2() {
  8 + 3;
}
function result_3() {
  7 + 2;
}
function result_4() {
  6 + 1;
}
```

- 단계 3. 재료만 다르고 하는 일은 + 기능이다.

```js
// 계산기 만들기
function add(재료1, 재료2) {
  재료1 + 재료2;
}
add(5, 4);
add(8, 3);
add(7, 2);
add(6, 1);
```

- 단계 4. minus 기능 만들기

```js
function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}
minus(5, 4);
```

- 단계 5. 기능에 예외처리(오류 처리) 적용하기
- 오류 : 원하지 않는 결과, Error도 모두 포함해서 오류라 생각합니다.

```js
function add(매개변수1, 매개변수2) {
  // 방어코드 (예외처리)
  // if(매개변수1 == typeof string)
  // {  매개변수1 + 매개변수2;}
  if (매개변수1 === undefined) {
    return alert("매개변수1 을 입력하세요.");
  }
  if (매개변수2 === undefined) {
    return alert("매개변수1 을 입력하세요.");
  }

  매개변수1 + 매개변수2;
}

function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}

add(5, "100"); // 원하지 않는 결과이므로 오류
add(5, undefined); // 원하지 않는 결과이므로 오류
add(5); // 원하지 않는 결과이므로 오류
```

### 5.4. JSDoc 으로 함수 사용에 대해서 안내(설명서) 하기

- jsDoc 기본 이해
- 재료, 매개변수를 parameter 라고 합니다.

```js
/**
 * 두개의 변수를 받아서 덧셈하는 기능
 * @param {number} numA - 첫번째 숫자
 * @param {number} numB - 두번째 숫자
 * @returns {number} 두 숫자의 덧셈결과
 *
 * */
function add(a, b) {
  return a + b;
}

/*
JSDoc 작성이번거롭더라도 팀내에서는 작성하고 진행해야한다
*/

function add(numA, numB) {
  if (numA === undefined) {
    return alert("첫번째 매개변수를 입력해주세요");
  }
  if (numB === undefined) {
    return alert("두번째 매개변수를 입력해주세요");
  }
  return numA + numB;
}
```

### 5.5. JSDoc을 이용한 계산기 함수 만들어보기

````js
/**
 * 숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} 덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 곱셈 결과
 */
function multi(a, b) {
  return a * b;
}
/**
 * 숫자 나누기 기능
 * @param {number} a - number
 * @param {number} b - number
 * @returns {number} - 나눗셈 결과
 *
 * ------ 호출예 -----
 * ```javascript
 * let result = divide(5, 4)
 * ```
 *
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0 이 아니어야 합니다.");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  if (typeof b !== "number") {
    return alert("분모는 숫자여야 합니다.");
  }

  return a / b;
}

// 덧셈 사용
const resultAdd = add(5, 4);
const resultMinus = minus(5, 4);
const resultMulti = multi(5, 4);
const resultDivide = divide(5, 0);
````

- 추가 함수

````js
/**
 * 숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} 덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 곱셈 결과
 */
function multi(a, b) {
  return a * b;
}
/**
 * 숫자 나누기 기능
 * @param {number} a - number
 * @param {number} b - number
 * @returns {number} - 나눗셈 결과
 *
 * ------ 호출예 -----
 * ```javascript
 * let result = divide(5, 4)
 * ```
 *
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0 이 아니어야 합니다.");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  if (typeof b !== "number") {
    return alert("분모는 숫자여야 합니다.");
  }

  return a / b;
}

/**
 * 계산기 기능
 * 계산기 기능은 +, -, *, / 기능이 있습니다.
 * @param {string} symbol  +, -, *, / 기호 중 1개 입력
 * @param {number} a 숫자 입력
 * @param {number} b 숫자 입력
 * @returns {number} 결과는 숫자
 *
 * 사용 예) =================
 *
 * ```javascript
 * const result = calcurator("+", 5, 4);
 * ```
 */
function calcurator(symbol, a, b) {
  if (typeof symbol !== "string") {
    return alert("기호를 입력하세요.");
  }
  let result = 0;

  switch (symbol) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = minus(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    case "*":
      result = multi(a, b);
      break;
    default:
      return alert("올바른 기호를 입력해 주세요.");
  }

  return result;
}
````

### 5.6. 다양한 함수 예제

```js
/**
 * 메시지를 콘솔에 출력하기
 * @param {string} message - 출력할 메시지
 *
 * */

function shotMessage(message) {
  console.log(message);
}
showMessage("안녕");
showMessage("홍길동 반가워");
```

```js
/**
 * 배열을 받아서 요소를 출력하는 함수
 * @param { number[] } arr - 숫자모음 배열
 *
 * */
function showArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

```js
/**
 * 객체의 속성 값을 출력하는 기능
 * @param { {id: number, nickName: string, age:number} }
 *
 */

function showUser(user) {
  console.log(user.id);
  console.log(user.nuckName);
  console.log(user.age);
}
```

### 5.7. 함수의 기본 값 설정 하기

````js
/**
 * 나이를 10살 더하여서 출력함
 * @param {number} age - 현재 나이입력
 * ```javascript
 * const result = showAge(10); //20
 * ```
 * */

function showAge(age = 0) {
  // 기본매개변수 값을 안넣으면 undefined  출력될수도잇음
  return (age += 10);
}
````

### 5.8. 매개변수의 총 개수 자동으로 알아내기

```js
/**
 * 입력된 매개 변수 만큼 총합계산하기
 * @param {number} numbers - 숫자 값
 *
 */

function showTotal(a,b) {
  return a + b;
}

function showTotal() {
  // console.log(arguments); // 다 출력됨
  let total=0;
  for (let i =0; i< arguments.length ; i++)
  {
    total = total + arguments[i];
  }
  return total;
}
const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 3); //java에서는 오류 javascript에서는 오류가아님

- rest 파라메터는 전달된 매개변수에 정확한 값만 배열로 만든다.
// 새로나온 문법

function showTotal(...rest){
  console.log(argumetns);
  console.log(rest);

  let total = 0;
  for (let i=0; i < rest.lenght; i++)
  {
    total = total + rest{i};
  }
  return total;
}


function showTotal(a, b,...rest){
  console.log(a);
  console.log(b);
  console.log(rest);

  let total = 0;
  for (let i=0; i < rest.lenght; i++)
  {
    total = total + rest{i};
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);

```

- Rest 파라메터는 기본 매개변수 적용후, `나머지를 배열로 추출` 한다.

## 6. 함수 정의법을 꼭 이해하자.

- 일반적 함수 만드는 법

```js
function 함수명(매개변수) {
  return 결과값;
}
함수명(매개변수);
```

- 2. `변수의 값`으로 함수 만드는 법

```js
const 변수명 = function () {
  return 결과값;
};
변수명(매개변수);
```

- 3. `const왜 변수명 = function 형태`가 필요하지?

```js
// 얘는 기능자체를 보내는것
function add() {
  return 1 + 2;
}
add();

// 값을 보내는 것
const addFun = function () {
  return 1 + 2;
};
addFun();

function test(_func) {
  // callback 함수 : 전달 받아서 실행하네 .

  _func();
}

const minusFun = function () {
  return 1 - 2;
};

test(add); //값이 아니라서안된다
test(addFun); // 가능 값이라서
test(minusFun); // 값이라서 가능

test(function () {
  consol.log("go");
});

function addEventLindstener(event, fn) {
  fn();
}
bt.addEventListener("click", function () {});
```

- 아래 코드는 특히 위치를 살펴보자. : 완성하고 사용하자.

```js
const addFN = function () {};

add(); //호이스팅이 되므로 괜찮다.
addFN(); //호이스팅 에러 발생한다. (주의하자)// 먼저 만들고 써야한다

function add() {}
```

## 7. 함수 추가 정리

### 7.1. 함수를 만들 시점 (언제 함수를 만들까에 대한 안내)

#### 7.1.1. 코드가 너무 긴 경우( `하나의 결과를 만들기 위해서 작성시`)

- 코드 가독성이 너무떨어져서 추후 분석이 곤란할때
- 하나의 결과를 만들기 위한 과정을 작성중 너무 많은 코드가 작성될떄
- 여러 줄이 작성되어서 한개의 결과를 만든다면 함수로 묶어서 만들까? 고민하자.

#### 7.1.2. 동일한 기능이 여러 번 사용될때

- 2번이상 동일한 기능이라면 만들까? 고민
- 2번이상 동일한 기능인데 재료만 다르다? 함수만들까? 고민

#### 7.1.3. 코드를 누군가에게 주어야 할때

-코드를 공유할 때 함수만들까? 고민

### 7.2. 함수 만드는 법

- `{}`로 코드 블럭을 이용해서 묶어준다.
- 이름을 짓는데, `동사`로 지어준다. (기본 : Camel case, 생성자 함수: Pascal )
- 이름 뒤에 `(재료, 재료)` 를 작성한다.
- 이름 뒤에 `(매개변수, 매개변수)` 를 작성한다.
- 이름 뒤에 `(param, param)`를 작성한다.
- function 키워드 작성해준다
- `JSDoc`으로 사용설명서를 작성해 주면 좋겠다.

### 7.3. 함수 사용법(`호출, Call` 등으로 명칭함)

- 함수 이름();
- 함수를 호출했다.
- 함수명 Call 했다.

### 7.4. 함수 샘플

- 넓이를 계산하는 기능, 그런데 2번이상 사용, 누군가에게 공유

````js
/**
 * 너비를 계산해 주는 함수
 * @param {number} _width
 * @param {number} _height
 * @returns {number}
 * -- 함수 사용 예 --
 * ```js
 * const resutl = calcRect (5,4);
 *
 * ```
 */
function calcRect(_width = 0, _height = 0) {
  // 초반에 무수하게 예외처리 코드가 작성이 된다.
  // 업데이트 진행
  return _width * _height;
}
// 함수 호출
const result = calcRect(5, 4);
console.log(result);
````

### 7.5. 한수의 추가 지식

```js
function 함수명(매개변수 = 기본값) {}
function 함수명(매개변수 = 기본값) {}
```

- 매개 변수에는 제한이 없다.

```js
function 함수명(매개변수1, 매개변수2) {
  const prams = arguments; // 배열로 접근 가능
}
함수명(1, 2, 3, 4, 5);
```

- arguments 말고 `rest 파마레터`를 쓰자

```js
function 함수명(매개변수1, 매개변수2) {
  const prams = arguments; // 배열로 접근 가능
}
함수명(1, 2, 3, 4, 5);
console.log("arg 함수명 ===========");
console.log(prams); //다반줌 초과하면 모든걸 arg에 처넣음

function 함수명(매개변수1, 매개변수2, ...res) {
  // res 는 변수 명이고 ... 이 본체
  const prams = res; // 배열로 접근 가능
}
함수명(1, 2, 3, 4, 5);
console.log("res 함수명 ===========");
console.log(prams); // 사용하느건 사용하고 아닌것들만 배열에 포함시킴
```

- 기본 함수 작성법 2가지

- 함수를 `표현식 (Expression)`으로 만드는법
- 변수에 함수를 담는 이유는 `함수에 매개변수`에 전달하려고

```js
// 기본 함수 정의
function 함수명() {}

// 함수 표현식 정의
const 함수명 = function () {};
```

```js
const add = function () {};

function calcFunc(_fn) {
  add();
}

calcFunc(add);
```

- 콜백 함수는 `특정한 이벤트`가 발생시 덩달아서 실행(추후 다시 보기)

## 8. 화살표 함수 (Arrow Function)

- FE 에서 함수 작성시 많이 볼수 있는 형태
- 활용 비율이 높다. 반드시 이해해 보자.

### 8.1. 화살표 함수가 필요한 이유

- 함수가 간략해 집니다.
- 함수가 촤적화 됩니다. (메모리절약, 성능 최적화)
- this의 범위가 고정됩니다. (추후 진행)
- new를 사용 못합니다. (추후 진행)

### 8.2. 화살표 함수 작성법 (반드시 이해하세요.)

- 매개변수가 없는 경우

```js
// 기본 함수
function say() {
  console.log("안녕");
}
// 표현식 함수
const say = function () {
  console.log("안녕");
};
// 화살표 함수
const sayArrow = () => {
  console.log("안녕");
};
// 실행 코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = () => console.log("안녕"); // 출력이나 단한줄만 명령 구문이 들어가면 중괄호 생략 가능
```

- `매개변수`가 오로지 `1개 있을 때`

```js
// 기본 함수
function say(_word) {
  console.log(_word);
}
// 표현식 함수
const say = function (_word) {
  console.log(_word);
};
// 화살표 함수
const sayArrow = (_word) => {
  console.log(_word);
};
// 실행 코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = (_word) => console.log(_word);

// 실행 코드가 1 줄이면 {} 블럭 생략 가능
// 매개변수()가 생략이 가능하다
const sayArrow3 = (_word) => console.log(_word);
```

- 매개변수가 2개 이상일 때

```js
// 기본 함수
function say(_word, _name) {
  console.log(_word, _name);
}
// 표현식 함수
const say = function (_word, _name) {
  console.log(_word, _name);
};
// 화살표 함수
const sayArrow = (_word, _name) => {
  console.log(_word, _name);
};
// 실행 코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = (_word, _name) => console.log(_word, _name);

// 실행 코드가 1 줄이면 {} 블럭 생략 가능
// 매개변수 2개이상은 ()가 필수
const sayArrow3 = (_word, _name) => console.log(_word, _name);
```

## 9. 스코프의 이해

- 변수의 활용 가능한 범위
- 제일 중요한 것은 `{}` 입니다.

### 9.1. Scope의 종류 2가지

- 전역 범위 : Global Scope
- 지역 범위 : Local Scope

### 9.2. 전역범위

- 프로그램 어디서든 마음대로 접근해서 활용

```js
// 전역 변수
const appName = "Java World";

{
  console.log(appName);
}

function say() {
  console.log(appName);
}
say();

console.log(this);
```

### 9.3. 지역범위

- `{}` 블록 안쪽을 `지역범위`라 합니다.

```js
function say() {
  console.log("안녕");
}
// 지역자리
{
  say();
}
say();
```

- function은 전역에 등록되므로 예측 곤란
- 아래 코드는 협업 실패 : `function` 은 전역에 등록해서 쓰자
- `function` 은 지역에 코드하지 말자.

```js
// 전역 자리

// 개발자: 홍길동 지역 자리
{
  function say(_name) {
    console.log(_name + " Hello");
  }
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  function say(_name) {
    console.log(_name + " 반가워");
  }
  say("고길동");
}

say("테스터");
```

```js
// 전역 자리

// 개발자: 홍길동 지역 자리
{
  const say = function (_name) {
    console.log(_name + " Hello");
  };
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  const say = function (_name) {
    console.log(_name + " 반가워");
  };
  say("고길동");
}

say("테스터");
```

- 아래를 추천함

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}
// 개발자: 홍길동 지역 자리
{
  const say = function (_name) {
    console.log(_name + " Hello");
  };
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  const say = function (_name) {
    console.log(_name + " 반가워");
  };
  say("고길동");
}

say("테스터");
```

- 화살표 함수 샘플

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}
// 개발자: 홍길동 지역 자리
{
  const say = (_name) => console.log(_name + " Hello");
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  const say = (_name) => console.log(_name + " 반가워");
  say("고길동");
}

say("테스터");
```

## 10. `this` 라는 키워드가 우리를 괴롭힐 겁니다.

- this가 스코프와 연결되면서 혼란스럽다.

### 10.1. 전역 스코프의 this 는 `Window` 이다.

```js
console.log(this); // Window{...}
```

### 10.2. function의 this 는 `Window`이다.

```js
function say() {
  console.log(this); //Window{....}
  function hi() {
    console.log(this); //Window{...}
  }
  hi();
}
say();
```

```js
console.log(this);
let brand = "NAVER";

function say() {
  console.log(this);
  this.brand = "KKO";
  function hi() {
    console.log(this);
  }
  hi();
}
say();

console.log(this);
let brand = "NAVER";

const say = () => {
  console.log(this);
  this.brand = "KKO";
  function hi() {
    console.log(this);
  }
  hi();
};
say();
```

### 10.3. function 또는 표현식 함수는 this 사용시 위험한 코드.

- this는 동일한 스코프를 가르쳐서 값이 변할 위험이 존재
- this는 물어보지도 않고 var 변수를 만들고 window 변수에 등록

```js
var brand = "nike";
window.brand = "nike";
this.brand = "nike"; // 위랑 같은말

function now() {
  window.brand = "addias";
}
console.log("함수 실행전 : ", brand);
console.log("함수 실행전 : ", this);
console.log("함수 실행전 : ", window.brand);

now();

console.log("함수 실행전 : ", this);
console.log("함수 실행전 : ", window.brand);
console.log("함수 실행후 : ", brand);
```

### 10.3. 화살표 함수의 this 는 `Window`가 아닐 수 있다.

### 10.4. 객체에 속성으로 만든 함수에서의 this

- 객체에서 this는 객체 전체를 가르킨다.
- 어? function 사용하니까 `this 가 상황에 따라서 변하는데?`

```js
const Person = {
    name: "아이유",
    age: 20,
    sayHi: finction(){
      console.log(this);},
};

console.log(this);
Person.age;
Person.sayHi();

```

### 10.5. 객체 생성자 함수로 사용시 this

- 생성된 객체가 this가 된다.
- Pascal 로 적는 객체는 new를 쓰자라는게 약속 (처음이 대문자)

```js
// 대문자 즉 Pasal
function Coffee() {
  console.log(this);
}

Coffee();
new Coffee(); // new 를 붙이면 this 가 window가 아니고 각 생성되는 객채의 포함된다

function robot(_owner) {
  this;
}
robot("길동이");
// 객체를 생성하는 함수로 선언하고 싶다
new robot();
```

- Local Scope 사용의 예

```js
const aaa = new여행만들기 { // new 를 쓰는이유
  {
    di :5,
    title : "대구여행"
  }
}

const aaa = {
    id  = 5 ;
    title = "대구여행"
}

배너만들기 {
  {
    id: 100,
    title: "할인가격"
  }

}

window.id=100;
window.title="할인가격"

```

### 10.6. 내가 이해하기로 아래처럼 정리했다.

- function에 작성한 this 는 `어디서 함수를 사용했는가`에 따라 다르다.

```js
function say(){
  this 는 ? window가 된다.
}
say(); 지금은 glogal 영역 즉, window에서 사용했으므로
```

```js
const Person = {
say : function (){
  this 는?
}

}

Person.say(); 지금은 Person 이 say 함수를 사용했으므로
```

- 과연 출력 결과는 무엇이 나올까요?

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this.name);
  },
};
Person.say();
```

### 10.7. 화살표 함수의 this 는?

- 화살표 함수는 `상위 스코프`를 가르킨다.

```js
// 여기는 window
const say = () => {
  console.log(this); // 현재의 상위 범위를 가리킨다.
  // window 출력됨
};
say();
```

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this); // 객체가 호출
    console.log(this.name); // 객체.name 호출
    setTimeout(function () {
      console.log(this); // window 호출
      console.log(this.name); // window.name. 호출
    }, 3000);
  },
  sayArray: function () {
    console.log(this); // 객체가 호출
    console.log(this.name); // 객체.name. 찾는다.
    setTimeout(() => {
      // 나위에 누가있냐 this 를 찾아서 가는 거
      console.log(this); // 화살표는 나보다 위에 영역
      console.log(this.name); // 위에 영역.name
    }, 3000);
  },
};
Person.say();
```

## 11. 생성자 함수 ( 목적이 `객체를 생성` 하는 것 )

- `new 키워드`를 붙여서 함수를 호출한다.

```js
function Person() {
  console.log(log);
}
new Person();
```

```js
function Person(_name) {
  this.name = _name;
  this.say = function () {
    console.log(this.name + "안녕");
  };
  console.log(this);
  console.log(this.name);
}

const a = new Person("복진승");
a.say();
const b = new Person("강슬기");
b.say();
const c = new Person("황수빈");
c.say();
const d = new Person("정화섭");
d.say();
```

- `prototype`을 이용하면 공통 기능을 자동으로 부여한다 좋다.

```js
function Person(_name) {
  this.name = _name;
  console.log(this);
  console.log(this.name);
}
Person.prototype.say = function () {
  console.log(this.name + "안녕");
};

const a = new Person("복진승");
a.say();
const b = new Person("강슬기");
b.say();
const c = new Person("황수빈");
c.say();
const d = new Person("정화섭");
d.say();
```

## 12. 클래스

- 목적이 `객체를 생성` 하는 것

### 12.1. 생성자 메소드( constructor Method)

```js
class Person {
  // 클래스에서 매소드 함수 만드는 법
  // 메소드명 (){}
  메소드명() {}
  // 객체를 생성하는 함수 : 변경 불가
  // 디폴트 객체 생성자 함수// 안적으면 그냥 만들어준다 적은이유는 매개변수로 만들어줄려고
  constructor(_name, _age) {
    // 초기값 설정
    //  new로 할당만해도 자동 실행되는것
    console.log("new 하면 자동 실행");
    console.log(_name);
    this.name = _name;
    this.name = _age;
  }
}

const a = new Person("둘리", 500000);
console.log(a);
```

### 12.2. 나의 메소드 만들기

- `메소드영(){ 할일 }`

```js
class Person {
  // 클래스에서 매소드 함수 만드는 법
  메소드명() {}
  // 객체를 생성하는 함수 : 변경 불가
  // 디폴트 객체 생성자 함수// 안적으면 그냥 만들어준다 적은이유는 매개변수로 만들어줄려고
  constructor(_name, _age) {
    // 초기값 설정
    //  new로 할당만해도 자동 실행되는것
    // console.log("new 하면 자동 실행");
    // console.log(_name);
    // property
    this.name = _name;
    this.name = _age;
  }
  // say 라는 메소드
  // 메소드명 (){}
  say() {
    console.log(this.name);
  }
}

const a = new Person("둘리", 500000);
console.log(a);
```

### 12.3. 나의 속성 만들기

- Property : 프로퍼티
- constructor 안에서 만든다.

```js
constructor(_name, _age){
  this.name = _name;
  this.age = _age;
}
```

### 12.4. 상속 이해해 보기

- 1단계

```js
//동물
class Animal {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}

//강아지
class Dog {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}

//새
class Bird {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
```

- 단계 2.

```js
//동물
class Animal {
  constructor(eye, nose) {
    // new하고 실행해야 이게 자동실행됨
    this.eye = eye;
    this.nose = nose;
  }
  speak() {
    console.log("소리를 내요");
  }
}
const a = new Animal(2, 1); // 이걸 안하고 아래에서 super() 하면 가능
//console.log(a.eye);
a.speak();

//강아지

class Dog extends Animal {
  constructor() {
    //new Animal(); // 원래는 이렇게 써야하는데 아래의 내용로 대체 가능
    // new Animal() <- 이걸 실행하는 내용이 아래의 super
    super(4, 5); // 부모 클래스가 한번은 작동을 해야 부모의 정보를 불러 올 수 있어서 사용 구문
    this.name = "개새끼";
  }
  speak() {
    console.log("멍멍");
  }
}
const b = new Dog();
console.log(b.name);
console.log(b.eye);
console.log(b.speak);
console.log(b);

console.log(a.eye);
//새
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
    this.city = "대구";
  }
  speak() {
    console.log("짹쨱");
  }
}
const c = new Bird(10, 14);
console.log(c.eye);
console.log(c.nose);

c.speak();
console.log(c);
```

### 12.5. 접근 제한자 이해하기

- 프로퍼티와 메소드를 활용하는 경우 제한 걸기

### 12.5.1. 종류

- 만약 java 라면

```java
public : 마음대로 접근 가능, 공유하는
private : 사적인 즉, 클래스 내부에서만 접근가능
protected : 상속 받은 클래스들만 접근 가능
```

- 만약 javascript 라면

```js
public : 마음대로 접근 가능, 공유가능하는
# : 사적인 즉, 클래스 내부에만 접근가능(private 역할)


class Animal {
  // 안적으면 public (기본값)
  eye;
  // #을 적으면 private
  #nose;

  constructor(eye, nose) {
    this.eye = eye;
    this.#nose = nose;
  }
}

class Dog extends Animal {
  constructor() {
    super(2, 5);
  }
}

const a = new Dog();
console.log(a);
console.log(a.eye);
console.log(a.#nose); // private 오류


```

### 12.6. static : 클래스에 고정된 속성, 메소드

```js
class MathCalc {
  constructor() {}
  static add(a, b) {}
  static minus(a, b) {}
}
MathCalc.add(3, 4);
MathCalc.minus(3, 4);

const a = new MathCalc();
a.add(3, 4); // 생성된 객체로 접근불가

Math.PI;
Math.round(); //반올림
Math.ceil(); //오림
```

## 13. 콜벡 함수

- `call` 은 함수를 실행(호출) 한다는 의미
- 일반 함수에 매개변수로 전달된 함수를 callback 함수라 칭한다.

### 13.1. 콜백함수 활용처

- 주로 사용자 행동에 따른 이벤트 발생시 실행하는 함수
- 서버 연동하여 자료를 호출하는 `이벤트 발생`시 실행하는 함수

```js
const say = function () {};
const cry = () => {};
function smile() {}

//매개변수로 전달된 함수 실행
function run(a) {
  a();
}

run(say);
run(cry);
run(smile); // 변수아니라서 안됨
run(function () {}); // 이걸 추천함
```

```js
const bt = document.querySelector(".bt");
bt.addEventListener("click", function () {});
```

## 14. 객체 (Object)

- `객체 리터럴`로 생성한다.
- `리터럴(literal)` 이라는 단어는 꼭 정의해 두세요.
  - 이터럴은 정해진 `값을 개발자가 직접 작성`해 주는 것.
  - 숫자 리터럴, 문자열 리터럴, 배열 리터럴, 객체 리터럴 등

```js
const 객체 = {
  객체키명 : 키값,
  객체키명 : 키값
};

.wrap{
  background-color: "red"
}
```

- 만약 객체를 1개씩 만든다면 즉, `객체리터럴로 생성한다`면 객체명은 소문자로

```js
const personInfo = {
  nickName: "아이유",
  age: 20,
  job: "singer",
};
```

### 14.2. 여러 개의 동일한 형태(구조)의 객체를 생성한다면

- `함수 생성자 함수`를 이용하는 법 (함수 이름이 `Pascal Case`)

```js
function PersonInfo(_name, _age) {
  this.nickName = _name;
  this.age = _age;
  this.job = "singer";
}
const 아이유 = new PersonInfo("아이유", 20);
const BTS = new PersonInfo("BTS", 20);
```

- `클래스 `를 이용하는 법(클래스 이름이 `Pascal Case`)

```js
class PersonInfo {
  constructor(_name, _age) {
    this.nickName = _name;
    this.age = _age;
    this.job = "singer";
  }
}
const 아이유 = new PersonInfo("아이유", 20);
const BTS = new PersonInfo("BTS", 20);
```

### 14.3 연습예제

```js
const student_1 ={
  name : "홍길동",
  age: 10,
};

const student_2 = {
  name: "둘리"
  age: 2000,
};



function Student (_name, _age)
{
    this.name = _name;
    this.age = _age;
};
const student_1 = new Student("홍길동", 10);
const student_2  = new Student("둘리", 2000);


class Student {
constructor (_name, _age)
{

  this.name = _name;
  this.age = _age;
}
}
const student_1 = new Student("홍길동", 10);
const student_2  = new Student("둘리", 2000);

```

### 14.4 객체에 값 말고 `기능 추가` 하기

- 기능은 흔히 `메소드(Method)` 또는 `행위(Behavior)`라고 호칭
- 객체 리터럴로 메소드 추가해 보기

```js
const student_1 = {
  name: "홍길동",
  age: 20,
  sayName: function () {
    this.name;
  }, // 객체
  sayAge: () => {
    this.age;
  }, //window
  // 가장 최신 문법으로서 정확히 메소드 임을 표현
  sayHi() {
    this.age;
  },
};
```

prototype // 하나의 리소스를 같이 쓰면 이걸쓴다

- 위의 `객체 생성자 함수` 로 수정해 보자.

```js
function Student(_name, _age){
  this.name = _name;
  this.age = _age;
  this.sayName = function () {
    console.log(this.name); // 객체
  },
  // 아 위험하다. 화살표 주의
  this.sayAge = () => {
    console.log(this.age); // window
  },
  // this.sayHi = () {
  //   console.log(this.age);
  // },
}
// 같은 리소스를 사용할 때는 prototype 쓰자
Student.prototype.sayHi = function(){}

const student_1 = new Student("홍길동", 20)
```

- 클래스로 만들어 보자. (직금은 괜찮다. JAVA 배우고 써도된다. 활용도 떨어짐)

```js
class Student {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  sayName() {
    this.name;
  }
  sayAge() {
    this.age;
  }
  sayHi() {
    this.name;
  }
}
const student_1 = new Student("홍길동", 20);
```

- `정말 중요함 1. : Vue, React 에서는 기본이 객체 생성으로 시작함.`
- `정말 중요함 2. : Vue, React 에서는 화살표 함수를 기본으로 함.`
- `객체 생성자 함수`, `클래스`의 화살표 함수에서의 `this 는 객체`를 가르킨다.

### 15. 배열 (Array)

- 데이터 종류와 상관없이 여러개를 `인덱신(순서대로)` 할 수 있습니다.

```js
// 가장 많이 함 (배열 리터럴)
const 배열명 = [요소, 요소, 요소];
// 추천하지 않음
const 배열명 = new Array(3);
```

### 15.2. 배열의 요소를 인덱스로 찾기

```js
const 배열 = [1,"안녕",false, fuction(){}];
배열 [0];
배열 [1];
배열 [2];
배열 [3];

```

### 15.3. 배열도 객체라서 `속성`이 있어요.

```js
const 배열 = [1, 3, 5];
배열.length; //3개
```

### 15.4 무지막지하게 데이터 종류 중 배열을 다룹니다.

- 일반적 데이터 형태 : `[{},{},{},{}]`
- 배열을 프로그래밍에서 많이 다루므로 `미리 함수를 제공` 함(빌트인 함수).
- 주의 사항으로서 절대로 `원본을 훼손하지 마셔야 합니다`(불변성 유지).

### 15.5. 배열을 다루는 함수에서 원본을 훼손하는 배열함수

- `이서 쓰시면 안됩니다.`

- push() : 배열 `끝`에 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.push("커피");
console.log(lunchArr);
// 커피 추가 (원본 훼손)
// [  "사과",  "딸기",  "과자",  "햄버거",  "커피"]
```

- pop() : `끝` 요소 제거 및 제거된 요소 반환

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.pop();
console.log(lunchArr);
// 햄버거 제거 (원본 훼손)
// [  "사과",  "딸기",  "과자"]
```

- unshift() : `앞` 요소 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.unshift("커피");
console.log(lunchArr);
// 햄버거 앞자리 추가 (원본 훼손)
// ["커피", "사과",  "딸기",  "과자", "햄버거"]
```

- shift() : `앞 첫번째` 요소 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.shift();
console.log(lunchArr);
// 햄버거 앞자리 제거 (원본 훼손)
// ["딸기",  "과자", "햄버거"]
```

- splice() : `원하는 인덱스` 부터 추가, 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.splice(1, 2);
console.log(lunchArr);
// 인덱스로 부터 개수만큼 제거 (원본 훼손)
// ["사과", "햄버거"]
```

- sort() : 배열의 순서를 정렬하기

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.sort();
console.log(lunchArr);
// ['과자', '딸기', '사과', '햄버거']
const enArr = ["k", "o", "r", "e", "A", "j", "p", "a", "n"];

// 원본훼손
enArr.sort();
console.log(enArr);
// ['A', 'a', 'e', 'j', 'k', 'n', 'o', 'p', 'r']
const numArr = [1, 2, 12, 25, 37, 30];
// 원본훼손
numArr.sort();
console.log(numArr);
// 단순히 sort() 를 사용하면 앞 글자를 기준으로 정렬됨.
// [1, 12, 2, 25, 30, 37]

// 내림 차순으로 정렬해 보자.
// numArr.sort((a, b) => b - a);
// [37, 30, 25, 12, 2, 1]

// 올림 차순
numArr.sort((a, b) => a - b);
console.log(numArr);
// [1, 2, 12, 25, 30, 37]
```

- reverse() : `역순` 순서를 뒤집어 저장

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
numArr.reverse();
console.log(numArr);
// [30, 37, 25, 12, 2, 1]
```

- fill() : 요소에 값을 채운다.

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
// numArr.fill(0);
console.log(numArr);
// [0, 0, 0, 0, 0, 0]
// 값 1 을 채워라
// 인덱스 3번으로 부터
// 인덱스 5번 전까지
// 1 바귈 값 3 시작점 5 끝전점
numArr.fill(1, 3, 5);
console.log(numArr);
// [1, 2, 12, 1, 1, 30]
```

- flat() : `배열을 평탄화` 사용합니다.
  : flat 을 위한 별도의 라이브러가 존재합니다.
  : react 에서 모듈을 설치해서 사용합니다.

```js
const numArr = [1, 2, 3, ["a", "b", "c"], 8, 9];
// flat(배열의 단계)
const result = numArr.flat(1);
console.log(result);
// [1, 2, 3, 'a', 'b', 'c', 8, 9]
const num2Arr = [1, 2, [3, [4, [5, 6]]], 100];
const result2 = num2Arr.flat(1);
console.log(result2);
// [1, 2, 3, Array(2), 100]
const result3 = result2.flat(1);
console.log(result3);
// [1, 2, 3, 4, Array(2), 100]
const result4 = result3.flat(1);
console.log(result4);
// [1, 2, 3, 4, 5, 6, 100]
```

### 15.6. 배열을 다루는 함수에서 원본을 훼손하지 않고 `새로운 배열을 만들어 주는 함수`

- `데이터 불변성(immutability)` 유지하셨나요?

#### 15.6.1. map()

- `star가 1000만개` 가치가 있고, 자주활용
- 원본 배열의 요소에 동일한 함수 실행 후 새로운 배열로 생성

```js
원본배열.map(function (요소, 인덱스, 원본배열) {});
// 아래의 item index arr 은 변수명임 따로 지정되어 있는거 아님
const originArr = ["홍길동", "고길동", "김수한무"];
const copyArr = originArr.map(function (item, index, arr) {
  // console.log(`item : ${item}, index: ${index}`);
  const tag = `<div class="user-info">${item}</div>`;
  console.log(tag);
  // 리턴해야 배열이 담깁니다.
  return tag;
});
console.log(`원본 originArr : ${originArr}`);
console.log(`복제본 copyArr : ${copyArr}`);

const copyArrowArr = originArr.map((item, index) => {
  return `<a href="${index}">${item}</a>`;
});
console.log(`복제본 copyArrowArr : ${copyArrowArr}`);
```

#### 15.6.2. filter()

- 조건에 참인 것만 모아서 배열 리턴
- 자주 사용은 합니다.

```js
const memberHong = {
  age: 10,
  name: "홍길동",
  role: "GUEST",
};
const memberKim = {
  age: 18,
  name: "김수한무",
  role: "MEMBER",
};
const memberPark = {
  age: 25,
  name: "박둘리",
  role: "ADMIN",
};

const originArr = [memberHong, memberKim, memberPark];

const result =0-
. originArr.filter((item, index) => {
  // return item.role === "ADMIN";
  return item.age <= 20;
});
console.log(result);
```

#### 15.6.3. slice()

- 배열의 일부를 복사한다.

```js
const numArr = [1, "a", "b", 4];
// 시작 인덱스로 부터 도착 인덱스 미만 요소 출력
const nowArr = numArr.slice(1, 3);
console.log(numArr);
console.log(nowArr); //  ['a', 'b']
```

#### 15.6.4. concat();

- 배열을 `합쳐서` 하나의 배열을 리턴.

```js
const numArr1 = [1, "a", "b", 4];
const numArr2 = [8, 100];
const result = numArr1.concat(numArr2);
console.log(result);
// [1, 'a', 'b', 4, 8, 100]
```

#### 15.6.5. reduce();

- 배열의 요소를 탐색하면서 누적 연산함.
- 누적된 결과를 출력함.

```js
const numArr1 = [1, 2, 3, 4];
// 문법이 좀 다릅니다.
// 보통은 ===>  (item, index, arr)
// const total = numArr1.reduce(함수, 초기값)
const total = numArr1.reduce((acc, cur) => {
  console.log("acc : ", acc);
  console.log("cur : ", cur);
  return acc + cur;
}, 0);

console.log("total : ", total);
```

#### 15.6.6. join();

- 문자열로 배열을 연결한 결과를 만든다.

```js
const numArr1 = [1, 2, 3, 4];
// 기본은 ,  연결된 글자
const result = numArr1.join("#");
// 결과는 string
console.log(`typeof ${typeof result} , ${result}`);
// typeof string , 1#2#3#4
```

#### 15.6.7. indexOf();

- 찾는 요소가 몇번째 인덱스 인지를 파악

```js
const numArr1 = [1, 2, 3, 4];
// 기본은 ,  연결된 글자
const result = numArr1.indexOf(3);
console.log(`typeof ${typeof result} , ${result}`);
// typeof number , 인덱스 2
```

#### 15.6.8. includes();

- 요소가 포함되었는지 아닌지

```js
const numArr1 = [1, 2, 3, 4];
// 기본은 ,  연결된 글자
const result = numArr1.includes(3);
console.log(`typeof ${typeof result} , ${result}`);
// typeof boolean , true
```

## 16. 객체 (`{}`)와 배열 (`[]`)의 필수 이해 사항

### 16.1. 반복문

- 배열에서 사용하는 경우의 반복문 문법

```js
const arr = [1, 2, 3, 4];
// 가장 전통적인 방식
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//배열의 요소 반복문 버전
arr.forEach(function (item) {
  console.log(item);
});

// 배열의  for of 문
for (const item of arr) {
  console.log(item);
}

// 배열의 map : 새로운 배열을 만듦
const now = arr.map(function () {
  return item;
});
```

- 객체에서 사용하는 경우의 반복문 문법

```js
const person = {
  age:10,
  nickName: "hong",
  isMember: false,
};

// 객체의 속성명 알아내기
for (let key in person){
  console.log(key); // age nickName, isMember
};

// 객체의 속성에 보관하는 값 알아내기
for (let key in person){
  console.log(person.[key]); // 10 hong, false
};
```

### 16.2 값을 추출해서 보관하기

- 배열

```js
const arr = ["사과", "딸기", "참외"];
// 아래처럼 요소 값을 알아내느 것은 비추천

arr[0];
arr[1];
arr[2];
// 반복문으로 알아내기
for (let i = 0; i < arr.length; i++) {
  arr[i];
}
```

- `배열  Spread 문법 : 별이 5000만개`
  - 배열의 요소를 알아내고,
  - 배열의 요소를 복사하고, 
  - 새로운 배열에 담아주고


```js
const arr = ["사과", "딸기","참외"];
// 아래처럼은 하지는 않습니다. 

const apple =  arr[0];
const straw =  arr[1];
const melon =  arr[2];

// 배열  Spread 문법
const [apple, straw, melon] = [...arr];

// 두 배열을  Spread 문법으로 합치기
const numArr = [1,2,3];
const strArr = ["a","b","c"];
const restArr = strArr.reverse();// 배열 역순 으로 뒤집기

// [1, "a","b","c",2,3 ];
// 아래 처럼은 권장하지는 않습니다. 
 const samplelArr = [1,strArr[1],strArr[2],strArr[3], 2,3 ];

 // Spread 활용
 const resultArr = [1,...strArr,2,3]; 
// 구분하세요 (Rest 파라메터 문법)
function showArr(...rest){};


const person = {
  age:10,
  nickName: "hong",
  isMember: false,
};

// 이렇게는 하지 않습니다. 

const newPerson = {
  age: person.age,
  nickName: person.nickName,
  isMember: person.isMember,
};

// 객체 Spread 문법 
const nowPerson = {...person};

// 두개의 객체를 합치기

const a = {age:10, name: "hong"};
const b = {city:"대구", year: 2025};

const resutl = {...a,...b};
// 결과 {age:10, name:"hong", city:"대구", year:2025 }

// 원본 객체 복사하고 새로운 속성 추가하기 

const ari = {a:1, b:"안녕"};
const now = {...ari, gogo:"happy"};
//now {a:1,b:"안녕", gogo:"happy"}

// 함수에 매개변수로 객체를 복사해서 전달하기
const user = {name:"아이유",age:20};
function show ({name,age}){
  console.log(name);
  console.log(age);
}
const user = {name:"아이유", age:20};
show({...user});


```


## 17. 비동기 (Asyncronous) 통신
- `비동기`는 시간이 오래 걸리는 작업
- 예) 데이터 서버에서 자료를 요청(Request) 및 응답(Response)
- 예) 데이터 서버에서 파일 전송 시
- 비동기 작업 중에 결과를 기다리지 않고 다른 작업을 병렬로 실행하도록

### 17.1. 비동기 작업 문법 종류

- XHR (Xml Http Request)
- Callback
- Promise
- async/await
