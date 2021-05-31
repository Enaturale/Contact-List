import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    const{name, email} = props.location.state.contact
  return (
    <div className="main" style = {{marginTop: '100px', textAlign: 'center'}}>
      <div className="ui main centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>

        <div className="content" style ={{textAlign: 'center'}}>
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className= "center-div">
            <Link to="/"><button className="ui button blue center "> Back to Contact List</button></Link>
      </div>
    </div>
  );
};

export default ContactDetail;
