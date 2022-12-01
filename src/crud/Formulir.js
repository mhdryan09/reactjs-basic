import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

// ambil operan state dan function 
const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit, id }) => {
  return (
    <div className='mt-5'>
      <Row>
        <Col>
          <h4>{id ? 'Edit Data' : 'Tambah Data'}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="nama">
              <Form.Label>Nama Makanan </Form.Label>
              {/* ambil value dari operan props di index.js */}
              <Form.Control type="text" name="nama" value={nama} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows="3" name="deskripsi" value={deskripsi} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga" value={harga} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Tambah
            </Button>
          </Form></Col>
      </Row>
    </div>
  )
}

export default Formulir