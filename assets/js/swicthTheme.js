const themeButton = document.querySelector(".swicthTheme")

themeButton.addEventListener("click", () => {
  if (document.querySelector("[data-color]").dataset.color === "light") {
    document.querySelector("[data-color]").dataset.color = "dark"
    themeButton.innerHTML = '\n <img src="/assets/img/sunIcon.svg"> \n'
  } else {
    document.querySelector("[data-color]").dataset.color = "light"
    themeButton.innerHTML = '\n <img src="/assets/img/moonIcon.svg"> \n'
  }
})
