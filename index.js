var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
});

let a, b, c;
document.getElementById("check").addEventListener("click", () => {
  event.preventDefault();
  a = document.getElementById("url");
  b = document.getElementById("mail");
  c = document.getElementById("output");
  if (a.value == "" && b.value == "") {
    c.innerHTML = `<span style="color:red;">*Please enter the info</span>`;
    disappear();
  } else if (a.value == "" || b.value == "") {
    c.innerHTML = `<span style="color:red;">*Please fill both the info</span>`;
    disappear();
  }
  else {
    c.innerHTML = `<span style="color:green;">*Your entry is recorded</span>`;
    a.value = "";
    b.value = "";
    disappear();
  }
});
// subscribe- section14
document.getElementById("check2").addEventListener("click", () => {
  event.preventDefault();
  a = document.getElementById("name");
  b = document.getElementById("mail2");
  c = document.getElementById("output2");
  if (a.value == "" && b.value == "") {
    c.innerHTML = `<span style="color:red;">*Please enter the info</span>`;
    disappear();
  } else if (a.value == "" || b.value == "") {
    c.innerHTML = `<span style="color:red;">*Please fill both the info</span>`;
    disappear();
  }
  else {
    c.innerHTML = `<span style="color:green;">*Your entry is recorded</span>`;
    a.value = "";
    b.value = "";
    disappear();
  }
});
function disappear() {
  setTimeout(function () {
    c.innerHTML = "";
  }, 3000);
}

