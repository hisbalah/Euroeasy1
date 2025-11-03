function saveCookies(stat, mark) {
  localStorage.setItem("stat", stat);
  localStorage.setItem("mark", mark);
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-bar").style.display = "none";
  document.getElementById("cookie-modal").style.display = "none";
}

document.getElementById("cookie-accept").onclick = () => saveCookies(true,true);
document.getElementById("cookie-accept-2").onclick = () => saveCookies(true,true);
document.getElementById("cookie-deny").onclick = () => saveCookies(false,false);
document.getElementById("cookie-deny-2").onclick = () => saveCookies(false,false);

document.getElementById("cookie-settings-open").onclick = () => {
  document.getElementById("cookie-modal").style.display = "flex";
};

document.getElementById("cookie-close").onclick = () => {
  document.getElementById("cookie-modal").style.display = "none";
};

if (localStorage.getItem("cookiesAccepted") === "true") {
  document.getElementById("cookie-bar").style.display = "none";
}
