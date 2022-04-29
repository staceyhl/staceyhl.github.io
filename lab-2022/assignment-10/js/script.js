const targetImg = document.getElementById("flame");
const btn = document.getElementById("cig");
btn.onclick = function () {
  if (targetImg.style.display !== "block") {
    targetImg.style.display = "block";
  } else {
    targetImg.style.display = "none";
  }
};