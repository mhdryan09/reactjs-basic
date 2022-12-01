import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel.js'
import Formulir from './Formulir'
import { Col, Row } from 'react-bootstrap'

export default class Crud extends Component {

  constructor(props) {
    super(props)

    // set nilai awal
    this.state = {
      makanan: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: ""
    }
  }

  // handle ketika ada inputan dari user
  handleChange = (e) => {
    // ubah state
    this.setState({
      // ambil name dan value dari inputan
      [e.target.name]: e.target.value
    })
  }

  // handle ketika mengirim data form 
  handleSubmit = (e) => {
    // menghilangkan reload browser
    e.preventDefault();
    // console.log("Data : ", this.state);

    // kalau id nya kosong
    if (this.state.id === "") {
      // simpan dengan data yang baru
      this.setState({
        makanan: [
          // mengambil data makanan
          ...this.state.makanan,
          // update data makanan
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          }
        ]
      })
    } else {
      // filter makanan selain yang dipilih lalu map berdasarkan id
      const makananSelainYangDiPilih = this.state.makanan
        .filter((makan) => makan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan
        })

      this.setState({
        makanan: [
          // mengambil data makanan
          ...makananSelainYangDiPilih,
          // update data makanan
          {
            id: this.state.makanan.length,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          }
        ]
      })
    }



    // mengosongkan state alias reset inputan
    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: ""
    })
  }

  // menerima id dari tabel.js
  editData = (id) => {
    // filter makanan lalu map berdasarkan id
    const makananYangDiPilih = this.state.makanan
      .filter((makan) => makan.id === id)
      .map((filterMakanan) => {
        return filterMakanan
      })

    // set State dari makanan yang dipilih
    this.setState({
      nama: makananYangDiPilih[0].nama,
      deskripsi: makananYangDiPilih[0].deskripsi,
      harga: makananYangDiPilih[0].harga,
      id: makananYangDiPilih[0].id
    })
  }

  // hapus data berdasarkan id
  hapusData = (id) => {
    // buat array baru, selain array yang dipilih untuk dihapus
    const makananBaru = this.state.makanan
      .filter((makan) => makan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan
      })

    this.setState({
      makanan: makananBaru
    })
  }

  render() {
    // console.log(this.state.makanan);
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Row>
            <Col lg={4}>
              {/* oper semua state kedalam component formulir */}
              <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </Col>
            <Col lg={{ span: 7, offset: 1 }}>
              <Tabel makanan={this.state.makanan} editData={this.editData} hapusData={this.hapusData} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
