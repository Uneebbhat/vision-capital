function toggleHide() {
  const mobNav = document.querySelector(".mobile__nav");
  if (mobNav.style.top === "100px") {
    mobNav.style.top = "-280px";
  } else {
    mobNav.style.top = "100px";
  }
}
