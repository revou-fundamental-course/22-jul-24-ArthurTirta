  // Mekanik Slide
  let slideIndex = 1; 
 
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("gambar");
    let feed =document.getElementsByClassName("feedback");
    let feed_img =document.getElementsByClassName("desc-img");
    let feed_img_desc =document.getElementsByClassName("desc_desc_autos");
    if (n > x.length) { slideIndex = 1; }
    else if (n < 1) { slideIndex = x.length; }
    else {slideIndex = n;}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      feed[i].style.display = "none";
      feed_img[i].style.display = "none";
      feed_img_desc[i].style.display = "none";
     }
      x[slideIndex-1].style.display= "block";
      feed[slideIndex-1].style.display= "block";
      feed_img[slideIndex-1].style.display= "block";
      feed_img_desc[slideIndex-1].style.display= "block";
      
    }

  // Autoslide Function
    setInterval(() => {
      plusDivs(1);},3000
    );
    
  // Auto Scroll Navigate function 
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
    
// Form Validation
function ValidateForm(){

  
  let nama=document.getElementById("id-nama").value
  let email=document.getElementById("id-email").value
  let destination=document.getElementById("id-interested").value

  Validation(nama,email,destination)



  function Validation(a,b,c){
    let z= document.getElementById("status-message")
    if(a ==""|| b==""||c==""){pesan = "Mohon Lengkapi Data Diatas"}
    else{pesan = "Pesanan Anda Berhasil Dikirimkan"}
      z.innerHTML = pesan
      confirm(pesan)
    }
  }


