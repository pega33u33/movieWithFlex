const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

// If the user is using Internet Explorer, display an alert message.
if(isIE){
  //alert("I'm sorry, but this webpage is only compatible with Microsoft Edge and Google Chrome browsers. Please try accessing it with these browsers.");
  alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
}