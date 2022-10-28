import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();

  const [description, setDescription] = useState("");
  const onInputChange = e => {
    setDescription(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    history.push("/");
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Description</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Edit your Description"
              name="name"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Description</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
