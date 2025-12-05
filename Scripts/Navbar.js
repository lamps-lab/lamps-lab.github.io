class Navbar extends HTMLElement{
    constructor(){
        super();
    }




connectedCallback(){
    this.innerHTML = `
       <div class="navbar">
        <div class="navbar_wrapper">
          <a class="home" href="/">LAMPS-LAB</a>
          <nav class="navbar_nav" id="site-navigation">
            <ul class="navlinks">
              <li><a href="/People">People</a></li>
              <li><a href="/Projects">Projects</a></li>
              <li><a href="/Publications">Publications</a></li>
              <li><a href="/Downloads">Downloads</a></li>
              <li><a href="/Resources">Resources</a></li>
            </ul>
          </nav>
        </div>
      
      </div>

    `;
}
}

customElements.define("nav-bar",Navbar);