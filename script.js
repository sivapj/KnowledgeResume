var obj = document.querySelectorAll("li");
console.log(obj);
// obj.forEach(function (val, i) {
//   // if (i % 2 == 0) {
//   //   val.firstElementChild.style.transform = "translateX(100px)";
//   // } else {
//   //   val.firstElementChild.style.transform = "translateX(-100px)";
//   // }
// });
window.addEventListener("scroll", function (e) {
  obj.forEach(function (val, i) {
    if (
      val.firstElementChild.getBoundingClientRect().top < window.pageYOffset
    ) {
      if (i % 2 == 0) {
        val.firstElementChild.style.transform = "translateX(0px)";
      } else {
        val.firstElementChild.style.transform = "translateX(0px)";
      }
    }
  });
});
