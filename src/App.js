import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import PegawaiList from "./components/pegawai/PegawaiList";
import JabatanList from "./components/jabatan/JabatanList";
import DivisiList from "./components/divisi/DivisiList";

import AddPegawai from "./components/pegawai/AddPegawai";
import AddJabatan from "./components/jabatan/AddJabatan";
import AddDivisi from "./components/divisi/AddDivisi";

import EditPegawai from "./components/pegawai/EditPegawai";
import EditJabatan from "./components/jabatan/EditJabatan";
import EditDivisi from "./components/divisi/EditDivisi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PegawaiList />} />
          <Route path="/add" element={<AddPegawai />} />
          <Route path="/edit/:id" element={<EditPegawai />} />
          //Jabatan
          <Route path="/jabatan" element={<JabatanList />} />
          <Route path="/jabatan/add" element={<AddJabatan />} />
          <Route path="/jabatan/edit/:id" element={<EditJabatan />} />
          //Divisi
          <Route path="/divisi" element={<DivisiList />} />
          <Route path="/divisi/add" element={<AddDivisi />} />
          <Route path="/divisi/edit/:id" element={<EditDivisi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
