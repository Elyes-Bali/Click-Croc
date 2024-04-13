import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Contact.css"

const Contact = ({id}) => {
  const [user,setUser]=useState({});


  const [msg, setMsg]= useState({
    name : "",
    email : "",
    message : ""
  });

  const handleChange = (event)=>{
 
  }



   const handleSubmit = async (e)=>{

  }


  useEffect(() => {   

  }, []);

  return (
    <div id={id}>
      <section>
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fd-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
              Vous avez des <b>Questions ?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/images/contactus.jpg" alt="Contact" className="ctn" />
            </div>
            <div className="col-md-6">
              
                <div className="mb-3">
                  <label for="name" className="form-label">
                  Votre nom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="User Name"
                    name="name"
                    value={msg.name}
                   disabled
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                  Adresse e-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                  disabled
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                  Votre message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    value={msg.message}
                    onChange ={handleChange}
                  ></textarea>
                </div>
                <button type="button" onClick={(e)=>handleSubmit(e)} className="btn btn-outline-primary rounded-pill px-4">Envoyer message
                  <i className="fa fa-paper-plane ms-2"></i>
                </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
