import React, { Component } from 'react'

// class Component
export default class Navbar extends Component {
  render() {
    return (
      <div>Navbar</div>
    )
  }
}

// Functional Component
// export default function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// Arrow Function Component
// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }
// export default Navbar;

// Kalau kita menggunakan Arrow Function, kita perlu gunakan export default
// kalau tidak pakai export default, nanti di App.js kita gunakan tanda { } setelah import