import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div style = {{marginLeft: '600px', marginTop: "0px"}}>
      {/* <i className="trash alternative outline icon"></i> */}
      <DeleteForeverOutlinedIcon
        style={{  color: "red", marginTop: "7px" }}
        onClick={() => props.clickDeleteHandler(id)}
      />
      </div>
    </div>
  );
};

export default ContactCard;
