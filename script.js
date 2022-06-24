// Creare un piccolo counter
// Partiamo dal solo body in HTML

// Generiamo da JS due bottoni ed un DIV
// Inseriamo gli elementi a schermo
// Ne div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
// Aggiungere al primo bottone la funzionalità di incremento
// Aggiungere al secondo bottone la funzionalità di decremento
// Bonus:

// mettiamo un limite di decremento a 0
// mettiamo un limite di incremento a 10
// Super bonus:

// Rimuovere il codice duplicato

(function () {
  let count = 0;

  const $buttonDecrease = document.createElement("button");
  $buttonDecrease.innerText = "-";
  $buttonDecrease.addEventListener("click", () => {
    $counterBox.innerHTML = count--;
  });

  const $counterBox = document.createElement("div");
  $counterBox.style.width = "200px";
  $counterBox.style.textAlign = "center";
  $counterBox.innerText = `${count}`;

  const $buttonIncrease = document.createElement("button");
  $buttonIncrease.innerText = "+";
  $buttonIncrease.addEventListener("click", () => {
    $counterBox.innerHTML = count++;
  });

  document.body.append($buttonDecrease, $counterBox, $buttonIncrease);
})();
