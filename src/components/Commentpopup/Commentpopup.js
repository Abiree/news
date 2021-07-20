import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Commentpopup.scss';
import { Button, Modal, ModalBody } from 'reactstrap';

import { news } from '../Data/Data';
const Commentpopup = (props) =>{ 

  const comm = props.comments

  console.log(comm)

  
  
  const {modal,toggle,unmountOnClose} = props;
  const hpStyle = {
    "text-align":"center",
    "margin-bottom":"30px"
  };
  const ButtonStyle = {
    "display":"block",
    "width":"100%",
    "margin":"10px 0px 10px 0px", 
    "background":"#e74c3c",
    "border-color":"#e74c3c",
   "color":"white"
  };
  const inputStyle = {
    "outline": "0",
    "border-width": "0 0 1px",
    "border-color":"grey",
    "border-radius":"0px",
    "margin":"0px 0px 10px 0px",
    "padding":"10px"
  };
  const iStyle = {
    "margin-right":"10px"
  }
  const closeComment = async()=>{
    toggle();
  }
 
  const datamap = comm.length===0 ? <div style={{"color":"white","text-align":"center","font-size":"20px","width":"100%"}}>Their s no news</div>:Object.values(comm).map((element)=>{
    
    return(
      <>
      
        <ul id="comments-list" class="comments-list" >
        <li>
          <div class="comment-main-level">
          <div class="comment-avatar">
            <img style={{"width":"64px","height":"64px"}} src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/>
            </div>
            <div class="comment-box">
              <div class="comment-head">
               
              {element==null? null : <h6 class="comment-name" style={{ "margin-bottom": "0px"}}><a>{element.name}</a></h6>}
                  <span ><a>6min ago</a></span>
                 
                </div>
              {	element==null? null :<div class="comment-content">{element.comment}</div>}
            </div>
          </div>
          
        
        </li>
      </ul>
  
  </>
  
    );
  })
  return(
    
    <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
    <ModalBody>
    <h5 style={hpStyle}><b>Comments</b></h5>
    <div class="comment-main-level">
          <div class="comment-avatar">
            <img style={{"width":"64px","height":"64px"}} src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/>
            </div>
            <div class="comment-box">
             
              <div class="comment-content">
                <textarea  placeholder="  Add comment..." style={inputStyle} id="wid"> </textarea>
                <button style={ButtonStyle}>Add Comment</button>
						</div>
            </div>
          </div>
     {datamap}
    </ModalBody>
    </Modal>
  
);
}
Commentpopup.propTypes = {};

Commentpopup.defaultProps = {};

export default Commentpopup;
