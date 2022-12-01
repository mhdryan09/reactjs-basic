import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {

  // constructor adalah kodingan yang pertama kali dijalankan
  constructor(props) {
    super(props);
    this.state = {
      makanan: 'bakso'
    }
  }

  // fn ubah makanan
  gantiMakanan = (makananBaru) => {
    this.setState({
      makanan: makananBaru
    })
  }

  // state bisa jadi props, ketika dia di oper ke component lain

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.gantiMakanan('Soto')}>Ganti Makanan</button>
        {/* mengirim state sebagai props */}
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
      </div>
    )
  }
}

  // state bisa diubah sedangkan props tidak bisa
  // props adalah hasil dari operan dari component utama ke component bawahannya 
  // dan bisa berupa state dan bisa arrow function
  // state : makanan, dan arrow function : ganti makanan
