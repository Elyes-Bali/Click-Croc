import React from "react";

import "./Market.css";

import { Input } from "@chakra-ui/react";

import Footer from "../footer/Footer";
const Market = () => {
 
  return (
    <div id="cmnt">
      <div className="mainSection">
        <div className="contentBox">
         
            <h1 className="text-bold">Bienvenue sur le marché</h1>
            <p>
            Tout un monde de produits au bout des doigts{" "}
              <i className="fa fa-diamond" aria-hidden="true"></i>
              <br />
              
            </p>
          
          <div>
            <div className="btnn rounded-pill ">
              <Input
                icon="search"
                placeholder="Search..."
             
              />
            </div>
          </div>
          
        </div>
        <div className="imgContainer">
          <img src="/images/market1.png" alt="home" />
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-12 mb-5 background-container">
           
              <h1 className="display-6 fw-bolder text-center">
              Nos produits{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </h1>
           
            <br />
            <hr />
          </div>
        </div>
      </div>
      
    

      {/* Items */}
      <div className="flex row text-center">
      <h3>Pas de produits pour le moment </h3>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mb-5">
        <ul className="pagination">
          
        </ul>
      </div>
      
      <Footer/>
    </div>
  );
};

export default Market;
