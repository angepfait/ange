const Footer = () => {

  return (

    <body>
      <footer id="footer">

        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6 footer-contact">
                {/* <!-- <h3>logo<span>.</span></h3> --> */}
                <h3>logo</h3>
                <p>
                  Ahogbohoue COTONOU Stade de l'amitié <br />
                  <strong>Phone:</strong> +229 21 38 18 60<br />
                  <strong>Email:</strong> trinet@trinet-layers.com<br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Lien utile</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">Acceuil</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">Partenaire</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">Services</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">Clients</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">Produits</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Partenaires</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">GATEWAY COMMUNICATIONS</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">SKYVISION </a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">LYZ-DIGITAL</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="test">ACCESSLINK CORPORATION</a></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Rejoignez notre Bulletin</h4>
                {/* <!-- <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p> --> */}
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="abonnez-vous" />
                </form>
              </div>

            </div>
          </div>
        </div>



        <div class="container d-md-flex py-4">

          <div class="mr-md-auto text-center text-md-left">
            <div class="copyright">
              All Rights Reserved Copyright 2021 &copy; <strong><span>TRINET-LAYERS</span></strong>.
            </div>
            <div class="credits"></div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="twitter" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="facebook" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="instagram" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="google-plus" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>
























      </footer>

      <a href="test" class="back-to-top"><i class="icofont-simple-up"></i></a>
    </body>


  );
}

export default Footer;