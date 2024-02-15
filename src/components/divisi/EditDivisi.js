import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDivisi = () => {
  const [id_divisi, setIdDivisi] = useState("");
  const [divisi, setDivisi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDivisiById();
  }, []);

  const updateDivisi = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/divisi/${id}`, {
        id_divisi,
        divisi,
      });
      navigate("/divisi");
    } catch (error) {
      console.log(error);
    }
  };

  const getDivisiById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/divisi/${id}`);
      setIdDivisi(response.data.id_divisi);
      setDivisi(response.data.divisi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateDivisi}>
          <div className="field">
            <label className="label">ID Divisi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={id_divisi}
                onChange={(e) => setIdDivisi(e.target.value)}
                placeholder="ID Divisi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">divisi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={divisi}
                onChange={(e) => setDivisi(e.target.value)}
                placeholder="divisi"
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

export default EditDivisi;
