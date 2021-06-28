

import Header_2 from './Header_2'
import Footer from './Footer'
import axios from 'axios'

import React, {useEffect , useState} from 'react'


//import { BrowserRouter,  Router, Switch, Route } from "react-router-dom";

const Produit = () => {

    const [Mikrotik, setMikrotik] = useState([])


    

    useEffect(() => {

        axios.get('http://localhost:1337/mikrotiks')
        .then(function (response) {
            setMikrotik(response.data)

            //console.log(response.data)
            //  console.log(Mikrotik);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    },[null])



     

    return (
   
        <>
            <Header_2 />

            <section id="team" class="team section-bg test">
                <div class="container" data-aos="zoom-in">
                    <div class="section-title">
                        <h2>produits</h2>
                        {/* <p> Grace à ses services de qualité trinet a pu gagner de nombreux clients partout dans le monde </p> */}
                    </div>
                    <section id="portfolio" class="portfolio">
                        <div class="container">

                            {/* <div class="section-title">
                            <h2>Portfolio</h2>
                            <h3>Check our <span>Portfolio</span></h3>
                            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                            </div> */}

                            <div class="row ">
                                <div class="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        {/* <li data-filter="*" class="filter-active">Mikrotik</li> */}
                                       
                                        <li data-filter=".Mikrotik" class="filter-active">Mikrotik</li>
                                        <li data-filter=".Motorola">Motorola</li>
                                        <li data-filter=".Antennes">Antennes</li>
                                    </ul>
                                </div>
                            </div>
                                
                        <div class='row '>
                               
                                {/* <div class="  col-lg-4 col-md-6 portfolio-item Motorola "> */}

                                    {
                                        Mikrotik.map((mikrotik,id)=>{
                                            return(

                                                      < div class="  col-lg-4 col-md-6 portfolio-item Motorola ">                              
                                               
                                                   <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
                                                   
                                                    <div class="portfolio-info">
                                                        <h4>{mikrotik.name} </h4>
                                                        <p>{mikrotik.description} </p>
                                                        
                                                    </div>

                                                     
                                                </div>
                                                
                                            )
                                        })
                                        
                                    }

                                  {/* </div>    */}


                                
                                  </div> 

                                
                                   <div class='row'>  

                                   {/* <div class=" row col-lg-4 col-md-6 portfolio-item Mikrotik "> */}

                                    {
                                        Mikrotik.map((mikrotik,id)=>{
                                            return(

                                                      <div class=" col-lg-4 col-md-6 portfolio-item Mikrotik ">                              
                                               
                                               <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
                                                   
                                                    <div class="portfolio-info">
                                                        <h4>{mikrotik.name} </h4>
                                                        <p>{mikrotik.description} </p>
                                                        
                                                    </div>

                                                     
                                                </div>
                                                
                                            )
                                        })
                                        
                                    }

                                  {/* </div>       */}
                                  </div> 

                                

                                  <div class='row'> 
                                   {/* <div class=" row col-lg-4 col-md-6 portfolio-item Antennes "> */}

                                    {
                                        Mikrotik.map((mikrotik,id)=>{
                                            return(

                                                      <div class=" col-lg-4 col-md-6 portfolio-item Antennes ">                              
                                               
                                               <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                                                   
                                                    <div class="portfolio-info">
                                                        <h4>{mikrotik.name} </h4>
                                                        <p>{mikrotik.description} </p>
                                                        
                                                    </div>

                                                     
                                                </div>
                                                
                                            )
                                        })
                                        
                                    }
                                    {/* </div>  */}
                                  </div>               
                               


                                {/* <div class="row  Mikrotik">

                                    {
                                        Mikrotik.map((mikrotik,id)=>{
                                            return(

                                                                                    
                                                <div class="col-lg-4 col-md-6 portfolio-item " key={id}>
                                                    <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                                                    
                                                    <div class="portfolio-info">
                                                        <h4>{mikrotik.name} </h4>
                                                        <p>{mikrotik.description} </p>
                                                        
                                                    </div>

                                                </div>      
                                            
                                                
                                            )
                                        })
                                        
                                    }
                                </div> */}


                                {/* <div class="row  Antennes">

                                    {
                                        Mikrotik.map((mikrotik,id)=>{
                                            return(

                                                                                    
                                                <div class="col-lg-4 col-md-6 portfolio-item " key={id}>
                                                   <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
                                                   
                                                    <div class="portfolio-info">
                                                        <h4>{mikrotik.name} </h4>
                                                        <p>{mikrotik.description} </p>
                                                        
                                                    </div>

                                                </div>      
                                            
                                                
                                            )
                                        })
                                        
                                    }
                                </div> */}



                                    


                                   
                                    

                                   

                                


                                

                                


















                                
                                
                           


                               












                              







                               



                                


                            
                        </div>
                    </section>

                    
                </div>
            </section>

            <section id="clients" class="clients">
                <div class="container">

                   

                </div>
            </section>
            <Footer />

        </>
    );
}

export default Produit;
