import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PegawaiList = () => {
  const [pegawai, setPegawai] = useState([]);
  const [jabatan, setJatan] = useState([]);
  const [divisi, setDivisi] = useState([]);

  useEffect(() => {
    getPegawai();
  }, []);

  const getPegawai = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pegawai");
      setPegawai(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getJabatan = async () => {
  //   const response = await axios.get("http://localhost:5000/jabatan");
  //   setJabatan(response.data);
  // };

  // const getDivisi = async () => {
  //   const response = await axios.get("http://localhost:5000/divisi");
  //   setDivisi(response.data);
  // };

  const deletePegawai = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pegawai/${id}`);
      getPegawai();
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
              <th>Nama Pegawai</th>
              <th>Alamat</th>
              <th>Jabatan</th>
              <th>Divisi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pegawai.map((pegawai, index) => (
              <tr key={pegawai.id_pegawai}>
                <td>{index + 1}</td>
                <td>{pegawai.nama_pegawai}</td>
                <td>{pegawai.alamat}</td>
                <td>{pegawai.id_jabatan}</td>{" "}
                {/* Menampilkan informasi jabatan */}
                <td>{pegawai.id_divisi}</td>{" "}
                {/* Menampilkan informasi divisi */}
                <td>
                  <Link
                    to={`edit/${pegawai.id_pegawai}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deletePegawai(pegawai.id_pegawai)}
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

export default PegawaiList;
