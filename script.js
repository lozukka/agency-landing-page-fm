const openNav = document.getElementById("open-nav");
const nav = document.getElementById("nav-wrapper");

openNav.addEventListener("click", (event) => {
  nav.style.display = "block";
});

nav.addEventListener("click", (event) => {
  nav.style.display = "none";
});
