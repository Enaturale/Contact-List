import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditIcon from "@material-ui/icons/Edit";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ marginBottom: "20px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div style={{ marginLeft: "600px", marginTop: "-40px" }}>
        {/* <i className="trash alternative outline icon"></i> */}
        <DeleteForeverOutlinedIcon
          style={{ color: "red", marginTop: "7px", marginRight: "10px" }}
          onClick={() => props.clickDeleteHandler(id)}
        />
        <Link
          to={{ pathname: `/edit`, state: { contact: props.contact } }}
        >
        <i
          className="edit alternative outline icon"
          style={{ color: "blue" }}
          
        >
          
        </i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
