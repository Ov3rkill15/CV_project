const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// cek mode yang tersimpan
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleButton.textContent = "🌙 Dark Mode";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    toggleButton.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  }
});
