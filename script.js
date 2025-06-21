function toggleMenu() {
  const nav = document.getElementById("categories");
  if (nav.style.width === "250px") {
    nav.style.width = "0";
  } else {
    nav.style.width = "250px";
  }
}
