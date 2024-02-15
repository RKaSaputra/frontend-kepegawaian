import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DivisiList = () => {
  const [divisi, setDivisi] = useState([]);

  useEffect(() => {
    getDivisi();
  }, []);

  const getDivisi = async () => {
    const response = await axios.get("http://localhost:5000/divisi");
    setDivisi(response.data);
  };

  const deleteDivisi = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/divisi/${id}`);
      getDivisi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Divisi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {divisi.map((divisi, index) => (
              <tr key={divisi.id_divisi}>
                <td>{index + 1}</td>
                <td>{divisi.divisi}</td>
                <td>
                  <Link
                    to={`edit/${divisi.id_divisi}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteDivisi(divisi.id_divisi)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DivisiList;
