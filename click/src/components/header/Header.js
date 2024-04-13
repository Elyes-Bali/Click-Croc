import React from "react";
import "./Header.css";
import { Avatar } from "@chakra-ui/react";
const Header = () => {
  return (
    <div>
      <nav class="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="/">
              <p>
                <b>C&C</b>
              </p>
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Accueil
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/market">
                  Marché
                </a>
              </li>
            </ul>

            <div className="dropdown">
              <>
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  <span className="badge rounded-pill badge-notification bg-danger"></span>
                </a>
              </>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/Create">
                    Créer
                  </a>
                </li>
              </ul>
            </div>

         
          </div>

          <div class="d-flex align-items-center">
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <Avatar
                  className="avatar"
                  size="md"
                  cursor="pointer"
                  name="User"
                  src=""
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <>
                  <li>
                    <a className="dropdown-item" href="/login">
                      <i className="fa fa-sign-in" aria-hidden="true" />
                      &nbsp; Connexion
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/register">
                      <i className="fa fa-user-plus" aria-hidden="true" />
                      &nbsp; Registre
                    </a>
                  </li>
                </>

                <li>
                  <a className="dropdown-item" href="/dashboard">
                    <i className="fa fa-tachometer" aria-hidden="true" />
                    &nbsp; Tableau de bord
                  </a>
                </li>

                <a className="dropdown-item" href="/clt">
                  <i className="fa fa-archive" aria-hidden="true" />
                  &nbsp; Mes Offres
                </a>

                <li>
                  <a className="dropdown-item" href="/Profil">
                    <i className="fa fa-cog" aria-hidden="true" />
                    &nbsp; Paramètres
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" onClick="" href="/logout">
                    <i className="fa fa-sign-out" aria-hidden="true" />
                    &nbsp; Déconnexion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
