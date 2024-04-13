import React from 'react'
import "./Register.css"
import { Link, NavLink } from "react-router-dom";
import Footer from '../footer/Footer'
const Register = () => {
  return (
    <div>
    <div className="container shadow my-5">
      <div className="row justify-content-end">
        <div
          className="col-md-5 d-flex flex-column
               align-items-center text-white justify-content-center formm order-2"
        >
          <h1 className="display-4 fw-bolder">Bonjour, Ami</h1>
          <p className="lead text-center">Entrez vos coordonnées pour vous inscrire</p>
          <h5 className="mb-4">OU</h5>
          <NavLink
            to="/login"
            className="btn btn-outline-light rounded-pill pb-2 w-50 text-black"
          >
            Connexion
          </NavLink>
        </div>
        <div className="col-md-6 p-5">
          

          <form >
            <div class="mb-3">
              <label for="name" class="form-label">
              Nom d'utilisateur
              </label>
              <input
                placeholder="Nom d'utilisateur"
                type="text"
                class="form-control"
                id="name"
                name="username"
                value=""
                onChange=""
                
              />
              
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
              Adresse e-mail
              </label>
              <input
                placeholder="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value=""
                onChange=""
              />
              <div id="emailHelp" class="form-text">
              Nous ne communiquerons jamais votre adresse électronique à qui que ce soit.
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" >
              Mot de passe
              </label>
              <input
             placeholder="***********"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                value=""
                onChange="" 
              />
            </div>

            
           

            <br/>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
              J'accepte les conditions générales
              </label>
            </div>
            <div  >
            Envie d'être vendeur ? <Link to="/logup">cliquez ici</Link>

            </div>

            <button  type="button" class="btn btn-primary w-100 mt-4 rounded-pill">
              Registre
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Register