import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    loadUsers();
  }, []);
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }


  const loadUsers = async () => {
    const result = await axios.get("https://62a6bb9697b6156bff7e6251.mockapi.io/v1/apis");
    console.log(result, "result")
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`https://62a6bb9697b6156bff7e6251.mockapi.io/v1/apis/${id}`);
    loadUsers();
  };

  return (
    <div className="container">

      <div className="py-4">
        <div style={{
          width: "30%",
          height: "50px",
          margin: "auto"
        }}>
          <input placeholder="search" onChange={(e) => onChangeSearch(e)} />
          <button style={{ backgroundColor: '#007bff', color: "white" }}>Search Here</button>
        </div>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.filter((val) => {
                if (search === "") {
                  return val
                }
                else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                  return val
                }
              }).map((user) => (
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.description}</td>
                  <td>{user.email}</td>
                  <td>

                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
