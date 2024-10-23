






const audio = document.querySelector(".play-position audio");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const s = Snap(".progress-indicator");
const progressI = document.querySelector(".progress--indicator");
const currentTime = document.querySelector(".time__current");
const totalTime = document.querySelector(".time__total");

play.addEventListener("click", function () {
  play.setAttribute("hidden", true);
  pause.removeAttribute("hidden");
  audio.play();
});

pause.addEventListener("click", function () {
  pause.setAttribute("hidden", true);
  play.removeAttribute("hidden");
  audio.pause();
});

audio.addEventListener(
"loadedmetadata",
function () {
  audio.setAttribute("data-duration", audio.duration * 1000);
  let min = Math.floor(audio.duration / 60 << 0);
  let sec = Math.floor(audio.duration % 60);
  totalTime.textContent = min + ":" + (sec < 10 ? "0" : "") + sec;
},
false);


audio.addEventListener(
"timeupdate",
function () {
  let min = Math.floor(audio.currentTime / 60 << 0);
  let sec = Math.floor(audio.currentTime % 60);
  currentTime.textContent = min + ":" + (sec < 10 ? "0" : "") + sec;
},
false);


let radius = 50;
let circumference = 2 * Math.PI * radius;

audio.onplay = function () {
  let duration = Math.round(audio.getAttribute("data-duration"));
  let progressIndicator = s.select(".progress--indicator");
  progressIndicator.animate(
  { "stroke-dashoffset": "0px" },
  duration);

};

audio.onpause = function () {
  let progressIndicator = s.select(".progress--indicator");
  progressIndicator.stop();
};

function calculateProgress(value) {
  let progress = value / 100;
  let dashoffset = circumference * (1 - progress);
  progressI.style.strokeDashoffset = dashoffset;
}

progressI.style.strokeDasharray = circumference;
calculateProgress(0);

//copy link to clipboard

var $temp = $("<input>");
var $url = $(location).attr('href');

$('.clipboard').on('click', function() {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();
  $(".clipboard").text("URL copied!");
})

 //text collapse Toggle

 $(document).on('click', '.collapsible', function () {
  $(this).toggleClass('collapsed');
});



