import React from "react";
import "./styles/Usercard.css"

const UserCard = ({ user, deleteUsers, setInfoUpdate, handleOpenForm }) => {

  const handleDelete = () => {
    deleteUsers('/users', user.id)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
    handleOpenForm()
  }
  return (
    <div className="card_conteiner">
    <article className="card_article">
      <h3 className="card_title">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <hr />
      <ul className="card_ul">
        <li className="card_li">
          <span className="card_span">Email: </span>
          <span className="card_span"> {user.email}</span>
        </li>
        <li className="card_li">
          <span className="card_span">Birthday: </span>
          <span className="card_span">{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <button className="card_btn" onClick={handleDelete}><i className='bx bxs-trash'></i></button>
      <button className="card_btn" onClick={handleEdit}><i className='bx bxs-edit-alt'></i></button>
    </article>
    </div>
  );
};

export default UserCard;
