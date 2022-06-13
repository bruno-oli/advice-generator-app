function getApiInfo() {
  fetch("https://api.adviceslip.com/advice").then(response => {
  return response.json()
  }).then(i => {
    const adviceId = document.querySelector(".advice-id")
    const adviceText = document.querySelector(".advice")
    adviceId.innerHTML = "ADVICE #"+i.slip.id
    adviceText.innerHTML = '"' + i.slip.advice + '"'
    function typeWriter(e, tempo) {
      if (e.classList.contains("writing")) {
        return 0
      } else {
        const textArray = e.innerHTML.split("")
        e.classList.add("writing")
        setTimeout(function () {e.classList.remove("writing")}, tempo * e.innerHTML.length);
        e.innerHTML = ''
        textArray.forEach((letter, i) => {
          setTimeout(function() {
            e.innerHTML += letter
          }, tempo * i)
        })
      }
    }
    typeWriter(adviceId, 75)
    typeWriter(adviceText, 15)
  })
}

document.querySelector(".advice-new").addEventListener("click", () => {
  getApiInfo()
})

getApiInfo()