function initMap() {
  const loc = { lat: 3.127887, lng: 101.59449 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 10,
    center: loc
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

//target navbar links and class btn, on click, call a function
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        //scroll and stop at minus 100 so navbar doesn't block the content
        scrollTop: $(hash).offset().top - 100
      },
      800 //speed of scrolling
    );
  }
});

window.addEventListener("scroll", function() {
  //when scrolling, change opacity of the navbar
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
