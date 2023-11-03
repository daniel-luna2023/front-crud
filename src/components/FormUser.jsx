import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/Formuser.css"


const FormUser = ({ createUsers, infoUpdate, updateUsers, setInfoUpdate, closeForm, setCloseForm}) => {

  

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(infoUpdate);
  }, [infoUpdate]);

  const submit = (data) => {
    if (infoUpdate) {
      //update
      updateUsers('/users', infoUpdate.id, data)
      setInfoUpdate()
    } else {
      //create
      createUsers("/users", data);
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close_form' }`}>
    <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
      <h2 className="formuser_title">{infoUpdate ? "Update" : "New User"}</h2>
      <div onClick={handleCloseForm} className="formuser_close">X</div>
      <div className="formuser_group">
        <label className="formuser_label" htmlFor="email">Email</label>
        <input className="formuser_input" {...register("email")} type="email" id="email" />
      </div>
      <div className="formuser_group">
        <label className="formuser_label" htmlFor="password">Password</label>
        <input className="formuser_input" {...register("password")} type="password" id="password" />
      </div>
      <div className="formuser_group">
        <label className="formuser_label" htmlFor="first_name">First name</label>
        <input className="formuser_input" {...register("first_name")} type="text" id="first_name" />
      </div>
      <div className="formuser_group">
        <label className="formuser_label" htmlFor="last_name">Last name</label>
        <input className="formuser_input" {...register("last_name")} type="text" id="last_name" />
      </div>
      <div className="formuser_group">
        <label className="formuser_label" htmlFor="birthday">Birthday</label>
        <input className="formuser_input" {...register("birthday")} type="date" id="birthday" />
      </div>
      <button className="formuser_btn">{infoUpdate ? "Update" : "create"}</button>
    </form>
    </div> 
  );
};

export default FormUser;
