import React, { Component } from 'react'
import SubLifecycle from './SubLifecycle'

export default class Lifecycle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      makanan: 'Bakso',
      data: {},
      tampilHalamanSub: false
    }
  }

  // ambil data API lalu simpan ke state
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        // update data state
        this.setState({
          data: json
        })
      })
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value
    })
  }

  render() {
    return (
      <div>
        {/* <h2>{this.state.data.title}</h2> */}
        <h2>{this.state.makanan}</h2>

        {/* Panggil Halaman Sublifecycle */}
        {this.state.tampilHalamanSub && <SubLifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

        <button onClick={() => this.setState({
          tampilHalamanSub: !this.state.tampilHalamanSub
        })}>tampilHalamanSub</button>
      </div>
    )
  }
}

/* ComponentDidMount : apa yang dia lakukan ketika komponen itu dipasang
biasanya dilakukan saat get API. Tugasnya ambil/fetch API lalu menyimpan ke dalam state.

ComponentDidUpdate : ketika props maupun state ada perubahan maka ia akan menjalankan 
komponen ini
contoh : sebuah form add data. ketika submit maka menyimpan ke database API
sehingga API tersebut ada perubahan

ComponenWillUnmout : ketika suatu komponen sudah tidak digunakan kembali. */