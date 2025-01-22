document.addEventListener('DOMContentLoaded', () => {
    const openWindowButton = document.getElementById("openWindow");
    openWindowButton.addEventListener('click', () => {
    const width = 600;
    const height = 400;
    const x = Math.floor(Math.random() * (window.innerWidth - width));
    const y = Math.floor(Math.random() * (window.innerHeight - height));
        new WinBox({
          title: "Brescia Calcio",
          x: x,
          y: y,
          url: "prog1.html",
          width: "600px",
          height: "400px",
          border: "10px",
          background: "#202020",
        });
      });
    });