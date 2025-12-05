const template = document.createElement("template");
template.innerHTML =`
        <style>
            @import url("/Style/Main.css")
        </style>
        <footer class="foot">
          <ul class="socials">
            <li><strong>Follow: </strong></li>
            <li>
              <a href="https://github.com/lamps-lab">
                <img src="/websiteResource/github-mark.png" alt="" /> Github</a
              >
            </li>
          </ul>
        </footer>
    `;



class FooBar extends HTMLElement{
    constructor(){
        super();
    }




connectedCallback(){
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
}
}

window.customElements.define("page-footer",FooBar);