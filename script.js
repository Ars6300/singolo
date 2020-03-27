const MENU = document.querySelector("body > header > nav > ul");
const NAVIGATION = document.querySelector("body > header > nav");
const MAIN = document.querySelector("body > main");
const HEADER = document.querySelector("body > header");
const SLIDER = document.getElementById("#slider");
const SUBMIT = document.querySelector(
  "#quote > div > form > input:nth-child(5)"
);
const CLOSE_BUTTON = document.getElementById("close-btn");
const FORM = document.querySelector("#quote > div > form");
const BURGER = document.querySelector("#menu");
const MESSAGE_BLOCK = document.getElementById("message-block");
const NAME_INPUT = document.querySelector(
  "#quote > div > form > input:nth-child(1)"
);
const EMAIL_INPUT = document.querySelector(
  "#quote > div > form > input:nth-child(2)"
);
const HORIZONTAL_PHONE = document.getElementById("horizontal");
const VERTICAL_PHONE = document.getElementById("vertical");
const LEFT = document.getElementById("left");
const RIGHT = document.getElementById("right");

const PORTFOLIO = document.querySelector("#portfolio > nav > ul");
const CONTAINER = document.querySelector("#portfolio > div");
document.addEventListener('scroll', onScroll);
MAIN.style.marginTop = HEADER.offsetHeight + "px";
window.addEventListener('resize', (event)=>{
  MAIN.style.marginTop = HEADER.offsetHeight + "px";
  console.log(HEADER.offsetHeight)
})


function onScroll(event){
  const curPos = window.scrollY;
  const anchors = document.querySelectorAll('main > section');
  anchors.forEach((e) => {
    //console.log(e.getAttribute('id'));
    if(e.offsetTop <= curPos + HEADER.offsetHeight && (e.offsetTop + e.offsetHeight) > curPos + HEADER.offsetHeight){
      MENU.querySelectorAll("li > a").forEach(el => el.classList.remove("active"));
      MENU.querySelectorAll("li > a").item(Array.prototype.indexOf.call(MAIN.children, e)).classList.add("active")
    }
  })
}

let rotated = false;
let opened = false;
BURGER.addEventListener("click", () => {
  let deg = rotated ? 0 : 90;
  console.log("sdad");
  BURGER.style.transform = `rotate(${deg}deg)`;
  if(opened){
    NAVIGATION.classList.add("m-hidden");
    document.querySelector("#logo").classList.remove("to-left");
  }else{
    NAVIGATION.classList.remove("m-hidden");
    document.querySelector("#logo").classList.add("to-left");
  }
  rotated = !rotated;
  opened = !opened;
})

MENU.addEventListener("click", event => {
  const isButton = event.target.nodeName === 'A';
  if (!isButton || HEADER.offsetWidth > 767) {
    return;
  }
  if(opened){
    NAVIGATION.classList.add("m-hidden");
    document.querySelector("#logo").classList.remove("to-left");
  }
  opened = !opened;
  console.log(2);
  let deg = rotated ? 0 : 90;
  BURGER.style.transform = `rotate(${deg}deg)`;
  rotated = !rotated;
});

LEFT.addEventListener("click", () => {
  if (document.querySelector("#slides1").classList.contains("hidden")) {
    document.querySelector("#slides1").style.animation =
      "slideLeftOpen 0.3s linear forwards";
    document.querySelector("#slides2").style.animation =
      "slideLeftClose 0.3s linear forwards";
    setTimeout(function() {
      document.querySelector("#slides1").classList.remove("hidden");
      document.querySelector("#slides2").classList.add("hidden");
      document.querySelector("#slider").style.backgroundColor = "#f06c64";
      document.querySelector("#slider").style.borderColor = "#ea676b";
    }, 300);
  } else {
    document.querySelector("#slides1").style.animation =
      "slideLeftClose 0.3s linear forwards";
    document.querySelector("#slides2").style.animation =
      "slideLeftOpen 0.3s linear forwards";
    setTimeout(function() {
      document.querySelector("#slides1").classList.add("hidden");
      document.querySelector("#slider").style.backgroundColor = "#648BF0";
      document.querySelector("#slider").style.borderColor = "#648BF0";
      document.querySelector("#slides2").classList.remove("hidden");
    }, 300);
  }
});

