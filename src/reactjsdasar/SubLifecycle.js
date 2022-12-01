import React, { Component } from 'react'

export default class SubLifecycle extends Component {

  componentWillUnmount() {
    this.props.ubahMakanan('Sate')
  }

  // componentWillUnmount akan dipanggil saat dicabut, dan dia mengupdate isi value


  render() {
    return (
      <div>
        <h2>Component SubLifecycle</h2>
      </div>
    )
  }
}
