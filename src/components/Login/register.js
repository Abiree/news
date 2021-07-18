import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const inputStyle = {
    "outline": "0",
    "border-width": "0 0 1px",
    "border-color": "grey",
    "border-radius": "0px",
    "margin": "0px 0px 10px 0px",
    "width": "100%",
    "padding": "10px"
  };
  const hpStyle = {
    "text-align": "center"
  };



  /* -----------------formvalidation----------------------- */
const required = ( val ) => val && val.length;
const maxLength = ( len ) => ( val ) => !( val ) || ( val.length <= len );
const minLength = ( len ) => ( val ) => val && ( val.length >= len );
const isNumber = ( val ) => !isNaN( Number( val ) );
const validEmail = ( val ) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( val );

const IndividuForm = ( props ) => {
    const { toggle } = props;
  
    const handleSubmit = ( values ) => {
      console.log(values)
      const { FirstName, LastName, Email, password } = values;
      props.IndividuRegister( FirstName, LastName, Email, password );
      toggle();
  
    }
    return ( <LocalForm onSubmit={( values ) => handleSubmit( values )}>
      <Control.text model=".FirstName" id="FirstName" name="FirstName" style={inputStyle} className="form-control" placeholder="FirstName" rows={5} validators={{
          required,
          minLength: minLength( 3 ),
          maxLength: maxLength( 15 )
        }}/>
      <Errors className="text-danger" model=".FirstName" show="touched" messages={{
          required: 'Required, ',
          minLength: 'Must be greater than 3 characters',
          maxLength: 'Must be 15 characters or less'
        }}/>
      <Control.text model=".LastName" id="LastName" name="LastName" style={inputStyle} className="form-control" placeholder="LastName" rows={5} validators={{
          required,
          minLength: minLength( 3 ),
          maxLength: maxLength( 15 )
        }}/>
      <Errors className="text-danger" model=".LastName" show="touched" messages={{
          required: 'Required, ',
          minLength: 'Must be greater than 3 characters',
          maxLength: 'Must be 15 characters or less'
        }}/>
      <Control.text model=".Email" id="Email" name="Email" style={inputStyle} className="form-control" placeholder="Email" rows={5} validators={{
          required,
          validEmail
        }}/>
      <Errors className="text-danger" model=".Email" show="touched" messages={{
          required: 'Required, ',
          validEmail: 'Not a valid email'
        }}/>
      <Control model=".password" id="password" name="password" type="password" style={inputStyle} className="form-control" placeholder="Password" rows={5} validators={{
          required,
          minLength: minLength( 6 ),
          maxLength: maxLength( 15 )
        }}/>
      <Errors className="text-danger" model=".password" show="touched" messages={{
          required: 'Required, ',
          minLength: 'Must be greater than 6 characters',
          maxLength: 'Must be 15 characters or less'
        }}/>
      <div style={{
          "display" : "flex",
          "justify-content" : "center",
          "align-items" : "center"
        }}>
        <Button type="submit" style={{
            "background-color" : "#e74c3c",
            "border-color" : "#e74c3c"
          }}>Register</Button>
        
      </div>
    </LocalForm> );
  }

  const Register = ( props ) => {
    const { modal, toggle, unmountOnClose, toggleLogin } = props;
  

    const closeRegister = async () => {
        toggle();
      }
      const toggleToLogin = () => {
        closeRegister().then( toggleLogin() );
      }
    
      return ( <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <ModalBody>
          <div>
          <h5 style={hpStyle}>
            <b>Register</b>
          </h5>
          <p style={hpStyle}>
            Already have an account ?
            <b>
            <a href="#" onClick={toggleToLogin} style={{"color": "#e74c3c","margin-left":"10px"}}>Login</a></b>
          </p>

          </div>
          <div style={{
              "display" : "flex",
              "justifyContent" : "center"
            }}>
            
          </div>
          <h6 style={{
              "margin-top" : "10px"
            }}>
            <b>Sign Up By mail   :</b>
          </h6>
               <IndividuForm toggle={toggle} IndividuRegister={props.IndividuRegister}/>
             
        </ModalBody>
      </Modal> );
    };

    export default Register;