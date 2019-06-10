var p;
function init() { // 문서가 완전히 로드되었을 때 호출
	p = document.getElementById("p");
	p.addEventListener("mouseover", over); // 이벤트 리스너 등록
    p.addEventListener("mouseout", out); // 이벤트  리스너 등록
}
function over() {
	p.style.backgroundColor="red";
}
function out() {
	p.style.backgroundColor="white";
}

function changeImage() {
	var sel = document.getElementById("sel");
	var img = document.getElementById("myImg");
	img.onload = function () {  // 이미지 크기 출력
		 var mySpan = document.getElementById("mySpan");
		mySpan.innerHTML = img.width + "x" + img.height;
	}
	var index= sel.selectedIndex; // 선택된 옵션 인덱스
	img.src = sel.options[index].value; // <option>의 value 속성
}