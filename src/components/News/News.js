import React,{useState} from 'react';
import PropTypes from 'prop-types';
import  './News.scss';
import {news,users} from '../Data/Data';
import Login from '../Login/Login';
import Register from '../Login/register';



const News = (props) => {
  const {location} = props;
  const [isOpen , setIsOpen] = useState(false);
  /*----------------------------login---------------------------------*/
  const [loginmodal, setloginModal] = useState(false);
  const [loginunmountOnClose] = useState(false);
  const toggleLoginModal = () => setloginModal(!loginmodal);
  /*----------------------------Register-------------------------------*/
  const [registermodal, setregisterModal] = useState(false);
  const [registerunmountOnClose] = useState(false);
  const toggleRegisterModal = () => setregisterModal(!registermodal);
  
  /*-------------------------------------------------------------------*/
  const toggle = () => setIsOpen(!isOpen);
  console.log(users)
  const datamap = news.length===0 ? <div style={{"color":"white","text-align":"center","font-size":"20px","width":"100%"}}>Their s no news</div>:news.map((element)=>{
    return(
      <div class="column">
      <div class="demo-title">{element.city}</div>
      
      <div class="post-module">
        
        <div class="thumbnail">
          <div class="date">
            <div class="day">{element.day}</div>
            <div class="month">{element.month}</div>
          </div><img src={element.image}/>
        </div>
      
        <div class="post-content">
          <div class="category">Photos</div>
          <h1 class="title">{element.title}</h1>
          <h2 class="sub_title">{element.sub_title}</h2>
          <p class="description">{element.description}</p>
          <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i> {element.time}</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> {element.comments.length}</a></span></div>
        </div>
      </div>
    </div>
  
  
  
    );
  })
return(
  <>
  <div className="navbarr">
  <ul>
   <li ><a id="white" href="#news">News</a></li>
   
   <li id="withhover" style={{"float":"right"}}>
     {users.name=="" ?<a class="active" id="white" onClick={toggleLoginModal}>Login<i class="fa fa-sign-in" style={{"margin-left":"10px"}} aria-hidden="true"/></a>:<div style={{"display":"flex"}}><a id="white" class="active" href="#about">{users.name}<i class="fa fa-sign-in" style={{"margin-left":"10px"}} aria-hidden="true"/></a></div>}
     
       </li>
 </ul>
 <Login modal={loginmodal} toggle={toggleLoginModal} toggleRegister={toggleRegisterModal} unmountOnClose={loginunmountOnClose} Login={props.Login}/>
 <Register modal={registermodal} toggle={toggleRegisterModal} toggleLogin={toggleLoginModal} unmountOnClose={registerunmountOnClose}  IndividuRegister={props.IndividuRegister}  OrganisationRegister={props.OrganisationRegister} />
  </div>
  
   <div class="containerr">
 
  <div class="info">
    <h1>The News</h1><span>Made with <i class='fa fa-heart animated infinite pulse'></i> by <a href='http://andy.design'>Abire Ghallabi</a> </span>
  </div>

  <div className="flxx">
    {datamap}

  
  </div>
  

</div>
</>


);
}

News.propTypes = {};

News.defaultProps = {};

export default News;
