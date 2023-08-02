
            var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Foto-SlideShow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}


        function validateform() {
           var Name = document.forms["Message-form"]["Name"].value;
           var Email = document.forms["Message-form"]["Email"].value;
           var Interest = document.forms["Message-form"]["Interest-Customer"].value;
        } 
        
    
    if (Name == " ")
        {alert("Tolong isi nama dengan lengkap 🙏");
        return false
        }