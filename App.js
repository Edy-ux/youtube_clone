//add button subscribe on-off
const BtnSubscribe = {
  btn: document.querySelector(".subscribe .button"),

  toggleSubscribe() {
    this.btn.addEventListener("click", event => {
     event.preventDefault()
      this.btn.classList.toggle("active")
      if (this.btn.textContent == "INSCREVA-SE") {
        this.btn.innerText = "INSCRITO"
      } else {
        this.btn.innerText = "INSCREVA-SE"
      }
    })
  },
}

BtnSubscribe.toggleSubscribe();
