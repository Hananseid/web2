document.addEventListener("DOMContentLoaded", () => {
  const checkInInput = document.getElementById("checkin");
  const checkOutInput = document.getElementById("checkout");

  if (checkInInput && checkOutInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const options = { year: "numeric", month: "long", day: "numeric" };
    checkInInput.placeholder = today.toLocaleDateString("en-US", options);
    checkOutInput.placeholder = tomorrow.toLocaleDateString("en-US", options);
  }

  const form = document.getElementById("form_salvataggio_prenotazione");
  const thankYou = document.getElementById("thankYouMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const cardType = document.getElementById("CardType").value.trim();
      const cardHolder = document.getElementById("CardHolder").value.trim();
      const card1 = document.getElementById("CardNumber1").value.trim();
      const card2 = document.getElementById("CardNumber2").value.trim();
      const card3 = document.getElementById("CardNumber3").value.trim();
      const card4 = document.getElementById("CardNumber4").value.trim();

      if (!cardType || !cardHolder || !card1 || !card2 || !card3 || !card4) {
        alert("Please fill in all required fields before confirming payment.");
        return;
      }

      if (!/^\d+$/.test(card1 + card2 + card3 + card4)) {
        alert("Credit card number must contain only digits.");
        return;
      }

      if (thankYou) {
        form.reset();
        thankYou.style.display = "block";
      }
    });
  }

  const cardInputs = document.querySelectorAll(".autotab");
  if (cardInputs.length > 0) {
    cardInputs.forEach((input, i) => {
      input.addEventListener("input", () => {
        if (input.value.length === input.maxLength) {
          if (cardInputs[i + 1]) {
            cardInputs[i + 1].focus();
          }
        }
      });
    });
  }
});