RIGHT.addEventListener("click", () => {
  if (document.querySelector("#slides1").classList.contains("hidden")) {
    document.querySelector("#slides1").style.animation =
      "slideRightOpen 0.3s linear forwards";
    document.querySelector("#slides2").style.animation =
      "slideRightClose 0.3s linear forwards";
    setTimeout(function() {
      document.querySelector("#slides1").classList.remove("hidden");
      document.querySelector("#slider").style.backgroundColor = "#f06c64";
      document.querySelector("#slider").style.borderColor = "#ea676b";
      document.querySelector("#slides2").classList.add("hidden");
    }, 300);
  } else {
    document.querySelector("#slides1").style.animation =
      "slideRightClose 0.3s linear forwards";
    document.querySelector("#slides2").style.animation =
      "slideRightOpen 0.3s linear forwards";
    setTimeout(function() {
      document.querySelector("#slides1").classList.add("hidden");
      document.querySelector("#slider").style.backgroundColor = "#648BF0";
      document.querySelector("#slider").style.borderColor = "#648BF0";
      document.querySelector("#slides2").classList.remove("hidden");
    }, 300);
  }
});

var getWidth = function(elem) {
  var width = elem.scrollWidth + "px"; // Get it's height
  return width;
};

HORIZONTAL_PHONE.addEventListener("click", () => {
  if (
    document.querySelector("#horizontal-black").classList.contains("hidden")
  ) {
    document.querySelector("#horizontal-black").classList.remove("hidden");
  } else {
    document.querySelector("#horizontal-black").classList.add("hidden");
  }
});

VERTICAL_PHONE.addEventListener("click", () => {
  if (document.querySelector("#vertical-black").classList.contains("hidden")) {
    document.querySelector("#vertical-black").classList.remove("hidden");
  } else {
    document.querySelector("#vertical-black").classList.add("hidden");
  }
});

PORTFOLIO.addEventListener("click", event => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  console.dir(event.target.id);
  PORTFOLIO.querySelectorAll("li > button").forEach(el =>
    el.classList.remove("active")
  );
  CONTAINER.querySelectorAll(".container > img").forEach(el =>
    el.classList.remove("active")
  );
  var arr =[];
  CONTAINER.querySelectorAll(".container > img").forEach(el =>
    //arr.push(getComputedStyle(el).order)
    arr.push(el.src)
  );
  shuffle(arr);
  CONTAINER.querySelectorAll(".container > img").forEach((el, index) =>
    //el.style.order = arr[index]
    el.src = arr[index]
  );
  event.target.classList.add("active");
});

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

CONTAINER.addEventListener("click", event => {
  CONTAINER.querySelectorAll(".container > img").forEach(el =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

function submitForm() {
  MESSAGE_BLOCK.classList.remove("hidden");
  const SUBJECT = document
    .querySelector("#quote > div > form > input:nth-child(3)")
    .value.toString();
  const DESCRIPTION = document
    .querySelector("#quote > div > form > textarea")
    .value.toString();
  const TEMA = document.getElementById("topic");
  const OPISANIE = document.getElementById("description");
  SUBJECT != ""
    ? (TEMA.innerText = `Тема: ${SUBJECT}`)
    : (TEMA.innerText = "Без темы");
  DESCRIPTION != ""
    ? (OPISANIE.innerText = `Описание: ${DESCRIPTION}`)
    : (OPISANIE.innerText = "Без описания");
    return false;
}

CLOSE_BUTTON.addEventListener("click", () => {
  document.getElementById("topic").innerText = "";
  document.getElementById("description").innerText = "";
  MESSAGE_BLOCK.classList.add("hidden");
  FORM.reset();
});
