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


  
  






submit.addEventListener('click', function (e) {

  e.preventDefault();
  let nama= document.getElementById("id-nama").value
  let email=document.getElementById("id-email").value
  let destination=document.getElementById("id-interested").value

  let valid=0
  
  validate_name(nama);
  validate_email(email);
  validate_dest(destination); 
  
 

  function validate_name(a){
    if(a==""){document.getElementById("warn-name").style.visibility="visible";console.log("masuk email")}
    else {document.getElementById("warn-name").style.visibility="hidden";console.log("masuk email")
      valid+=1
    }
    
  }
  function validate_email(b){
    if(b==""){document.getElementById("warn-email").style.visibility="visible";console.log("masuk email")}
    else {document.getElementById("warn-email").style.visibility="hidden";console.log("masuk email") 
      valid+=1}
    
  }
  function validate_dest(c){
    if(c==""){document.getElementById("warn-interest").style.visibility="visible";console.log("masuk dest")}
    else { document.getElementById("warn-interest").style.visibility="hidden";
      console.log("masuk dest")
      valid+=1
    }
      
  }
  if(valid==3){confirm("Permintaan anda berhasil dikirim")}
    else{confirm("Permintaan anda gagal")}

    // document.getElementById("id-nama").innerHTML
    // document.getElementById("id-email").innerHTML=
    // document.getElementById("id-interested").innerHTML=
  }


)