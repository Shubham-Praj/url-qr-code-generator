document.addEventListener("DOMContentLoaded", function () {
  const QRURL = `https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=`;

  const btn = document.getElementById("qr-btn");
  const qrImg = document.getElementById("qr-img");

  let url = "";

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    url = tabs[0].url;
  });

  btn.addEventListener("click", () => {
    qrImg.src = QRURL + url;
    qrImg.style.display = "block";
  });
});
