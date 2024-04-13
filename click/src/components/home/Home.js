import React from "react";
import "./Home.css";
import Footer from "../footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Slider from "../slider/Slider"
const Home = () => {
  return (
    <div className="home ">
    <section>
      <div className="div1 row ">
        <div className="div2 col-md-6 ">
          <div className="container txte justify-content-center leadder">
            <h1 className="lead text-center fs-1 mb-5 text-black ">
              {" "}
              MEILLEUR SITE WEB D'ACHAT{" "}
            </h1>
            <h2>
              <strong>
                tout entre vos mains pour expérimenter une nouvelle façon de
                faire du shopping{" "}
              </strong>
            </h2>
            <a className="btn btn-info mb-4 mt-5" href="/market">
              Voir plus
            </a>
          </div>
        </div>
        <div className="div3 col-md-6"></div>
      </div>
    
      <div className=" about mt-2">
        <About id="contact" />
      </div>
      
      <div className=" w-50 mb-5 slider">
        <Slider />
      </div>
      <div className="mb-5 ">
      <Contact id="contact" />
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default Home;
