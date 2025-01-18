document.getElementById("switch").onclick = () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.getElementById("switch").src = "assets/images/moon.webp";
  } else {
    document.body.classList.add("dark-mode");
    document.getElementById("switch").src = "assets/images/sun.webp";
  }
};
let counter = 0;
document.getElementById("btn").onclick = () => {
  counter++;
  document.getElementById("input").value = counter;
};
document.getElementById("remove").onclick = () => {
  counter = 0;
  document.getElementById("input").value = counter;
};