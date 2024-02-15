import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDivisi = () => {
  const [divisi, setDivisi] = useState("");
  const [idDivisi, setIdDivisi] = useState("");
  const navigate = useNavigate();

  const saveDivisi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/divisi", {
        id_divisi: idDivisi,
        divisi,
      });
      navigate("/divisi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveDivisi}>
          <div className="field">
            <label className="label">ID Divisi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={idDivisi}
                onChange={(e) => setIdDivisi(e.target.value)}
                placeholder="ID Divisi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Divisi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={divisi}
                onChange={(e) => setDivisi(e.target.value)}
                placeholder="Divisi"
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

export default AddDivisi;
