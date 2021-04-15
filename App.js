//DOM
const btnsAction = document.querySelectorAll(".action>svg .fill");
const buttonSub = document.querySelector(".subscribe .button");

//handle buttons
const DOM = {
  toggleSubscribe() {
    buttonSub.addEventListener("click", event => {
      event.preventDefault();

      buttonSub.classList.toggle("active");
      if (buttonSub.textContent == "INSCREVA-SE") {
        buttonSub.innerText = "INSCRITO";
      } else {
        buttonSub.innerText = "INSCREVA-SE";
      }
    });
  },

  ChangeColorActions() {
    btnsAction.forEach(elem => {
      elem.addEventListener("click", event => {
        event.preventDefault();
        !elem.style.fill
          ? (elem.style.fill = "#2c5fd5")
          : (elem.style.fill = "");
      });
    });
  },
};

DOM.toggleSubscribe();
DOM.ChangeColorActions();
