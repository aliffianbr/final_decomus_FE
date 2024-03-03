import Table from 'react-bootstrap/Table';
import React from 'react';
import './Tabel.css'; 


const Tabel = ({ restos, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Customer</th>
          <th>No Meja</th>
          <th>Pesanan</th>
          <th>Total Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {restos.map((resto, index) => {
          return (
            <tr key={index} className="table-row">
              <td>{index + 1}</td>
              <td>{resto.nama_customer}</td>
              <td>{resto.no_meja}</td>
              <td>{resto.pesanan}</td>
              <td>{resto.total_harga}</td>
              <td>
                {/* Tombol Edit */}
                <button className='btn btn-warning btn-sm mr-2 btn-edit' onClick={() => editData(resto.id)}>Edit</button>
                {/* Tombol Hapus */}
                <button className='btn btn-danger btn-sm btn-hapus' onClick={() => hapusData(resto.id)}>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Tabel;
