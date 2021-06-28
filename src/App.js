// import logo from './logo.svg';
// import './App.css';

import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Infrastructure from './Components/Infrastructure'
import Service from './Components/Service'
import Produit from './Components/Produit'
import { BrowserRouter,  Router, Switch, Route } from "react-router-dom";

import { useState, useEffect } from 'react'


//import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})
const a=2
const App=()=> {


  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(a)
  }, [])




  return (
    <>
    {/* <Header  data={landingPageData.Header}/>
    <Body data={landingPageData.Features}/>
    <Footer data={landingPageData.About}/> */}

    <BrowserRouter>
      <Route exact path="/" component={Header}/>
      <Route exact path="/" component={Body}/>
      <Route exact path="/" component={Footer}/>
      <Route exact path="/infrastructure" component={Infrastructure}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/produit" component={Produit}/>
    </BrowserRouter>
    </>
  );
}

export default App;
