import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditJabatan = () => {
  const [id_jabatan, setIdJabatan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [gaji, setGaji] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getJabatanById();
  }, []);

  const updateJabatan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/jabatan/${id}`, {
        id_jabatan,
        jabatan,
        gaji_pokok: gaji,
      });
      navigate("/jabatan");
    } catch (error) {
      console.log(error);
    }
  };

  const getJabatanById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/jabatan/${id}`);
      setIdJabatan(response.data.id_jabatan);
      setJabatan(response.data.jabatan);
      setGaji(response.data.gaji_pokok);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateJabatan}>
          <div className="field">
            <label className="label">ID Jabatan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={id_jabatan}
                onChange={(e) => setIdJabatan(e.target.value)}
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
                placeholder="Gaji Pokok"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJabatan;
