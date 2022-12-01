import React, { Component } from 'react'

export default class Operan extends Component {

  render() {
    // karena banyak memanggil this.props maka kita bisa sederhanakan seperti ini :
    const { makanan, gantiMakanan } = this.props;

    return (
      <div>
        <hr />
        {/* <h2>Operan State yang menjadi Props : {this.props.makanan}</h2> */}
        <h2>Operan State yang menjadi Props : {makanan}</h2>

        {/* <button onClick={() => this.props.gantiMakanan('Telur')}>Ganti Makanan</button> */}
        <button onClick={() => gantiMakanan('Telur')}>Ganti Makanan</button>
      </div>
    )
  }
}
// props juga bisa berupa suatu function, cth : gantiMakanan
