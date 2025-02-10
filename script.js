document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMloaded');
  const buttons = document.querySelectorAll('.openWindow');


  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const url = button.getAttribute('data-url');
          const width = Math.floor(window.innerWidth * 0.6); 
          const height = Math.floor(window.innerHeight * 0.7);
          const x = Math.floor(Math.random () * (window.innerWidth - width));
          const y = Math.floor(Math. random () * (window.innerHeight - height));
          new WinBox({
              x: x,
              y: y,
              title: "I miei Progetti",
              url: url, 
              width: width,
              height: height,
              border: "0.3em",
              background: "#202020"
          });
      });
  });
});