document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMloaded');
  const buttons = document.querySelectorAll('.openWindow');


  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const url = button.getAttribute('data-url');
          const width = 600;
          const height = 400;
          const x = Math.floor(Math.random () * (window.innerWidth - width));
          const y = Math.floor(Math. random () * (window.innerHeight - height));
          new WinBox({
              x: x,
              y: y,
              title: "I miei Progetti",
              url: url, 
              width: "600px",
              height: "400px",
              border: "0.3em",
              background: "#202020"
          });
      });
  });
});