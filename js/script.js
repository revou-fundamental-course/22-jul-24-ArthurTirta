

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gambar");
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  // else {slideIndex = n;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

  }
  
  x[slideIndex-1].style.display="block";
 
  
}

var slideIndex = 1;
// showDivs(slideIndex);
console.log(slideIndex);

setInterval(() => {plusDivs(1);},1000);

function scrollHome() {
  var a = document.querySelector(".part1");
  a.scrollIntoView();
 }
 function scrollOurPack() {
  var a = document.querySelector(".part2");
  a.scrollIntoView();
 }
 function scrollCallUs() {
  var a = document.querySelector(".part3");
  a.scrollIntoView();
 }
//  function scrollOurPack() {
//   var b = document.getElementsByClassName("part2");
//   b.scrollIntoView();
//  }
//  function scrollCallUs() {
//   var c = document.getElementsByClassName("part3");
//   c.scrollIntoView();
//  }