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

### 1.7 변수 종합 예제

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
    day: "05/07"
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
    day: "05/09"
  };
console.Log(ticket_2);
console.Log(ticket_2["title"]]);
console.Log(ticket_2["img"]);
console.Log(ticket_2["url"]);
console.Log(ticket_2["rank"]);
console.Log(ticket_2["palce"]);
console.Log(ticket_2[day];

const ticket_3 = {
    title: "뮤지컬 <라이카>",
    img: "https://c.jpg",
    url: "https://c.html",
    rank: 3,
    place: "제주",
    day: "05/04"
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
```
