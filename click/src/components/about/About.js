import React from "react";

const About = ({ id}) => {

  return (
    <div>
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/clickt.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6"><br/><br/><br/><br/>
              <h3 className="fs-5">À propos de nous</h3>
              <h1 className="display-6">
              Qui <b>sommes-nous</b> ?
              </h1>
              <hr />
              <p className="lead mb-4">
              Tout d'abord, nous vous souhaitons la bienvenue sur notre site web.
              Nous offrons à tous nos clients la possibilité d'avoir tous les produits dont ils ont besoin au bout des doigts.
              </p>
            
         
              <a
                href={`#${id}`}
                className="btn btn-primary rounded-pill px-4 py-2 ms-2"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
