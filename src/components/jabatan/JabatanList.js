import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JabatanList = () => {
  const [jabatan, setJabatan] = useState([]);

  useEffect(() => {
    getJabatan();
  }, []);

  const getJabatan = async () => {
    const response = await axios.get("http://localhost:5000/jabatan");
    setJabatan(response.data);
  };

  const deleteJabatan = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/jabatan/${id}`);
      getJabatan();
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
              <th>Nama Jabatan</th>
              <th>Gaji Pokok</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jabatan.map((jabatan, index) => (
              <tr key={jabatan.id_jabatan}>
                <td>{index + 1}</td>
                <td>{jabatan.jabatan}</td>
                <td>{jabatan.gaji_pokok}</td>
                <td>
                  <Link
                    to={`edit/${jabatan.id_jabatan}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteJabatan(jabatan.id_jabatan)}
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

export default JabatanList;
