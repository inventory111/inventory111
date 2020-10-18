var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    captionText.innerHTML = document.querySelectorAll('.mySlides img')[slideIndex-1].alt;
  /*
  var dots = document.getElementsByClassName("demo");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    captionText.innerHTML = dots[slideIndex-1].alt;
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  */
  slides[slideIndex-1].style.display = "block";
}

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    items.forEach(render);
  }
}
function render(element, index, array){
    let div = document.createElement("div");
    document.getElementById("main").appendChild(div);
    div.classList.add("mySlides");
    if(index == 0){
        let att = document.createAttribute("style");
        att.value = "display: block;";
        div.setAttributeNode(att);
    }
    let numbertext = document.createElement("div");
    div.appendChild(numbertext);
    numbertext.classList.add("numbertext");
    numbertext.innerHTML =  index+1 +"/"+ array.length;
    let img = document.createElement("img");
    let att = document.createAttribute("style");
    att.value = "background-size: contain;max-width:700px;max-height:400px";
    img.setAttributeNode(att);
    let src = document.createAttribute("src");
    src.value = element.images[0];
    img.setAttributeNode(src);
    div.appendChild(img);
    let alt = document.createAttribute("alt");
    alt.value = element.name;
    if(element.qty > 1){
        alt.value += " x "+ element.qty;
    }
    img.setAttributeNode(alt);
    showSlides(array.length);
}