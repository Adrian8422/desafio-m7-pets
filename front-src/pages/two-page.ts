import { Router } from "@vaadin/router";

class Twopage extends HTMLElement {
  connectedCallback() {
    this.render();
    const style = document.createElement("style");
    style.innerHTML = `
      .container-title{
          display: flex;
          font-size: 65px;
          flex-direction: column;
          justify-content: center;
          width: 66vh;
          margin: 0 auto;
          color: green;
          font-family: 'Source Code Pro', monospace;
      }
      .text{
          max-width:25vh;
          font-size:25px;
          margin: 0 auto
      }
      .container-hands{
          display:flex;
          flex-direction:row;
          justify-content: space-evenly;
        }
      `;
    this.appendChild(style);
  }
  addlisteners() {
    const button = this.querySelector(".button-prueba");
    button.addEventListener("click", () => {
      Router.go("otra-pagina");
    });
  }
  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    


       <h1>Cambio de pagina</h1>
       <button class="button-prueba">Prueba</button>
       
      
     
      `;

    this.appendChild(div);
    this.addlisteners();
  }
}
customElements.define("two-page", Twopage);
