import React from 'react'
import { Table } from 'react-bootstrap'

const Tabel = ({ makanan, editData, hapusData }) => {
  return (
    <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanan.map((makan, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makan.nama}</td>
              <td>{makan.deskripsi}</td>
              <td>Rp. {makan.harga}</td>
              <td>
                {/* oper id */}
                <button className='btn btn-warning mr-2' onClick={() => editData(makan.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => hapusData(makan.id)}>Hapus</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Tabel;