import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPegawai = () => {
  const [id_pegawai, setIdPegawai] = useState("");
  const [nama_pegawai, setNamaPegawai] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jabatanOptions, setJabatanOptions] = useState([]);
  const [divisiOptions, setDivisiOptions] = useState([]);
  const [selectedJabatan, setSelectedJabatan] = useState("");
  const [selectedDivisi, setSelectedDivisi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch jabatan options
    axios
      .get("http://localhost:5000/jabatan")
      .then((response) => {
        setJabatanOptions(response.data);
      })
      .catch((error) => {
        console.log("Error fetching jabatan options:", error);
      });

    // Fetch divisi options
    axios
      .get("http://localhost:5000/divisi")
      .then((response) => {
        setDivisiOptions(response.data);
      })
      .catch((error) => {
        console.log("Error fetching divisi options:", error);
      });

    getPegawaiById();
  }, []);

  const updatePegawai = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pegawai/${id}`, {
        nama_pegawai,
        alamat,
        id_jabatan: selectedJabatan,
        id_divisi: selectedDivisi,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getPegawaiById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
      const data = response.data;
      setIdPegawai(data.id_pegawai);
      setNamaPegawai(data.nama_pegawai);
      setAlamat(data.alamat);
      setSelectedJabatan(data.id_jabatan);
      setSelectedDivisi(data.id_divisi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePegawai}>
          <div className="field">
            <label className="label">Nama Pegawai</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_pegawai}
                onChange={(e) => setNamaPegawai(e.target.value)}
                placeholder="Nama Pegawai"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jabatan</label>
            <div className="control">
              <div className="select">
                <select
                  value={selectedJabatan}
                  onChange={(e) => setSelectedJabatan(e.target.value)}
                >
                  <option value="">Pilih Jabatan</option>
                  {jabatanOptions.map((jabatan) => (
                    <option key={jabatan.id_jabatan} value={jabatan.id_jabatan}>
                      {jabatan.jabatan}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Divisi</label>
            <div className="control">
              <div className="select">
                <select
                  value={selectedDivisi}
                  onChange={(e) => setSelectedDivisi(e.target.value)}
                >
                  <option value="">Pilih Divisi</option>
                  {divisiOptions.map((divisi) => (
                    <option key={divisi.id_divisi} value={divisi.id_divisi}>
                      {divisi.divisi}
                    </option>
                  ))}
                </select>
              </div>
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

export default EditPegawai;
