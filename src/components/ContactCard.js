import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import user from '../images/user.png'

const ContactCard = ( props) => {
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <img className ="ui avatar image" src ={user} alt ="user" /> 
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        {/* <i className="trash alternative outline icon"></i> */}
        <DeleteForeverOutlinedIcon  style ={{marginLeft: '70%', color:"red", marginTop: "7px"}}/>
        
      </div>
    )

}

export default ContactCard;