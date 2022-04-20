class Otrapagina extends HTMLElement {
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
  render() {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="container-page">
          <h1>otra-pagina</h1>
        </div> 
        `;

    this.appendChild(div);
  }
}
customElements.define("otra-pagina", Otrapagina);
