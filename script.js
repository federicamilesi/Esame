document.addEventListener('DOMContentLoaded', () => {
    const openWindowButton = document.getElementById("openWindow");
    openWindowButton.addEventListener('click', () => {
        new WinBox({
          title: "Brescia Calcio",
          url: "prog1.html",
          width: "600px",
          height: "400px",
          onfocus: () => console.log("La finestra è attiva."),
          onclose: () => console.log("Hai chiuso la finestra.")
        });
      });
    });