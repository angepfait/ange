

const Header=()=> {

    return (
      <body>
      <header id="header" class="fixed-top">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xl-10 d-flex align-items-center">
          {/* <!-- <h1 class="logo mr-auto"><a href="index.html">logo<span>.</span></a></h1> --> */}
          <h1 class="logo mr-auto"><a href="index.html">logo</a></h1>
        
          <nav class="nav-menu d-none d-lg-block">
            
                








            <ul>
              <li class="active"><a href="#header">Acceuil</a></li>
              <li><a href="#partenaires">Partenaires</a></li>
              <li><a href="#clients">Clients</a></li>

              <li class="drop-down"><a href="test">Activités</a>
                <ul>
                  <li class="drop-down"><a href="">Infrastructures</a>
                    <ul>
                      <li><a href="infrastructure">Réseau</a></li>
                      <li><a href="test">VSAT</a></li>
                      <li><a href="test">Téléphonie</a></li>
                    </ul>
                  </li>
                  <li class="drop-down"><a href="test">Services</a>
                    <ul>
                      <li><a href="service">Sécurité Réseau</a></li>
                      <li><a href="test">Surveillance et Dépannage</a></li>
                      <li><a href="test">Audit et Conseil</a></li>
                    </ul>
                  </li> 
                </ul>
                
              </li>
              {/* <li class="drop-down"><a href="test">Produits</a>
                <ul>
                  <li><a href="test">Mikrotik</a></li>
                  <li><a href="test">Motorola</a></li>
                  <li><a href="test">Antennes</a></li>
                </ul>
              </li> */}
              <li><a href="produit" >Produits</a></li>
              
              <li><a href="#contact" >Contact</a></li>
              
            </ul>
          </nav>
        </div>
      </div>

    </div>
  </header>


  <section id="hero">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active"style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)'}}>
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Bienvenue sur <span>trinet layers</span></h2>
              <p class="animate__animated animate__fadeInUp">Basé sur une connaissance approfondie des différentes technologies de l’information et de la communication,<br/> le groupe TRINET-LAYERS offre des services variés, adaptés aux besoins de la clientèle.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">en savoirplus</a>
            </div>
          </div>
        </div>

        <div class="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.png)'}} >
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Bienvenue sur <span>trinet layers</span></h2>
              <p class="animate__animated animate__fadeInUp">Notre but finalement atteint est de fournir des solutions informatiques convenant à tous modèles d’entreprises,<br/> ceci va des solutions d’utilisations communautaires les Petites et Moyennes Entreprises ou Industries (PME/PMI) aux grandes entreprises et institutions internationales.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">en savoirplus</a>
            </div>
          </div>
        </div>

     
        <div class="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.png)'}} >
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Bienvenue sur <span>trinet layers</span></h2>
              <p class="animate__animated animate__fadeInUp">Pour l’année 2010 nous ouvrons nos bureaux en République du Congo précisément à Pointe Noire.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">en savoirplus</a>
            </div>
          </div>
        </div>

      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </section> 

  
       
        
      </body>
    );
  }
  
  export default Header;