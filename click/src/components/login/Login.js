import React from 'react'
import "./Login.css"
import { NavLink } from "react-router-dom";
import Footer from '../footer/Footer'
const Login = () => {
  return (
    <div className="mddt">
    <div className="container shadow my-5">
      <div className="row">
        <div
          className="col-md-5 d-flex flex-column
               align-items-center text-white justify-content-center formm"
        >
          <h1 className="display-4 fw-bolder">Bienvenue</h1>
          <p className="lead text-center">
          Saisissez votre compte pour vous connecter
          </p>
          <h5 className="mb-4">OU</h5>
          <NavLink
            to="/register"
            className="btn btn-outline-light
           rounded-pill pb-2 w-50 text-black"
          >
            Registre
          </NavLink>
        </div>
        <div className="col-md-6 p-5">
          <h1 className="display-6 fw-bolder mb-5 ">CONNEXION</h1>

          <form className="logform">
            <div className="mb-3 pass">
              <i class="fas fa-envelope"></i>
              <input
                placeholder="E-mail"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value=""
                onChange=""
              />
            </div>

            <div className="mb-3 pass">
              <i class="fas fa-lock"></i>
              <input
                placeholder="Mot de passe"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value=""
                onChange=""
              />
            </div>
         
            
            <button
              type="submit"
              className="btn btn-primary  mt-4 rounded-pill btlog"
       
            >
              Connexion
            </button>
          
              <NavLink to="/check" className="forget">
                {" "}
                <h5 className="mb-4">Oubli du mot de passe ?</h5>
              </NavLink>
            
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Login