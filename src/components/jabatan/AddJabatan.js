import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJabatan = () => {
  const [idJabatan, setidJabatan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [gaji, setGaji] = useState("");
  const navigate = useNavigate();

  const saveJabatan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/jabatan", {
        id_jabatan: idJabatan,
        jabatan,
        gaji_pokok: gaji,
      });
      navigate("/jabatan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveJabatan}>
          <div className="field">
            <label className="label">ID Jabatan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={idJabatan}
                onChange={(e) => setidJabatan(e.target.value)}
                placeholder="ID Jabatan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jabatan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jabatan}
                onChange={(e) => setJabatan(e.target.value)}
                placeholder="Jabatan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gaji Pokok</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={gaji}
                onChange={(e) => setGaji(e.target.value)}
                placeholder="Gaji"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJabatan;
