function changeImg(num) {
	var p = document.getElementById("productImg");
	switch(num) {
		case 1: p.innerHTML = "<img src='img/mac.jpg' style='width:100%;'>"; break;
		case 2: p.innerHTML = "<img src='img/ipad.jpg' style='width:100%;'>"; break;
		case 3: p.innerHTML = "<img src='img/iphone.png' style='width:100%;'>"; break;
		case 4: p.innerHTML = "<img src='img/applewatch.png' style='width:100%;'>"; break;
		case 5: p.innerHTML = "<img src='img/airpods.png' style='width:100%;'>"; break;
		case 6: p.innerHTML = "<img src='img/etc.png' style='width:100%;'>"; break;
	}
}
function viewChart() {
	var chart = document.getElementById("chart");
	chart.innerHTML = "Apple사 스마트폰의 점유율은 2020년 55%, 2021년 60%로 증가했다.";
}
var p;
function init() {
	p = document.getElementById("p");
	p.addEventListener("mouseover", over);
	p.addEventListener("mouseout", out);
}
function over() {
	p.style.color = "mistyrose";
}
function out() {
	p.style.color = "ghostwhite"
}
var cur = new Date();
if(cur.getSeconds() % 2 == 0)
	document.body.style.backgroundColor = "lightgray";
else
	document.body.style.backgroundColor = "beige";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = new Image();
img.onload = function() {
	context.drawImage(img, 20, 20, 400, 220);
}
img.src = "img/pichart.png"
	
var timerID = null;
function startTimer(time) {
	timerID = setTimeout("load('https://www.apple.com/kr')", time);
	document.getElementById("applelogo").title = "타이머 작동 시작";
}
function cancelTimer() {
	if(timerID != null)
		clearTimeout(timerID);
}
function load(url) {
	window.open(url);
}